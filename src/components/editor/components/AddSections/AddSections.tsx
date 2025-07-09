import { Button, Grid, Menu, MenuItem } from "@mui/material"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSection } from "../../../../store/slices/sectionsSlice";
import { addSectionsMenuItems } from "./AddSectionItems";
import type { RootState } from "../../../../store/configureStore";
import type { SectionType } from "./types";

const AddSections = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const dispatch = useDispatch()
    const sections = useSelector((state: RootState) => state.sections)
    console.log(sections, 'sec')

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };   

    const addSectionClick = (type:SectionType) => {
        const sectionData = addSectionsMenuItems.find(item => item.sectionType === type);
        if (sectionData) {
            dispatch(addSection(sectionData));
        }
        setAnchorEl(null)
    }

    const menuItems = addSectionsMenuItems.map(menuItem => {
        const disabled = sections.some(section => section.sectionType === menuItem.sectionType)
        return <MenuItem key={menuItem.sectionType} disabled={disabled} onClick={() => addSectionClick(menuItem.sectionType)} >{menuItem.title}</MenuItem>
    })
    return (
            <Grid>
                <Button
                    id="basic-button"
                    aria-controls={anchorEl ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={anchorEl ? 'true' : undefined}
                    variant="contained"
                    endIcon={<KeyboardArrowDownIcon />}
                    onClick={handleClick}
                >
                    Добавить секцию
                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={!!anchorEl}
                    onClose={() => setAnchorEl(null)}
                    slotProps={{
                    // list: {
                    //     'aria-labelledby': 'basic-button',
                    // },
                    }}
                >
                    {menuItems}
                </Menu>
            </Grid>
    )
}

export default AddSections