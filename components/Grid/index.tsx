import React from 'react'
import GridContainer from './container'
import GridItem,{GridBasicItemProps} from './items'
interface Props extends React.FC<GridBasicItemProps> {
    Container:typeof GridContainer
}

const Grid:Props=({children,...props})=>{
    return <GridItem {...props}>
            {children}
    </GridItem>
}
Grid.Container=GridContainer

export default Grid
