# Skilaverkefni_4

#### http://gengi.is clone app

##### Functions
* Gets current currency information from http://apis.is/currency/arion
* MVO - Model-View-Octopus Implementation
* Angular Framework Routing usage (Just testing it, no other usage from Angular)
* Offline function (Already finished just have to add it)

##### Currently Working On
* Calculator (Page is ready)

##### Functions i might add in the future
* calculator for customs and VAT (VSK)


### 1. Hvað er MVC?
MVC er forritunar mynstur sem byggist á því að skrifa meira skipulagðan kóða. MVC er samansett af þremur hlutum, Model-View-Controller.
Controllerinn talar við Modelið, Modelið talar við Controllerinn, Controllerinn talar svo við Viewið og Viewið talar svo til baka við Controllerinn

* Modelið hefur að geyma gögn appsins. Modelið lætur hlustanda(observers) vita þegar staða þeirra breytist
* Views mynda yfirleitt notendaviðmótið og notast oft við t.d. templates, þó þurfa þess ekki. Views hlusta á Models en hafa aldrei beint samband við þau.
* Controllers taka á móti Input gögnum og aðgerðir frá notenda, Controllers uppfærir einnig Models

### 2. Hvað þarf að huga að varðandi MVC í vefþróun?
Forðast að gera spaghetti kóða

### 3. Hverjir eru kostir þess að nota MV* í framenda (SPA og client-side MVC), Hvað gefur það okkur?
Helstu kostir MV* í framenda er að hver partur af MV* spilar sitt eigið hlutverk í virkni forrits.

### 4. Hvað er Databinding?
Databinding er aðferð til sem bindur gögn frá gagnaveitandanum og neytandanum saman og samstillir þau.
