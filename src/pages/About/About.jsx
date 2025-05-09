import { Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import './about.css'

const About = () => {
    return (
        <div className="about-us-container">
            <h1 className="about-us-heading">About Us</h1>
            <p className="about-us-description">
                Welcome to our resume builder application. We are dedicated to providing you with a powerful and user-friendly tool for creating professional resumes.
            </p>
           
            <p className="about-us-description">
                At Resume_Builder, we prioritize your data security and privacy. Rest assured that your information is safeguarded with advanced encryption.
            </p>
            <p className="about-us-description">
                Our team consists of experienced professionals passionate about making your job search journey smoother
            </p>
            <p className="about-us-description">
                We are committed to continuous improvement. Your feedback is invaluable to us. Please feel free to contact us with your thoughts and suggestions.
            </p>
            <p className="about-us-description">
                <span> Thank you for choosing Resume_Builder. We look forward to helping you succeed in your career!</span>
            </p>

            {/* Share with your friends and colleagues */}
            <Typography variant="h5" className="share-text">
                Share with your Friends
            </Typography>
            <Grid container className="share-icons" justifyContent="center">
                <Grid item>
                    <IconButton color="primary">
                        <WhatsAppIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton color="primary">
                        <FacebookIcon />
                    </IconButton>
                </Grid>
                <Grid item>
                    <IconButton color="primary">
                        <EmailIcon />
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;