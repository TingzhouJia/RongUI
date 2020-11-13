import InternalRadio,{InnerRadioProps} from './radio'
import RadioGroup from './group'
 
interface CompoundedComponent
  extends React.ForwardRefExoticComponent<InnerRadioProps & React.RefAttributes<HTMLElement>> {
  Group: typeof RadioGroup;
 
}
const Radio = InternalRadio as CompoundedComponent;
export default Radio