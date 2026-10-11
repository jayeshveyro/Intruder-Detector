#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <FluxGarage_RoboEyes.h>

#define SCREEN_WIDTH 128
#define SCREEN_HEIGHT 64
#define OLED_ADDR 0x3C

#define TRIG_PIN 7
#define ECHO_PIN 
#define BUZZER_PIN 9

Adafruit_SSD1306 display(
  SCREEN_WIDTH,
  SCREEN_HEIGHT,
  &Wire,
  -1
);

RoboEyes<Adafruit_SSD1306> roboEyes(display);

long getDistance() {
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);

  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  long duration = pulseIn(ECHO_PIN, HIGH, 30000);

  if (duration == 0) {
    return 999;
  }

  return duration * 0.0343 / 2;
}

void setup() {
  Serial.begin(9600);

  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  pinMode(BUZZER_PIN, OUTPUT);

  digitalWrite(BUZZER_PIN, LOW);

  Wire.begin();

  if (!display.begin(SSD1306_SWITCHCAPVCC, OLED_ADDR)) {
    Serial.println("OLED NOT FOUND!");
    while (true);
  }


  display.clearDisplay();
  display.display();

  roboEyes.begin(SCREEN_WIDTH, SCREEN_HEIGHT, 100);

  roboEyes.setAutoblinker(ON, 3, 2);
  roboEyes.setIdleMode(ON, 2, 2);
  roboEyes.setMood(DEFAULT);
}

void loop() {

  long distance = getDistance();

  Serial.print("Distance: ");
  Serial.print(distance);
  Serial.println(" cm");

  // INTRUDER
  if (distance <= 5) {

    
    digitalWrite(BUZZER_PIN, HIGH);

    display.clearDisplay();

    display.setTextColor(SSD1306_WHITE);

    display.setTextSize(2);
    display.setCursor(5, 8);
    display.println("INTRUDER");

    display.setTextSize(1);
    display.setCursor(35, 35);
    display.println("DETECTED!");

    display.setCursor(35, 50);
    display.print(distance);
    display.println(" cm");

    display.display();

  } else {

    
    digitalWrite(BUZZER_PIN, LOW);


    roboEyes.update();
  }

  delay(30);
}