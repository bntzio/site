import React from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';
import { IndexPage } from '../components/styled/';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import SkillsSection from '../components/SkillsSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';

export default class Index extends React.Component {
  render() {
    return (
      <IndexPage fluid>
        <Helmet title={config.siteTitle} meta={[{ 'name': 'description', 'content': config.siteDescription }]} />
        <Hero />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </IndexPage>
    );
  }
}
