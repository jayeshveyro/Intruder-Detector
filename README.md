This is a Intruder Detector. It is a Arduino UNOd project which displays when an object or the "intruder" is detected through ultrasonic sensor and warns through the buzzer. In the remaining vacant time the OLED display shows a eye animation.
# Bill of Materials (BOM)
# Desk Display — Bill of Materials

| # | Component | SKU | Qty | Unit Price | Subtotal | Link |
|---|---|---:|---:|---:|---:|---|
| 1 | 5V Active Electromagnetic Buzzer — Pack of 5 | 616166 | 1 | ₹16.00 | ₹16.00 | [Robu](https://robu.in/product/5v-active-electromagnetic-buzzer-pack-of-5/) |
| 2 | GoldenMorning 0.96" I2C/IIC 4-Pin OLED Display — Blue | 617724 | 1 | ₹209.00 | ₹209.00 | [Robu](https://robu.in/product/0-96-inch-i2c-iic-oled-lcd-module-4pin-with-vcc-gnd-blue/) |
| 3 | Arduino Uno R3 | 44497 | 1 | ₹249.00 | ₹249.00 | [Robu](https://robu.in/product/arduino-uno-r3-ch340g-atmega328p-devlopment-board/) |
| 4 | TTP223 Touch Key Module — 2 pcs | 29793 | 1 pack | ₹13.00 | ₹13.00 | [Robu](https://robu.in/product/ttp223-touch-key-module-2pcs/) |
| 5 | 2.54mm 1×40 Pin Male Single Row Straight Short Header Strip — Pack of 3 | 1114172 | 2 | ₹9.00 | ₹18.00 | [Robu](https://robu.in/product/2-54mm-1x40-pin-male-single-row-straight-short-header-strip-pack-of-3/) |
| 6 | 10-Wire Male-to-Female Jumper Wires — 20cm | R160077 | 1 | ₹15.00 | ₹15.00 | [Robu](https://robu.in/product/10-wire-male-to-female-jumper-wires-20cm/) |
| 7 | Robu 3D Printing Services | 901845 | 1 | ₹190.00 | ₹190.00 | Robu |
| | **TOTAL** | | | | **₹1,200.00** | ||

<img width="1365" height="589" alt="image" src="https://github.com/user-attachments/assets/9b85e30f-0d64-46cc-ab3b-4da190ba8013" />

<img width="800" height="620" alt="image" src="https://github.com/user-attachments/assets/bcd393d3-b053-4b06-8b87-8ca67b2268ae" />



### Cost Breakdown

* **Electronics:** ₹1010
* **3D Printing:** ₹250
* **Total Project Cost:** **₹1260**
  
## Circuit Design
<img width="3000" height="3215" alt="circuit_image" src="https://github.com/user-attachments/assets/b6ef0181-9aef-4596-ab7b-a45f8e9836a6" />


## CAD file
![image.png](https://cdn.hackclub.com/01a0b575-e466-71fd-b33c-caa8d87b836c/image.png)![image.png](https://cdn.hackclub.com/01a0b576-38f7-7ddc-9f72-1940fdf7b5b6/image.png)![image.png](https://cdn.hackclub.com/01a0b576-9ef0-7e7c-8478-facdc043bc0a/image.png)

![image.png](https://cdn.hackclub.com/01a0e28f-813b-71dc-8440-3f14881c55f3/image.png)

![image.png](https://cdn.hackclub.com/01a0e290-03c6-7a08-95ff-4b1bf8ee9891/image.png)

![image.png](https://cdn.hackclub.com/01a0e292-4df5-7bd9-a2cd-2148ad18824a/image.png)



## Workflow
                    POWER ON
                       |
                       v
             +-------------------+
             |   ROBO EYES MODE  |
             |                   |
             |  Animation 1      |
             |       ↕            |
             |  Animation 2      |
             +---------+---------+
                       |
                  SHORT PRESS
                       |
                       v
             +-------------------+
             |    TIME SCREEN    |
             +---------+---------+
                       |
                  SHORT PRESS
                       |
                       v
             +-------------------+
             |  CALENDAR SCREEN  |
             +---------+---------+
                       |
                  SHORT PRESS
                       |
                       v
             +-------------------+
             |  WEATHER SCREEN   |
             |    Faridabad      |
             +---------+---------+
                       |
                  SHORT PRESS
                       |
                       v
             +-------------------+
             |   ROBO EYES MODE  |
             +-------------------+

                  LONG PRESS
                      |
                      v
              +----------------+
              |  PETTING EYES  |
              |    ^  ^        |
              |   (  )         |
              +-------+--------+
                      |
                   RELEASE
                      |
                      v
                 Previous mode

