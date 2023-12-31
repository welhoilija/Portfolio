import React from 'react'
import MyCard from './card'

export default function ProjectsPage() {
  return (
    <div className="grid justify-center items-center h-fit overflow-hidden">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-6 pt-10">
          Check out projects I've worked on!
        </h1>
      </div>
      <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 auto-rows-max">
        <div className="mb-4">
          <MyCard
            className="dark-mode"
            text="Crypto portfolio with django + celery backend and JS/Bootstrap front."
            title="Crypto Portfolio Web-App"
            image="/static/images/crp.png"
            link="https://github.com/welhoilija/CryptoPortfolio-Django"
          />
        </div>
        <div className="mb-4">
          <MyCard
            className="dark-mode"
            text="A classic TODO-app with infinite descendant-tasks created with Vue/TS. State stored in browser and deployed using Github Actions"
            title="TaskTracker"
            image="/static/images/typescript.png"
            link="https://github.com/welhoilija/CryptoPortfolio-Django"
          />
        </div>

        <div className="mb-4">
          <MyCard
            className="dark-mode"
            text="My favourite linux drop down terminal for GNOME written in Python!"
            title="Guake"
            image="/static/images/guake.png"
            link="https://github.com/Guake/guake"
          />
        </div>

        <div className="mb-4">
          <MyCard
            text="React/FastApi app for making reservations and sharing with friends. Deployed to GCP using terraform and Github Actions."
            title="Dinner Planner App (2023)"
            image="/static/images/dinnerbooking.png"
            link="https://github.com/welhoilija/"
          />
        </div>

        <div className="mb-4">
          <MyCard
            text="Bouldering organic growth project done with couple of friends. Pulls a decent amount of organic traffic every month"
            title="Boulderinfo (2020)"
            image="/static/images/boulderinfo.png"
            link="https://boulderinfo.fi"
          />
        </div>

        <div className="mb-4">
          <MyCard
            text="1-day hackathon project done with my friend Steellow!"
            title="Yet Another Drinking Game (2022)"
            image="/static/images/flutter.png"
            link="https://github.com/welhoilija/yadg"
          />
        </div>
      </div>
      <div className="text-center py-6">
        <h2 className="text-xl mb-3">
          <a
            href="https://github.com/welhoilija"
            className="text-blue-300 hover:text-blue-400"
          >
            Check more at my Github
          </a>
        </h2>
        <p>I also have several private projects.</p>
      </div>
    </div>
  )
}
