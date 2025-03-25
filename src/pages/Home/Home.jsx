import { useNavigate } from 'react-router-dom';
import { Typography, Button, Grid } from '@mui/material';
import './home.css'; // Import the CSS file

const Home = () => {

    const navigate = useNavigate();
    //list of templates in array
    const resumeTemplates = [
        { id: 1, name: 'Template 1', description: 'Classic Resume Template', image: '/images/1.jpg' },
        { id: 2, name: 'Template 2', description: 'Modern Resume Template', image: '/images/2.jpg' },
        { id: 3, name: 'Template 3', description: 'Creative Resume Template', image: '/images/3.jpg' }
    ];

    const handleSelectTemplate = () => {
      
        navigate('/details')
    };

    return (
        <div className="container1">
            <Typography variant="h4" gutterBottom>
                Hi, Im <span style={{ color: 'red' }}>Yashwanth A</span>.
                Welcome to My Website
            </Typography>
            <Typography variant="h6" gutterBottom>
                Custom Your Resume Using the Given Template
            </Typography>
            <Grid container spacing={3}>
                {resumeTemplates.map((template) => (
                    <Grid item xs={12} sm={6} md={4} key={template.id}>
                        <div className="template1">
                            <div className="template-image-container1">
                                <img src={template.image} alt={template.name} className="template-image1" />
                            </div>
                            <div className="template-content1">
                                <Typography variant="h6" className="template-name1">
                                    {template.name}
                                </Typography>
                                <Typography variant="body2" className="template-description1">
                                    {template.description}
                                </Typography>
                                <Button onClick={handleSelectTemplate} variant="contained" color="primary" className="select-button1">
                                    SELECT TEMPLATE
                                </Button>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default Home;