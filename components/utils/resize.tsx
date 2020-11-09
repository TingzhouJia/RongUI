import React from "react";
import ResizeObserver from 'resize-observer-polyfill';
import { findDOMNode } from "react-dom";
import toArray from "./toArray";
import { supportRef, composeRef } from "rc-util/lib/ref";
const INTERNAL_PREFIX_KEY = 'rc-observer-key';

export interface ResizeObserverProps {
  children: React.ReactNode;
  disabled?: boolean;
  /** Trigger if element resized. Will always trigger when first time render. */
  onResize?: (size: {
    width: number;
    height: number;
    offsetWidth: number;
    offsetHeight: number;
  }) => void;
}

interface ResizeObserverState {
  height: number;
  width: number;
  offsetHeight: number;
  offsetWidth: number;
}

type RefNode = React.ReactInstance | HTMLElement | null;

// Still need to be compatible with React 15, we use class component here
class ReactResizeObserver extends React.Component<ResizeObserverProps, ResizeObserverState> {

  resizeObserver: ResizeObserver | null = null;

  childNode: RefNode = null;

  currentElement: Element | null = null;

  state = {
    width: 0,
    height: 0,
    offsetHeight: 0,
    offsetWidth: 0,
  };

  componentDidMount() {
    this.onComponentUpdated();
  }

  componentDidUpdate() {
    this.onComponentUpdated();
  }

  componentWillUnmount() {
    this.destroyObserver();
  }

  onComponentUpdated() {
    const { disabled } = this.props;

    // Unregister if disabled
    if (disabled) {
      this.destroyObserver();
      return;
    }

    // Unregister if element changed
    const element = findDOMNode(this.childNode || this) as Element;
    const elementChanged = element !== this.currentElement;
    if (elementChanged) {
      this.destroyObserver();
      this.currentElement = element;
    }

    if (!this.resizeObserver && element) {
      this.resizeObserver = new ResizeObserver(this.onResize);
      this.resizeObserver.observe(element);
    }
  }

  onResize: ResizeObserverCallback = (entries: ResizeObserverEntry[]) => {
    const { onResize } = this.props;

    const target = entries[0].target as HTMLElement;

    const { width, height } = target.getBoundingClientRect();
    const { offsetWidth, offsetHeight } = target;

    /**
     * Resize observer trigger when content size changed.
     * In most case we just care about element size,
     * let's use `boundary` instead of `contentRect` here to avoid shaking.
     */
    const fixedWidth = Math.floor(width);
    const fixedHeight = Math.floor(height);

    if (
      this.state.width !== fixedWidth ||
      this.state.height !== fixedHeight ||
      this.state.offsetWidth !== offsetWidth ||
      this.state.offsetHeight !== offsetHeight
    ) {
      const size = { width: fixedWidth, height: fixedHeight, offsetWidth, offsetHeight };

      this.setState(size);

      if (onResize) {
        // defer the callback but not defer to next frame
        Promise.resolve().then(() => {
          onResize({
            ...size,
            offsetWidth,
            offsetHeight,
          });
        });
      }
    }
  };

  setChildNode = (node: RefNode) => {
    this.childNode = node;
  };

  destroyObserver() {
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }

  render() {
    const { children } = this.props;
    const childNodes = toArray(children);

     if (childNodes.length === 0) {
      return null;
    }

    const childNode = childNodes[0];

    if (React.isValidElement(childNode) && supportRef(childNode)) {
      const { ref } = childNode as any;

      childNodes[0] = React.cloneElement(childNode as any, {
        ref: composeRef(ref, this.setChildNode),
      });
    }

    return childNodes.length === 1
      ? childNodes[0]
      : childNodes.map((node, index) => {
          if (!React.isValidElement(node) || ('key' in node && node.key !== null)) {
            return node;
          }

          return React.cloneElement(node, {
            key: `${INTERNAL_PREFIX_KEY}-${index}`,
          });
        });
  }
}

export default ReactResizeObserver;