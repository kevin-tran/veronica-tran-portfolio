import React, { Fragment } from 'react'
import Button from '../../components/button'

import styles from './info.module.scss'

const InfoPage = () => (
  <section className={styles.container}>
    <div className={styles.socialLinks}>
      <p>Designer</p>
      <Fragment>
        <div className={styles.socialPadding}>
          <Button
            link="https://www.instagram.com/nveronicatran"
            target="_blank"
            rel="noopener"
          >
            Instagram
          </Button>
        </div>
        <div className={styles.socialPadding}>
          <Button
            link="https://www.linkedin.com/in/veronica-tran"
            target="_blank"
            rel="noopener"
          >
            LinkedIn
          </Button>
        </div>
        <div className={styles.socialPadding}>
          <Button
            link="https://dribbble.com/veronicatran"
            target="_blank"
            rel="noopener"
          >
            Dribbble
          </Button>
        </div>
        <div className={styles.socialPadding}>
          <Button
            link="https://www.are.na/veronica-tran"
            target="_blank"
            rel="noopener"
          >
            are.na
          </Button>
        </div>
      </Fragment>
    </div>
    <div className={styles.infoContainer}>
      <p>
        Hello! My name is Veronica. I enjoy crafting future-focused digital
        experiences and visual direction. My focuses are within UI/UX, design
        direction, digital branding and print editorial. I am interested in
        design research projects within the areas of futures thinking, social
        innovation, and HMI.
      </p>

      <div className={styles.emailContainer}>
        <Button
          link="mailto:nveronicatran@gmail.com"
          className={styles.hideMobile}
        >
          nveronicatran@gmail.com
        </Button>
      </div>

      <table className={styles.table}>
        <tbody>
          <tr>
            <td>2019 -</td>
            <td>Hangar Interaction Lab</td>
          </tr>
          <tr>
            <td>2016 -</td>
            <td>Freelancing between MEL / BCN</td>
          </tr>
          <tr className={styles.strikethrough}>
            <td>2018-2019</td>
            <td>Masters of Design for Emergent Futures @ IAAC/Elisava</td>
          </tr>
          <tr className={styles.strikethrough}>
            <td>2017 - 2018</td>
            <td>Digital Designer @ Liquid</td>
          </tr>
          <tr className={styles.strikethrough}>
            <td>2015 - 2017</td>
            <td>Intern @ Hello Monday, I/D Lab, Wildhen Design</td>
          </tr>

          <tr className={styles.strikethrough}>
            <td>2015 - 2016</td>
            <td>Interaction Design at DMJX</td>
          </tr>

          <tr className={styles.strikethrough}>
            <td>2014 - 2016</td>
            <td>Communication Design at RMIT</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
)

export default InfoPage
