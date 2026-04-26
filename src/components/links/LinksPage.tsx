'use client'
import React from 'react'
import { LocaleSwitcher } from '../atoms/localeSwitcher/LocaleSwitcher'
import { ThemeToggle } from '../atoms/themeToggle/ThemeToggle'
import styles from "./LinksPage.module.scss";
import classNames from 'classnames/bind';
import Image from 'next/image';
import { motion } from "motion/react";
import { SiGithub, SiReddit, SiX } from '@icons-pack/react-simple-icons';
import { Linkedin, Mail } from 'lucide-react';
import { useTranslations } from 'next-intl';


const cx = classNames.bind(styles);

const socialsData = [
    {
        logo: <SiGithub size={35} />,
        url: "https://github.com/tayyyyylor"
    },
    {
        logo: <SiX size={35} />,
        url: "https://x.com/_tayylor_g"
    },
    {
        logo: <Linkedin size={35} />,
        url: "https://www.linkedin.com/in/bryan-houblon-172121211/"
    },
    {
        logo: <Mail size={35} />,
        url: "mailto:bryan.houblon@icloud.com"
    },
    {
        logo: <SiReddit size={35} />,
        url: ""
    },
]




export default function Linkspage() {
    const t = useTranslations("Links");


    const cardsData = [
    {
        logo: "",
        title: t('portfolio'),
        url: "https://www.bryanhoublon.com"
    },
    {
        logo: "",
        title: t('myshelf'),
        url: "d"
    },
    {
        logo: "",
        title: t('collection'),
        url: "d"
    },
]

    return (
        <>
       <header className={cx("links__header")}>
        <LocaleSwitcher />
        <ThemeToggle />
       </header>
       <main>
        <article className={cx("links__meContainer")}>

         <motion.section
        className={cx("links__imgContainer")}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.05 }}
        >
        <Image
          className={cx("links__img")}
          src="/me.png"
          alt="Moi"
          width={200}
          height={200}
          />
      </motion.section>
      <h2>Bryan Houblon</h2>
      <p className={cx("links__description")}>{t('description')}</p>
          </article>
        <section className={cx("links__socials")}>
            {socialsData.map((social, index) => (
                <a key={index} href={social.url}>
                     {social.logo}
                </a>
            ))}
            </section>
        <section className={cx("links__cardsContainer")}>
            {cardsData.map((card, index) => (
                <a key={index} className={cx("links__card")} href={card.url}>
                    {card.logo &&  <Image  src="" alt='test'/>}
                    <p>{card.title}</p>
                </a>
            ))}
        </section>
       </main>
    </>
  )
}
