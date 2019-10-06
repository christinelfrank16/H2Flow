 
int ledPin = 0;                // choose the pin for the LED
int inputPin =12;               // choose the input pin (for PIR sensor)
int pirState = 0;             // we start, assuming no motion detected
int lastPirState = LOW;                    // variable to store previous pir status
int button = 13;              // button to represent water flow
int buttonVal = LOW;          // assume water is off

int waterStartTime;               // start time for water
int waterElapsedTime;              // elapsed time for water use
int waterFractional;              // store water fractional time

int timing;                       // condition for blinking - timer is timing
long interval = 100;                // blink interval - change to suit
long previousMillis = 0;            // variable to store last time LED was updated
long startTime ;                    // start time for stop watch
long elapsedTime ;                  // elapsed time for stop watch
int fractional;                     // variable used to store fractional part of time
long sumElapsedTime;                // variable to hold sum of all elapsed time motion detected
int sumFractional;
 
void setup() {
  pinMode(ledPin, OUTPUT);      // declare LED as output
  pinMode(inputPin, INPUT);     // declare sensor as input
  pinMode(button, INPUT_PULLUP); // set internal pull up resistor
 
  Serial.begin(9600);
}
 
void loop(){
  if(digitalRead(button) == HIGH) { // water running
    if(buttonVal == LOW) {  // water was previously off
      
      Serial.println("START");

      waterStartTime = millis();  // mark start water time
      buttonVal = HIGH;
      lastPirState = LOW;   // assume no motion at start of water
      timing = false;       // reset timing checker
      sumElapsedTime = 0;   // reset total motion time
    }

    pirState = digitalRead(inputPin);  // read input value
    if (pirState == HIGH && lastPirState == LOW && timing == false) {            // check if motion detected & timer not running
      digitalWrite(ledPin, HIGH);  // turn LED ON
      startTime = millis();
      timing = true;
      lastPirState = pirState;
      Serial.println("Motion detected!");
      // We only want to print on the output change, not state
    } else if (pirState == LOW && lastPirState == HIGH && timing == true){ // motion stopped while timer running
    
      elapsedTime = millis() - startTime;
      timing = false;
      sumElapsedTime += elapsedTime;
    
      digitalWrite(ledPin, LOW); // turn LED OFF
      // we have just turned off
      Serial.println("Motion ended!");
      // We only want to print on the output change, not state
      lastPirState = LOW;
     
    } else {
      lastPirState = pirState;
    }
    
  } else {                         // no water running

    if(buttonVal == HIGH) {       // water previously was running
      buttonVal = LOW;
      waterElapsedTime = millis() - waterStartTime;

      if(timing == true) {
        elapsedTime = millis() - startTime;
        timing = false;
        sumElapsedTime += elapsedTime;
      }

      Serial.println( (float)(waterElapsedTime / 60000.0));         // divide by 1000 to convert to minutes - then cast to an int to print

       Serial.println( (float)(sumElapsedTime / 60000.0));         // divide by 1000 to convert to minutes - then cast to an int to print


       Serial.println("END");
      
    }
  }

}
