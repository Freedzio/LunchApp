import * as React from 'react'
import { Button } from 'reactstrap'

class Mainscreen extends React.Component {
    render() {
        return (
            <div className='centered'>
                <Button color='primary'>Generuj lunche</Button>
            </div>
        )
    }
}

export default Mainscreen