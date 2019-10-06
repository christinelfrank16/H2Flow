# Team 12: H2Flow

#### A IoT solution to monitor water usage for 2019 PDX Hackathon, 06-Oct-2019

#### By **Christine Frank, Anjani Kodali, Catie Olson, Emily Chen, Geena Fong**

## Description

This is an IoT solution to help home or business owners monitor water usage. It enables the user to collect total water use time and the total elapsed time the water was actively used. The Feather Huzzah links to the switch which at this time replaces a sensor to detect water flow, it also connects to a PIR motion sensor to detect user interaction with the water. The Feather and Azure Sphere communicate over serial connection, providing a layer of security over the IoT device.

All data are sent to the IoT Hub and displayed as intuitive graphs over time. This helps the user identify trends and receive feedback on improved water use.

## Setup/Installation Requirements
### Required Software
* Windows 10 OS (or VM box with Win 10)
* Arduino IDE
* Visual Studios 2017

### Required Hardware
* AdaFruit Feather Huzzah Microcontroller
* Microsoft Azure Sphere Development Kit
* PIR motion sensor
* Switch sensor
* Breadboard
* Male-Male Wire Connectors
* USB Connector Cable

### Code Upload
* Clone this repository to your desktop

* Open Arduino IDE and the ../Feather/motion_time_water.ino file
* Connect the AdaFruit Feather to the computer via USB Cable
* Click Upload in Arduino - the IDE terminal will indicate when upload is complete

* Open Visual Studios 2017 and the ... file
* Connect the Azure Sphere to the computer via USB Cable
* Click Upload in VS2017

## Hardware Setup

|Sensor|Breadboard|AdaFruit Feather|Azure Sphere|
|:----------|-----------|------------|------------|
|PIR motion sensor : data output pin|| IO pin 12 |-|
|PIR motion sensor : ground | ground |||
|PIR motion sensor : power|power|||
|Switch : top pin | ground |||
|Switch : middle pin || IO pin 13| |
|||IO pin 3 (RX) | IO TX pin|
|||IO pin 1 (TX) | IO RX pin|
||ground|ground pin||
||power|VBUS pin ||

## Future Extensions

* Replace button switch with water flow sensor
* Add LED indicator for current-time water use feedback to user

## Support and contact details

Find a bug?! Add an issue to the GitHub Repo.
Repo: https://github.com/christinelfrank16/H2Flow


## Technologies Used

* Javascript
* Arduino
* C

### License

*This application is licensed under the MIT license*

Copyright (c) 2019 **Christine Frank, Anjani Kodali, Catie Olson, Emily Chen, Geena Fong**
