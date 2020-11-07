function getScroll(w: Window, top?: boolean): number {
    let ret :any = w[`page${top ? 'Y' : 'X'}Offset` as any];
    const method:any = `scroll${top ? 'Top' : 'Left'}`;
    if (typeof ret !== 'number') {
      const d = w.document;
      ret = d.documentElement[top?'scrollTop':'scrollLeft'];
      if (typeof ret !== 'number') {
        ret = d.body[top?'scrollTop':'scrollLeft']  ;
      }
    }
    return ret;
  }
  
  interface CompatibleDocument extends Document {
    parentWindow?: Window;
  }
  
  export function offset(el: Element) {
    const rect = el.getBoundingClientRect();
    const pos = {
      left: rect.left,
      top: rect.top,
    };
    const doc = el.ownerDocument as CompatibleDocument;
    const w = doc.defaultView || doc.parentWindow;
    pos.left += getScroll(w as any);
    pos.top += getScroll(w as any, true);
    return pos;
  }