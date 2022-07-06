import React from 'react';
import Container from '../../../common/Container/Container';
import styles from './AboutForm.module.scss';

const AboutForm = () => {
  return ( 
    <div className={styles.root}>
      <Container>
        <div className={styles.about}>
          <h2 className={styles.sectionTitle}>What can I say about me?</h2>
        </div>
        <div className={styles.aboutSkills}>
          <article className={styles.aboutLeft}>
            <div className={styles.aboutImage}>
              <img alt="mariana" src="images/about/about.png"/>
            </div>
            <div className={styles.aboutDescription}>
              <h1 className={styles.aboutTitle}>My History</h1>
              <p>Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna. Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus accumsan mi mollis massa luctus tincidunt. Proin ullamcorper est in enim porta, nec aliquam metus hendrerit.Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna. Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis.
Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus accumsan mi mollis massa luctus tincidunt. Proin ullamcorper est in enim porta, nec aliquam metus hendrerit. Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna. Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis.</p>

            </div>
          </article>
          <article className={styles.aboutRight}>
            <div className={styles.aboutImage}>
              <img alt="mariana" src="images/about/mariana.png"/>
            </div>
            <div className={styles.aboutDescription}>
              <h1 className={styles.aboutTitle}>Style of my work</h1>
              <p>Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna. Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus accumsan mi mollis massa luctus tincidunt. Proin ullamcorper est in enim porta, nec aliquam metus hendrerit.Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna. Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus accumsan mi mollis massa luctus tincidunt. Proin ullamcorper est in enim porta, nec aliquam metus hendrerit. Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna. Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus accumsan mi mollis massa luctus tincidunt. Proin ullamcorper est in enim porta, nec aliquam metus hendrerit</p>
            </div>
          </article>
          <article className={styles.aboutLeft}>
            <div className={styles.aboutImage}>
              <img alt="mariana" src="images/about/mmm.png"/>
            </div>
            <div className={styles.aboutDescription}>
              <h1 className={styles.aboutTitle}>How I learn</h1>
              <p>Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna. Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus accumsan mi mollis massa luctus tincidunt. Proin ullamcorper est in enim porta, nec aliquam metus hendrerit.Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna. Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus accumsan mi mollis massa luctus tincidunt. Proin ullamcorper est in enim porta, nec aliquam metus hendrerit. Etiam sollicitudin, nisl ut vehicula ornare, sem magna imperdiet elit, id finibus magna ligula at odio. Morbi est elit, maximus sit amet justo in, luctus facilisis urna. Nullam ut bibendum risus, at tristique erat. Mauris vestibulum condimentum sagittis. Pellentesque habitant.</p>
            </div>
          </article>
        </div>
      </Container> 
    </div>
  );
};




export default AboutForm;