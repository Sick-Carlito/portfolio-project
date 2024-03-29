import React from "react";
import "./Resume.css";
import Grid from "@material-ui/core/Grid";
import { Icon, Paper, TextField, Typography } from "@material-ui/core";
import resumeData from "../../utils/resumeData";
import CustomTimeline from "../../components/Timeline/Timeline";
import { CustomTimelineSeparator } from "../../components/Timeline/Timeline";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import {
  TimelineContent,
  TimelineDot,
  TimelineSeparator,
  TimelineItem,
  TimelineConnector,
} from "@material-ui/lab";
import CustomButton from "../../components/Button/Button";

const Resume = () => {
  return (
    <>
      {/* About me */}
      <Grid container className="section pb_45 pt_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>

      {/* Education and Experience */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid container className="resume_timeline">
          {/* Experiences or Working history */}
          <Grid item sm={12} md={6}>
            <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
              {resumeData.experiences.map((experience) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent className="timeline_content">
                    <Typography className="timeline_title">
                      {experience.title}
                    </Typography>
                    <Typography variant="caption" className="timeline_date">
                      {experience.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="timeline_description"
                    >
                      {experience.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>

          {/* Education */}
          <Grid item sm={12} md={6}>
            <CustomTimeline title="Education History" icon={<SchoolIcon />}>
              {resumeData.educations.map((education) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent className="timeline_content">
                    <Typography className="timeline_title">
                      {education.title}
                    </Typography>
                    <Typography variant="caption" className="timeline_date">
                      {education.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="timeline_description"
                    >
                      {education.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>

      {/* Services */}
      <Grid container className="section pb_45 ">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">My Services</h6>
        </Grid>
        <Grid xs={12}>
          <Grid container spacing={3} justify="space-around">
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service-icon">{service.icon}</Icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Skills */}
      <Grid container className="section graybg pb_45 p_50">
        <Grid item xs={12}>
          <Grid container justify="space-between" spacing={3}>
            {resumeData.skills.map((skill) => (
              <Grid item xs={12} sm={6} md={3}>
                <Paper elevetion={0} className="skill">
                  <Typography varient="h6" className="skill_title">
                    {skill.title}
                  </Typography>
                  {skill.description.map((element) => (
                    <Typography variant="body2" className="skill_description">
                      <TimelineDot
                        variant={"outlined"}
                        className="timeline_dot"
                      />
                      {element}
                    </Typography>
                  ))}
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>

      {/* Contact */}
      <Grid container className="section pt_45 pb_45" spacing={5} >
        {/* Contact form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span></span>
              <h6 className='section_title_text'> Contact Form</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='name' label='Name'/>
                </Grid>
                 <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='email' label='Email'/>
                </Grid>
                 <Grid item xs={12} sm={6}>
                  <TextField fullWidth name='message' label='Message' multiline rows={4}/>
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text='Submit'/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {/* Contact information */}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className='section_title mb_30'>
              <span></span>
              <h6 className='section_title'>Contact informationc</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container>
          
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Email: </span>{resumeData.email}
                  </Typography>

                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Phone: </span>{resumeData.phone}
                  </Typography>

                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>GitHub: </span>{resumeData.github}
                  </Typography>

                </Grid>
                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>Twitter: </span>{resumeData.twitter}
                  </Typography>

                </Grid>

                <Grid item xs={12}>
                  <Typography className='contactInfo_item'>
                    <span>LinkedIn: </span>{resumeData.linkedin}
                  </Typography>

                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
               <Grid container className='contactInfo_socialsContainer'>
                    {Object.keys(resumeData.socials).map(key=>(
                      <Grid item className='contactInfo_social'>
                        <a href={resumeData.socials[key].link}>
                          {resumeData.socials[key].icon}
                        </a>
                      </Grid>
                    ))}
               </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
