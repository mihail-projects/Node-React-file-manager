import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function BasicList(props) {

    return (

        <List style={{ margin: 'auto', width: '50%', height: '100%', paddingTop: '30px' }}>

            {props.files.map((element, index) => {
                return (

                    <ListItem disablePadding key={index} style={{ paddingBottom: '0px', marginTop: '2px'}}>
                        <ListItemButton style={{ border: '2px solid #292929', borderRadius: '10px', padding: '0px', paddingLeft: '10px' }} onClick={() => props.func(element)}>
                            <ListItemText primary={element.split('_')[0]} secondary={element.split('_')[1].toUpperCase() + ' ' + element.split('_')[2] + ' ' + element.split('_')[3]} />
                        </ListItemButton>
                    </ListItem>

                )
            })}

        </List>

    )
}
