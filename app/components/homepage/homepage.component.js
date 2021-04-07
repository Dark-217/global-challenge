/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import {
  Grid, Segment, Header, Image, Container, List, Button, Divider
} from 'semantic-ui-react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import RegistrationForm from '../register';
import Banner from './images/banner.png';
import './style.scss';

const HomePage = () => (
  <div className="homepage">
    <Container>
      <div className="banner">
        <img src={Banner} width="100%" alt="Capco banner" />
      </div>
      <Segment style={{ padding: '0' }} vertical>
        <Grid columns="equal" stackable>
          <Grid.Row textAlign="left">
            <Grid.Column style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
              <Image size="medium" centered src="https://d3nn82uaxijpm6.cloudfront.net/assets/website/experiments/akita/variant_c/devices-header-3349320fa849e6a297a3b0d64a6dfdef7307b0fe50f6329a459a0105b76ffff8.jpg" />

              <Header as="h2" className="header">
                <FormattedMessage id="homepage.title" />
              </Header>

              <List ordered>
                <List.Item>Make a donation to our partner charity, <a href="https://give.roomtoread.org/campaign/capco-active-for-education/c186488" target="_blank">Room to Read</a> using the ‘Donate’ button on this page</List.Item>
                <List.Item>If you don't already have the Fitbit or Strava app on your phone, please download and install this on your <a href="https://itunes.apple.com/us/app/fitbit-activity-calorie-tracker/id462638897?" target="_blank">iOS</a> or <a href="https://play.google.com/store/apps/details?id=com.fitbit.FitbitMobile" target="_blank">Android</a> device</List.Item>
                <List.Item>Follow the prompts in the chosen app to create your personal account</List.Item>
                <List.Item>In the 'Register' section on this page, enter your Capco 4-letter ID</List.Item>
                <List.Item>
                  Click 'Register with Fitbit/Strava' and you'll be taken to a page which will ask you to give permission for Capco to
                  access your activity and location data. Please click 'allow'
                </List.Item>
                <List.Item>
                  Simply carry your phone with you or if using Fitbit, wear and sync your Fitbit device and your activity will be counted and added to our global total
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: '2rem', paddingTop: '2rem' }} className="registration">
              <div className="donate">
                <FormattedHTMLMessage id="homepage.instructions" />

                <Button secondary fluid size="massive" as="a" href="https://give.roomtoread.org/campaign/capco-active-for-education/c186488" target="_blank" className="donate-button">
                  <FormattedMessage id="homepage.donate" />
                </Button>
              </div>

              <Divider horizontal><FormattedMessage id="homepage.register" /></Divider>

              <div className="registration-form-container">
                <RegistrationForm />
              </div>

              <div className="progress-button-container">
                <Button color="black" basic size="massive" as="a" href="/progress" className="progress-button">
                  <FormattedMessage id="homepage.progress" />
                </Button>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Container>
  </div>
);

export default HomePage;
