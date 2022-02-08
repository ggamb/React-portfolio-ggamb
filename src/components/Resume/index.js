import React from 'react';
import resumeGambardella from '../../assets/resume/resumeGambardella.docx'
import JavascriptIcon from '@mui/icons-material/Javascript';
import StorageIcon from '@mui/icons-material/Storage';
import HtmlIcon from '@mui/icons-material/Html';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import SaveIcon from '@mui/icons-material/Save';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import AddLinkIcon from '@mui/icons-material/AddLink';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import CssIcon from '@mui/icons-material/Css';
import FormatPaintIcon from '@mui/icons-material/FormatPaint';

import {
    Typography,
    Box,
    Grid,
    List,
    ListItem,
    ListItemText,
    ListItemIcon
} from "@mui/material";

const frontEndTechnologies = [
    {
        id: 1,
        name: 'JavaScript, React.js, jQuery, Node.js, Express.js, Jest testing framework',
        icon: JavascriptIcon,
    },
    {
        id: 2,
        name: 'HTML5',
        icon: HtmlIcon
    },
    {
        id: 3,
        name: 'CSS3',
        icon: CssIcon
    },
    {
        id: 4,
        name: 'Bootstrap API, Material UI (used through this portfolio!)',
        icon: ColorLensIcon
    },
    {
        id: 5,
        name: 'Responsive Design, PWA, webpack, service workers',
        icon: FlashOnIcon
    },
    {
        id: 6,
        name: 'State (React Context API, Redux)',
        icon: SaveIcon
    }
];

const backEndTechnologies = [
    {
        id: 1,
        name: 'Node.js',
        icon: JavascriptIcon
    },
    {
        id: 2,
        name: 'Express.js',
        icon: JavascriptIcon
    },
    {
        id: 3,
        name: 'MySQL2, Sequelize',
        icon: QueryBuilderIcon
    },
    {
        id: 4,
        name: 'Mongoose, MongoDB',
        icon: StorageIcon
    },
    {
        id: 5,
        name: 'GraphQL',
        icon: AddLinkIcon
    }
];

function Resume() {
    return (
        <>
            <h1 className='tab-text'>Resume</h1>
            <br></br>
            <h2>Download my resume <a href={resumeGambardella} download='resumeGambardella.docx'>here!</a></h2>
            <br></br>
            <Box mb={4} sx={{ display: 'flex', backgroundColor: '#F2F4CB', justifyContent: 'center', height: '75%' }}>
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <Typography color={'black'} textAlign='center' sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
                            Front-End Proficiencies
                        </Typography>
                        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                            <List>
                                {frontEndTechnologies.map((front) => (
                                    <ListItem key={front.id}>
                                        <ListItemIcon>
                                            <front.icon sx={{ fontSize: 60, color: '#2b2d42' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={front.name}
                                            sx={{ color: '#2b2d42', p: 2 }}
                                            primaryTypographyProps={{ fontSize: '25px' }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography color={'black'} textAlign='center' sx={{ mt: 4, mb: 2 }} variant="h3" component="div">
                            Back-End Proficiencies
                        </Typography>
                        <Grid sx={{ display: 'flex', justifyContent: 'center' }}>
                            <List>
                                {backEndTechnologies.map((back) => (
                                    <ListItem key={back.id}>
                                        <ListItemIcon>
                                            <back.icon sx={{ fontSize: 60, color: '#2b2d42' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={back.name}
                                            sx={{ color: '#2b2d42', p: 2 }}
                                            primaryTypographyProps={{ fontSize: '25px' }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}


export default Resume;