import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemText, IconButton, Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import DeleteIcon from '@mui/icons-material/Delete'
import Forms from '../forms';
import type { IAccordionItemProps } from "./types"
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addData, deleteSectionData } from '../../../../store/slices/sectionsSlice';
import { v4 as uuidv4 } from 'uuid'
import { getItemText } from './helper';
import type { AppDispatch } from '../../../../store/configureStore';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const EditorAccordion = ({sectionType, title, data}: IAccordionItemProps) => {
    const [onEditing, setOnEditing] = useState<null | string>(null)
    const dispatch = useDispatch<AppDispatch>()

    const addSection = () => {
        const id = uuidv4()
        dispatch(addData({data: {id}, sectionType}))
        setOnEditing(id)
    }

    const closeForm = () =>  setOnEditing(null)

    const makeForm = (id:string, closeFunc:() => void) => {
        if (Forms[sectionType]) {
            return Forms[sectionType](id, closeFunc)
        }
        return null
    }

    return (
        <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDownwardIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography component="span">{title}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <List>
                        {data.length === 0 || sectionType === 'personalInformation' ? makeForm(uuidv4(), closeForm) : 
                        data.map((section) => {
                            console.log(section, 'section')
                            if (section.id === onEditing) {
                                return <ListItem key={section.id}>{makeForm(section.id, closeForm)}</ListItem>
                            }
                            const itemText = getItemText(section, sectionType)
                            return (
                                
                                    <ListItem
                                        key={section.id}
                                        onClick={() => setOnEditing(section.id)}
                                        secondaryAction={
                                            <IconButton edge="end" aria-label="delete" onClick={(e) => {
                                                e.stopPropagation()
                                                dispatch(deleteSectionData({id: section.id, sectionType}))
                                            }}>
                                                <DeleteIcon />
                                            </IconButton>
                                        }
                                        sx={{
                                            mb: '15px',
                                            '&:hover': {
                                                backgroundColor: '#f5f5f5', 
                                                cursor: 'pointer'            
                                            }
                                            }}
                                        >
                                        <ListItemText
                                            primary={itemText.primary}
                                            secondary={itemText.secondary}
                                        />
                                    </ListItem>
                                
                            )
                        })}
                    </List>
                    {sectionType !== 'personalInformation' && 
                    <Button variant="outlined" startIcon={<AddCircleIcon /> } onClick={addSection} disabled={!!onEditing}>
                        {`Добавить ${title}`}
                    </Button>}
                </AccordionDetails>
            </Accordion>
    )
}

export default EditorAccordion