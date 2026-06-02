import{_ as s,o as a,c as p,a1 as l}from"./chunks/framework.BX4nIuL2.js";const o=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"courses/fab-course/doc/5arduino/arduinocase.md","filePath":"courses/fab-course/doc/5arduino/arduinocase.md"}'),e={name:"courses/fab-course/doc/5arduino/arduinocase.md"};function i(c,n,r,t,_,R){return a(),p("div",null,[...n[0]||(n[0]=[l(`<h2 id="running-dinosaur" tabindex="-1">Running Dinosaur <a class="header-anchor" href="#running-dinosaur" aria-label="Permalink to &quot;Running Dinosaur&quot;">​</a></h2><h3 id="_1-material" tabindex="-1">1. Material <a class="header-anchor" href="#_1-material" aria-label="Permalink to &quot;1. Material&quot;">​</a></h3><ul><li>LCD1602液晶显示器</li><li>超声波传感器</li><li>舵机SG90</li><li>​LED <img src="https://gitlab.com/picbed/bed/uploads/019373f076c0a2ec6406b1398632bce5/arduinomaterail.png" alt=""></li></ul><h3 id="_2-流程图" tabindex="-1">2.流程图 <a class="header-anchor" href="#_2-流程图" aria-label="Permalink to &quot;2.流程图&quot;">​</a></h3><p><img src="https://gitlab.com/picbed/bed/uploads/e9c27b853a531f2193cc3f4f6f38d450/dinosaur02.png" alt=""></p><h3 id="_3-实验接线" tabindex="-1">3.实验接线 <a class="header-anchor" href="#_3-实验接线" aria-label="Permalink to &quot;3.实验接线&quot;">​</a></h3><p><img src="https://gitlab.com/picbed/bed/uploads/d60ad811681af500988d6e71814e46fd/dinosaur01.png" alt=""></p><h3 id="_4-coding" tabindex="-1">4. Coding <a class="header-anchor" href="#_4-coding" aria-label="Permalink to &quot;4. Coding&quot;">​</a></h3><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#include &lt;LiquidCrystal.h&gt;</span></span>
<span class="line"><span>#include &lt;Servo.h&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define PIN_SERVO A3</span><span>  //舵机引脚</span></span>
<span class="line"><span>Servo myservo;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define rLedPin A2</span><span>  //三色灯引脚</span></span>
<span class="line"><span>#define gLedPin A0 </span></span>
<span class="line"><span>#define yLedPin A1 </span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define PIN_TRIG 8</span><span>  //超声波传感器引脚</span></span>
<span class="line"><span>#define PIN_ECHO 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define PIN_AUTOPLAY 1</span></span>
<span class="line"><span>#define PIN_READWRITE 10</span></span>
<span class="line"><span>#define PIN_CONTRAST 12</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define SPRITE_RUN1 1</span></span>
<span class="line"><span>#define SPRITE_RUN2 2</span></span>
<span class="line"><span>#define SPRITE_JUMP 3</span></span>
<span class="line"><span>#define SPRITE_JUMP_UPPER &#39;.&#39;</span><span>         // Use the &#39;.&#39; character for the head</span></span>
<span class="line"><span>#define SPRITE_JUMP_LOWER 4</span></span>
<span class="line"><span>#define SPRITE_TERRAIN_EMPTY &#39; &#39;</span><span>      // User the &#39; &#39; character</span></span>
<span class="line"><span>#define SPRITE_TERRAIN_SOLID 5</span></span>
<span class="line"><span>#define SPRITE_TERRAIN_SOLID_RIGHT 6</span></span>
<span class="line"><span>#define SPRITE_TERRAIN_SOLID_LEFT 7</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define HERO_HORIZONTAL_POSITION 1</span><span>    // Horizontal position of hero on screen</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define TERRAIN_WIDTH 16</span></span>
<span class="line"><span>#define TERRAIN_EMPTY 0</span></span>
<span class="line"><span>#define TERRAIN_LOWER_BLOCK 1</span></span>
<span class="line"><span>#define TERRAIN_UPPER_BLOCK 2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define HERO_POSITION_OFF 0</span><span>          // Hero is invisible</span></span>
<span class="line"><span>#define HERO_POSITION_RUN_LOWER_1 1</span><span>  // Hero is running on lower row (pose 1)</span></span>
<span class="line"><span>#define HERO_POSITION_RUN_LOWER_2 2</span><span>  //                              (pose 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define HERO_POSITION_JUMP_1 3</span><span>       // Starting a jump</span></span>
<span class="line"><span>#define HERO_POSITION_JUMP_2 4</span><span>       // Half-way up</span></span>
<span class="line"><span>#define HERO_POSITION_JUMP_3 5</span><span>       // Jump is on upper row</span></span>
<span class="line"><span>#define HERO_POSITION_JUMP_4 6</span><span>       // Jump is on upper row</span></span>
<span class="line"><span>#define HERO_POSITION_JUMP_5 7</span><span>       // Jump is on upper row</span></span>
<span class="line"><span>#define HERO_POSITION_JUMP_6 8</span><span>       // Jump is on upper row</span></span>
<span class="line"><span>#define HERO_POSITION_JUMP_7 9</span><span>       // Half-way down</span></span>
<span class="line"><span>#define HERO_POSITION_JUMP_8 10</span><span>      // About to land</span></span>
<span class="line"><span></span></span>
<span class="line"><span>#define HERO_POSITION_RUN_UPPER_1 11</span><span> // Hero is running on upper row (pose 1)</span></span>
<span class="line"><span>#define HERO_POSITION_RUN_UPPER_2 12</span><span> //                              (pose 2)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>float S;</span></span>
<span class="line"><span>float temp;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>LiquidCrystal lcd(11, 9, 6, 5, 4, 3);  //LCD引脚</span></span>
<span class="line"><span>static char terrainUpper[TERRAIN_WIDTH + 1];</span></span>
<span class="line"><span>static char terrainLower[TERRAIN_WIDTH + 1];</span></span>
<span class="line"><span>static bool buttonPushed = false;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>//小恐龙图标</span></span>
<span class="line"><span>void initializeGraphics(){</span></span>
<span class="line"><span>  static byte graphics[] = {</span></span>
<span class="line"><span>    // Run position 1</span></span>
<span class="line"><span>    B00010,</span></span>
<span class="line"><span>    B00111,</span></span>
<span class="line"><span>    B00111,</span></span>
<span class="line"><span>    B10110,</span></span>
<span class="line"><span>    B11111,</span></span>
<span class="line"><span>    B11110,</span></span>
<span class="line"><span>    B01111,</span></span>
<span class="line"><span>    B01000,</span></span>
<span class="line"><span>    // Run position 2</span></span>
<span class="line"><span>    B00010,</span></span>
<span class="line"><span>    B00111,</span></span>
<span class="line"><span>    B00111,</span></span>
<span class="line"><span>    B10110,</span></span>
<span class="line"><span>    B11111,</span></span>
<span class="line"><span>    B11110,</span></span>
<span class="line"><span>    B11110,</span></span>
<span class="line"><span>    B00010,</span></span>
<span class="line"><span>    // Jump</span></span>
<span class="line"><span>    B00010,</span></span>
<span class="line"><span>    B00111,</span></span>
<span class="line"><span>    B10110,</span></span>
<span class="line"><span>    B11111,</span></span>
<span class="line"><span>    B01110,</span></span>
<span class="line"><span>    B10001,</span></span>
<span class="line"><span>    B00000,</span></span>
<span class="line"><span>    B00000,</span></span>
<span class="line"><span>    // Jump lower</span></span>
<span class="line"><span>    B00010,</span></span>
<span class="line"><span>    B10111,</span></span>
<span class="line"><span>    B11110,</span></span>
<span class="line"><span>    B01111,</span></span>
<span class="line"><span>    B10000,</span></span>
<span class="line"><span>    B00000,</span></span>
<span class="line"><span>    B00000,</span></span>
<span class="line"><span>    B00000,</span></span>
<span class="line"><span>    // Ground</span></span>
<span class="line"><span>    B11111,</span></span>
<span class="line"><span>    B11111,</span></span>
<span class="line"><span>    B11111,</span></span>
<span class="line"><span>    B11111,</span></span>
<span class="line"><span>    B11111,</span></span>
<span class="line"><span>    B11111,</span></span>
<span class="line"><span>    B11111,</span></span>
<span class="line"><span>    B11111,</span></span>
<span class="line"><span>    // Ground right</span></span>
<span class="line"><span>    B00011,</span></span>
<span class="line"><span>    B00011,</span></span>
<span class="line"><span>    B00011,</span></span>
<span class="line"><span>    B00011,</span></span>
<span class="line"><span>    B00011,</span></span>
<span class="line"><span>    B00011,</span></span>
<span class="line"><span>    B00011,</span></span>
<span class="line"><span>    B00011,</span></span>
<span class="line"><span>    // Ground left</span></span>
<span class="line"><span>    B11000,</span></span>
<span class="line"><span>    B11000,</span></span>
<span class="line"><span>    B11000,</span></span>
<span class="line"><span>    B11000,</span></span>
<span class="line"><span>    B11000,</span></span>
<span class="line"><span>    B11000,</span></span>
<span class="line"><span>    B11000,</span></span>
<span class="line"><span>    B11000,</span></span>
<span class="line"><span>  };</span></span>
<span class="line"><span>  int i;</span></span>
<span class="line"><span>  // Skip using character 0, this allows lcd.print() to be used to</span></span>
<span class="line"><span>  // quickly draw multiple characters</span></span>
<span class="line"><span>  for (i = 0; i &lt; 7; ++i) {</span></span>
<span class="line"><span>      lcd.createChar(i + 1, &amp;graphics[i * 8]);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  for (i = 0; i &lt; TERRAIN_WIDTH; ++i) {</span></span>
<span class="line"><span>    terrainUpper[i] = SPRITE_TERRAIN_EMPTY;</span></span>
<span class="line"><span>    terrainLower[i] = SPRITE_TERRAIN_EMPTY;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Slide the terrain to the left in half-character increments</span></span>
<span class="line"><span>void advanceTerrain(char* terrain, byte newTerrain){</span></span>
<span class="line"><span>  for (int i = 0; i &lt; TERRAIN_WIDTH; ++i) {</span></span>
<span class="line"><span>    char current = terrain[i];</span></span>
<span class="line"><span>    char next = (i == TERRAIN_WIDTH-1) ? newTerrain : terrain[i+1];</span></span>
<span class="line"><span>    switch (current){</span></span>
<span class="line"><span>      case SPRITE_TERRAIN_EMPTY:</span></span>
<span class="line"><span>        terrain[i] = (next == SPRITE_TERRAIN_SOLID) ? SPRITE_TERRAIN_SOLID_RIGHT : SPRITE_TERRAIN_EMPTY;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case SPRITE_TERRAIN_SOLID:</span></span>
<span class="line"><span>        terrain[i] = (next == SPRITE_TERRAIN_EMPTY) ? SPRITE_TERRAIN_SOLID_LEFT : SPRITE_TERRAIN_SOLID;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case SPRITE_TERRAIN_SOLID_RIGHT:</span></span>
<span class="line"><span>        terrain[i] = SPRITE_TERRAIN_SOLID;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>      case SPRITE_TERRAIN_SOLID_LEFT:</span></span>
<span class="line"><span>        terrain[i] = SPRITE_TERRAIN_EMPTY;</span></span>
<span class="line"><span>        break;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>bool drawHero(byte position, char* terrainUpper, char* terrainLower, unsigned int score) {</span></span>
<span class="line"><span>  bool collide = false;</span></span>
<span class="line"><span>  char upperSave = terrainUpper[HERO_HORIZONTAL_POSITION];</span></span>
<span class="line"><span>  char lowerSave = terrainLower[HERO_HORIZONTAL_POSITION];</span></span>
<span class="line"><span>  byte upper, lower;</span></span>
<span class="line"><span>  switch (position) {</span></span>
<span class="line"><span>    case HERO_POSITION_OFF:</span></span>
<span class="line"><span>      upper = lower = SPRITE_TERRAIN_EMPTY;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case HERO_POSITION_RUN_LOWER_1:</span></span>
<span class="line"><span>      upper = SPRITE_TERRAIN_EMPTY;</span></span>
<span class="line"><span>      lower = SPRITE_RUN1;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case HERO_POSITION_RUN_LOWER_2:</span></span>
<span class="line"><span>      upper = SPRITE_TERRAIN_EMPTY;</span></span>
<span class="line"><span>      lower = SPRITE_RUN2;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case HERO_POSITION_JUMP_1:</span></span>
<span class="line"><span>    case HERO_POSITION_JUMP_8:</span></span>
<span class="line"><span>      upper = SPRITE_TERRAIN_EMPTY;</span></span>
<span class="line"><span>      lower = SPRITE_JUMP;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case HERO_POSITION_JUMP_2:</span></span>
<span class="line"><span>    case HERO_POSITION_JUMP_7:</span></span>
<span class="line"><span>      upper = SPRITE_JUMP_UPPER;</span></span>
<span class="line"><span>      lower = SPRITE_JUMP_LOWER;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case HERO_POSITION_JUMP_3:</span></span>
<span class="line"><span>    case HERO_POSITION_JUMP_4:</span></span>
<span class="line"><span>    case HERO_POSITION_JUMP_5:</span></span>
<span class="line"><span>    case HERO_POSITION_JUMP_6:</span></span>
<span class="line"><span>      upper = SPRITE_JUMP;</span></span>
<span class="line"><span>      lower = SPRITE_TERRAIN_EMPTY;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case HERO_POSITION_RUN_UPPER_1:</span></span>
<span class="line"><span>      upper = SPRITE_RUN1;</span></span>
<span class="line"><span>      lower = SPRITE_TERRAIN_EMPTY;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>    case HERO_POSITION_RUN_UPPER_2:</span></span>
<span class="line"><span>      upper = SPRITE_RUN2;</span></span>
<span class="line"><span>      lower = SPRITE_TERRAIN_EMPTY;</span></span>
<span class="line"><span>      break;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (upper != &#39; &#39;) {</span></span>
<span class="line"><span>    terrainUpper[HERO_HORIZONTAL_POSITION] = upper;</span></span>
<span class="line"><span>    collide = (upperSave == SPRITE_TERRAIN_EMPTY) ? false : true;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (lower != &#39; &#39;) {</span></span>
<span class="line"><span>    terrainLower[HERO_HORIZONTAL_POSITION] = lower;</span></span>
<span class="line"><span>    collide |= (lowerSave == SPRITE_TERRAIN_EMPTY) ? false : true;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  byte digits = (score &gt; 9999) ? 5 : (score &gt; 999) ? 4 : (score &gt; 99) ? 3 : (score &gt; 9) ? 2 : 1;</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // Draw the scene</span></span>
<span class="line"><span>  terrainUpper[TERRAIN_WIDTH] = &#39;\\0&#39;;</span></span>
<span class="line"><span>  terrainLower[TERRAIN_WIDTH] = &#39;\\0&#39;;</span></span>
<span class="line"><span>  char temp = terrainUpper[16-digits];</span></span>
<span class="line"><span>  terrainUpper[16-digits] = &#39;\\0&#39;;</span></span>
<span class="line"><span>  lcd.setCursor(0,0);</span></span>
<span class="line"><span>  lcd.print(terrainUpper);</span></span>
<span class="line"><span>  terrainUpper[16-digits] = temp;  </span></span>
<span class="line"><span>  lcd.setCursor(0,1);</span></span>
<span class="line"><span>  lcd.print(terrainLower);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  lcd.setCursor(16 - digits,0);</span></span>
<span class="line"><span>  lcd.print(score);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  terrainUpper[HERO_HORIZONTAL_POSITION] = upperSave;</span></span>
<span class="line"><span>  terrainLower[HERO_HORIZONTAL_POSITION] = lowerSave;</span></span>
<span class="line"><span>  return collide;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// Handle the button push as an interrupt</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>void setup(){</span></span>
<span class="line"><span>  myservo.attach(PIN_SERVO);</span></span>
<span class="line"><span>  pinMode(rLedPin, OUTPUT);</span></span>
<span class="line"><span>  pinMode(gLedPin, OUTPUT);</span></span>
<span class="line"><span>  pinMode(yLedPin, OUTPUT);</span></span>
<span class="line"><span>  pinMode(PIN_TRIG, OUTPUT);  </span></span>
<span class="line"><span>  pinMode(PIN_ECHO, INPUT);  </span></span>
<span class="line"><span>  Serial.begin(9600);</span></span>
<span class="line"><span>  pinMode(PIN_READWRITE, OUTPUT);</span></span>
<span class="line"><span>  digitalWrite(PIN_READWRITE, LOW);</span></span>
<span class="line"><span>  pinMode(PIN_CONTRAST, OUTPUT);</span></span>
<span class="line"><span>  digitalWrite(PIN_CONTRAST, LOW);</span></span>
<span class="line"><span>  pinMode(PIN_AUTOPLAY, OUTPUT);</span></span>
<span class="line"><span>  digitalWrite(PIN_AUTOPLAY, HIGH);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  initializeGraphics();</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  lcd.begin(16, 2);</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>void loop(){</span></span>
<span class="line"><span>  static byte heroPos = HERO_POSITION_RUN_LOWER_1;</span></span>
<span class="line"><span>  static byte newTerrainType = TERRAIN_EMPTY;</span></span>
<span class="line"><span>  static byte newTerrainDuration = 1;</span></span>
<span class="line"><span>  static int playing=1;//0：正在游戏，1：游戏未开始，2：赢，3：输</span></span>
<span class="line"><span>  static bool blink = false;</span></span>
<span class="line"><span>  static unsigned int distance = 0;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  //通过超声波模块测量距离，当距离小于10cm时判定为跳起</span></span>
<span class="line"><span>  digitalWrite(PIN_TRIG, LOW);</span></span>
<span class="line"><span>  delayMicroseconds(2);</span></span>
<span class="line"><span>  digitalWrite(PIN_TRIG, HIGH);</span></span>
<span class="line"><span>  delayMicroseconds(10);</span></span>
<span class="line"><span>  digitalWrite(PIN_TRIG, LOW);  </span></span>
<span class="line"><span>  temp = float(pulseIn(PIN_ECHO, HIGH));</span></span>
<span class="line"><span>  S = (temp * 17 )/1000;</span></span>
<span class="line"><span>  Serial.println(S);</span></span>
<span class="line"><span>  if (S&lt;10){</span></span>
<span class="line"><span>      buttonPushed = true;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else{</span></span>
<span class="line"><span>      buttonPushed = false;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //当分数高于20分时，获得胜利</span></span>
<span class="line"><span>    if((distance &gt;&gt; 3)&gt;=20){</span></span>
<span class="line"><span>      playing=2;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    //当分数高于15分时，接近胜利，亮起黄灯</span></span>
<span class="line"><span>  if((distance &gt;&gt; 3)&gt;=15){</span></span>
<span class="line"><span>      digitalWrite(yLedPin,HIGH);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    else{</span></span>
<span class="line"><span>      digitalWrite(yLedPin,LOW);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>  if (playing!=0) {</span></span>
<span class="line"><span>    drawHero((blink) ? HERO_POSITION_OFF : heroPos, terrainUpper, terrainLower, distance &gt;&gt; 3);</span></span>
<span class="line"><span>    if (blink) {</span></span>
<span class="line"><span>      lcd.setCursor(0,0);</span></span>
<span class="line"><span>      //当处于准备状态时，三色灯闪烁</span></span>
<span class="line"><span>      if (playing==1){</span></span>
<span class="line"><span>        lcd.print(&quot;Press Start&quot;);</span></span>
<span class="line"><span>        digitalWrite(rLedPin,HIGH);</span></span>
<span class="line"><span>        digitalWrite(gLedPin,HIGH);</span></span>
<span class="line"><span>        digitalWrite(yLedPin,HIGH);</span></span>
<span class="line"><span>        delay(200);</span></span>
<span class="line"><span>        digitalWrite(rLedPin,LOW);</span></span>
<span class="line"><span>        digitalWrite(gLedPin,LOW);</span></span>
<span class="line"><span>        digitalWrite(yLedPin,LOW);</span></span>
<span class="line"><span>        delay(200);</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      //当获得胜利时，LCD屏幕出现胜利提示</span></span>
<span class="line"><span>      //舵机举起红旗，三色灯轮流亮起</span></span>
<span class="line"><span>      //循环十次后，红旗落下，切换至准备状态</span></span>
<span class="line"><span>      else if(playing==2){</span></span>
<span class="line"><span>        lcd.print(&quot;You win!&quot;);</span></span>
<span class="line"><span>        myservo.write(90);</span></span>
<span class="line"><span>        for(int i=0;i&lt;10;i++){</span></span>
<span class="line"><span>          digitalWrite(rLedPin,HIGH);</span></span>
<span class="line"><span>          delay(200);</span></span>
<span class="line"><span>          digitalWrite(rLedPin,LOW);</span></span>
<span class="line"><span>          digitalWrite(gLedPin,HIGH);</span></span>
<span class="line"><span>          delay(200);</span></span>
<span class="line"><span>          digitalWrite(gLedPin,LOW);</span></span>
<span class="line"><span>          digitalWrite(yLedPin,HIGH);</span></span>
<span class="line"><span>          delay(200);</span></span>
<span class="line"><span>          digitalWrite(yLedPin,LOW);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        myservo.write(0);</span></span>
<span class="line"><span>        playing=1;</span></span>
<span class="line"><span>        distance=0;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>      //当游戏失败时，LCD屏幕出现失败提示</span></span>
<span class="line"><span>      //红灯闪烁</span></span>
<span class="line"><span>      //循环十次后，切换至准备状态</span></span>
<span class="line"><span>      else if(playing==3){</span></span>
<span class="line"><span>        lcd.print(&quot;You lose!&quot;);</span></span>
<span class="line"><span>        digitalWrite(gLedPin,LOW);</span></span>
<span class="line"><span>        for(int i=0;i&lt;10;i++){</span></span>
<span class="line"><span>          digitalWrite(rLedPin,HIGH);</span></span>
<span class="line"><span>          delay(200);</span></span>
<span class="line"><span>          digitalWrite(rLedPin,LOW);</span></span>
<span class="line"><span>          delay(200);</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>        playing=1;</span></span>
<span class="line"><span>        distance=0;</span></span>
<span class="line"><span>      }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    delay(250);</span></span>
<span class="line"><span>    blink = !blink;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    if (buttonPushed) {</span></span>
<span class="line"><span>      initializeGraphics();</span></span>
<span class="line"><span>      heroPos = HERO_POSITION_RUN_LOWER_1;</span></span>
<span class="line"><span>      playing = 0;</span></span>
<span class="line"><span>      digitalWrite(gLedPin,HIGH);</span></span>
<span class="line"><span>      buttonPushed = false;</span></span>
<span class="line"><span>      distance = 0;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  // Shift the terrain to the left</span></span>
<span class="line"><span>  advanceTerrain(terrainLower, newTerrainType == TERRAIN_LOWER_BLOCK ? SPRITE_TERRAIN_SOLID : SPRITE_TERRAIN_EMPTY);</span></span>
<span class="line"><span>  advanceTerrain(terrainUpper, newTerrainType == TERRAIN_UPPER_BLOCK ? SPRITE_TERRAIN_SOLID : SPRITE_TERRAIN_EMPTY);</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  // Make new terrain to enter on the right</span></span>
<span class="line"><span>  if (--newTerrainDuration == 0) {</span></span>
<span class="line"><span>    if (newTerrainType == TERRAIN_EMPTY) {</span></span>
<span class="line"><span>      newTerrainType = (random(3) == 0) ? TERRAIN_UPPER_BLOCK : TERRAIN_LOWER_BLOCK;</span></span>
<span class="line"><span>      newTerrainDuration = 2 + random(10);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      newTerrainType = TERRAIN_EMPTY;</span></span>
<span class="line"><span>      newTerrainDuration = 10 + random(10);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>  if (buttonPushed) {</span></span>
<span class="line"><span>    if (heroPos &lt;= HERO_POSITION_RUN_LOWER_2) heroPos = HERO_POSITION_JUMP_1;</span></span>
<span class="line"><span>    buttonPushed = false;</span></span>
<span class="line"><span>  }  </span></span>
<span class="line"><span></span></span>
<span class="line"><span>  if (drawHero(heroPos, terrainUpper, terrainLower, distance &gt;&gt; 3)) {</span></span>
<span class="line"><span>    playing = 3; // The hero collided with something. Too bad.</span></span>
<span class="line"><span>  } else {</span></span>
<span class="line"><span>    if (heroPos == HERO_POSITION_RUN_LOWER_2 || heroPos == HERO_POSITION_JUMP_8) {</span></span>
<span class="line"><span>      heroPos = HERO_POSITION_RUN_LOWER_1;</span></span>
<span class="line"><span>    } else if ((heroPos &gt;= HERO_POSITION_JUMP_3 &amp;&amp; heroPos &lt;= HERO_POSITION_JUMP_5) &amp;&amp; terrainLower[HERO_HORIZONTAL_POSITION] != SPRITE_TERRAIN_EMPTY) {</span></span>
<span class="line"><span>      heroPos = HERO_POSITION_RUN_UPPER_1;</span></span>
<span class="line"><span>    } else if (heroPos &gt;= HERO_POSITION_RUN_UPPER_1 &amp;&amp; terrainLower[HERO_HORIZONTAL_POSITION] == SPRITE_TERRAIN_EMPTY) {</span></span>
<span class="line"><span>      heroPos = HERO_POSITION_JUMP_5;</span></span>
<span class="line"><span>    } else if (heroPos == HERO_POSITION_RUN_UPPER_2) {</span></span>
<span class="line"><span>      heroPos = HERO_POSITION_RUN_UPPER_1;</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      ++heroPos;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    ++distance;</span></span>
<span class="line"><span>    </span></span>
<span class="line"><span>    digitalWrite(PIN_AUTOPLAY, terrainLower[HERO_HORIZONTAL_POSITION + 2] == SPRITE_TERRAIN_EMPTY ? HIGH : LOW);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  delay(100);</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,9)])])}const P=s(e,[["render",i]]);export{o as __pageData,P as default};
