import React, { Fragment } from 'react'
import Button from '../../components/button'

import styles from './info.module.scss'

const InfoPage = () => (
    <section className={styles.container}>
      <div className={styles.infoContainer}>

      <div className={styles.socialLinks}>
                        <p>Digital Designer</p>
                        <Fragment>
                            <div className={styles.socialPadding}>
                                <Button link='https://www.instagram.com/nveronicatran' target='_blank' rel='noopener'>Instagram</Button>
                            </div>
                            <div className={styles.socialPadding}>
                                <Button link='https://www.linkedin.com/in/veronica-tran' target='_blank' rel='noopener'>LinkedIn</Button>
                            </div>
                            <div className={styles.socialPadding}>
                                <Button link='https://dribbble.com/veronicatran' target='_blank' rel='noopener'>Dribbble</Button>
                            </div>
                        </Fragment>
                    </div>
        <p>I craft compelling design solutions, rooted in conceptual ideas combined with distilled aesthetics. I work across digital, publications, exhibitions, identities, typefaces and more.</p>
        <p>I'm interested in the intersections of art, design, media, popular culture and technology.</p>
      </div>

      <table className={styles.table}>
        <tbody>
          <tr>
            <td>
              2018 -
                    </td>
            <td>Masters of Design for Emergent Futures @ IAAC</td>
          </tr>
          <tr>
            <td>
              2016 -
                    </td>
            <td>Freelance</td>
          </tr>
          <tr className={styles.strikethrough}>
            <td>
              2017 - 2018
          </td>
            <td>Digital Designer @ Liquid</td>
          </tr>
          <tr className={styles.strikethrough}>
            <td>
              2015 - 2017
          </td>
            <td>Intern @ Hello Monday, I/D Lab, Wildhen Design</td>
          </tr>

          <tr className={styles.strikethrough}>
            <td>
              2015 - 2016
          </td>
            <td>Interaction Design at DMJX</td>
          </tr>

          <tr className={styles.strikethrough}>
            <td>
              2014 - 2016
          </td>
            <td>Communication Design at RMIT</td>
          </tr>
        </tbody>
      </table>
    </section>
)

export default InfoPage
