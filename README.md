# Late_Tables

## Overview 
A project modelling a last minute restaurant reservation mobile app as our final project for our CodeClan bootcamp course. 
The project idea came from conversations with Edinburgh hospitality staff and news articles highlighting the prevailance of 
last minute cancellations in a post COVID world and the destructive effect they have on local businesses. The project was completed 
over a 10 day sprint by a team of 4.

## Aims

- Consolidate our knowledge from the 16 week bootcamp course
- Push ourselves to learn a new technology as we had not covered any mobile development
- Gain further experience working in a development team 

## Tech Stack

#### Frontend 
- Javascript using React Native 
- Expo 

#### Backend 
- Java using Spring 
- H2 

## Brief

#### Summary
Create an availability application which allows users to be notified when a preferred restaurant has availability. 
User preferences should be tracked and the application should understand their location when recommending options.

#### MVP
1. Allows a user to give a preference of restaurants by cuisine.
2. Allows a user to redirect to the restaurant website to see menu.
3. Geographically track and alert a user should a table become available or you be nearby, allow push location to inform of availability.

## Installation
- clone the repo (the backend is hosted at *http://backend-latetables.herokuapp.com* so the folder CaptoneBackEnd isn't required to run the app)
- `npm i` inside the Late_Tables directory
- `npm start` this will load an expo page in your browser

#### To run on computer 
- Run preferred simulator <sup>[1](#footnote1)</sup> using the buttons on the left hand side of the expo browser page

![the location of the simulator buttons on the expo browser page](SimulatorButtonsImage.jpg)

#### To run on mobile
- Download Expo Go from the relevant app store for your device
- Scan the QR code <sup>[2](#footnote2)</sup> on the Expo browser page on your computer and follow the instructions 


<a name="footnote1">1</a>: Xcode will be required to run an IoS simulator and Android Studio will be required for an Android Simulator.\
<a name="footnote2">2</a>: Scan the QR code either using your preferred scanner or depending on your device the *Scan QR Code* option in the Expo Go Client.

## Demo Video 

Below is a demo video we recorded for our presentation showing some of the features of the app

![Demo video of Late Tables](LateTablesDemoVideo.jpg)


