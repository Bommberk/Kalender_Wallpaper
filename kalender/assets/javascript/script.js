// Variablen bestimmen
var verse = document.getElementById("verse");
var headline_texte = document.getElementById("headline_texte");
var texte = document.getElementById("texte");


// Datum von Heute
var d = new Date();

let day = d.getDate()+0;
let month = d.getMonth()+1;
let year = d.getFullYear()+0;

document.getElementById("day").innerHTML = day;
document.getElementById("year").innerHTML = year;
let imageMonthName;


// Monate und das Passende Bild dazu
if(month === 1){
    document.getElementById("month").innerHTML = "Januar";
    imageMonthName = "january";
}
if(month === 2){
    document.getElementById("month").innerHTML = "Februar";
    imageMonthName = "february";
}
if(month === 3){
    document.getElementById("month").innerHTML = "März";
    imageMonthName = "march";
}
if(month === 4){
    document.getElementById("month").innerHTML = "April";
    imageMonthName = "april";
}
if(month === 5){
    document.getElementById("month").innerHTML = "Mai";
    imageMonthName = "may";
}
if(month === 6){
    document.getElementById("month").innerHTML = "Juni";
    imageMonthName = "june";
}
if(month === 7){
    document.getElementById("month").innerHTML = "Juli";
    imageMonthName = "july";
}
if(month === 8){
    document.getElementById("month").innerHTML = "August";
    imageMonthName = "august";
}
if(month === 9){
    document.getElementById("month").innerHTML = "September";
    imageMonthName = "september";

}
if(month === 10){
    document.getElementById("month").innerHTML = "Oktober";
    imageMonthName = "october";
}
if(month === 11){
    document.getElementById("month").innerHTML = "November";
    imageMonthName = "november";
}
if(month === 12){
    document.getElementById("month").innerHTML = "Dezember";
    imageMonthName = "december";
}

document.querySelector("body").style.backgroundImage = `url(assets/images/${imageMonthName}.jpg)`;
document.querySelector(".backgImage").style.setProperty("--backgImage",`url('assets/images/${imageMonthName}.jpg')`);

// Schaltjahr ausrechnen
const date = new Date(year, 0, 1);
const nextYear = year + 1;
const nextYearDate = new Date(nextYear,0,1);

const diff = nextYearDate - date;
const oneDay = 1000*60*60*24;

const result = diff / oneDay;

console.log(`Das Jahr ${year} hat ${result} Tage.`);

// Tage ausrechnen
janauryday = 31;
if(result === 365){
    februaryday = 28+janauryday;
}
if(result === 366){
    februaryday = 29+janauryday; 
}
marchday = 31+februaryday;
aprilday = 30+marchday;
mayday = 31+aprilday;
juneday = 30+mayday;
julyday = 31+juneday;
augustday = 31+julyday;
septemberday = 30+augustday;
octoberday = 31+septemberday;
novemberday = 30+octoberday;
decemberday = 31+novemberday;

console.log(februaryday);


// Januar
if(month === 1){
    janauryday = true;
    februaryday = false;
    marchday = false;
    aprilday = false;
    mayday = false;
    juneday = false;
    julyday = false;
    augustday = false;
    septemberday = false;
    octoberday = false;
    novemberday = false;
    decemberday = false;

    janauryday = day;

    console.log(janauryday);
}
if(janauryday === 1 && janauryday){
    verse.innerHTML = "Einst waren auch wir unverständig, ungehorsam, gingen in die Irre … Als aber die Güte und Menschenliebe unseres Retter-Gottes erschien, errettete er uns.";
    headline_texte.innerHTML = "Neustart";
    texte.innerHTML = "Abnehmen, weniger Rauchen, reduzierter Konsum von Fleisch, Süßigkeiten oder Alkohol – für manche gehören gute Vorsätze zu Silvester wie die Raketen oder das Glas Sekt. Meist sind diese aber nach einigen Tagen oder Wochen wieder vergessen, nur Frust und der Wunsch nach Veränderung bleiben zurück. Wie sieht es bei dir aus? Was möchtest du ändern im neuen Jahr? Was möchtest du vielleicht hinter dir lassen, womit möchtest du aufräumen? Dieser Kalender möchte dir die Initialzündung zu einem Neustart geben. Es geht um deine Beziehung zu Gott. Jeder Zettel soll dazu beitragen, dass du ihn – und zugleich auch dich selbst – besser kennenlernst. Du wirst feststellen, dass in der persönlichen Beziehung zu Gott sein Sohn Jesus Christus eine zentrale Rolle spielt. Denn durch die Worte und Taten von Jesus kommt Licht in das „Projekt“ Gott&du. Bleib dran und lass die Texte an dich heran. Du wirst staunen …";
}
if(janauryday === 2){
    verse.innerHTML = "Ich will ihnen ein Herz geben, mich zu erkennen, dass ich der Herr bin; und sie werden mein Volk, und ich werde ihr Gott sein; denn sie werden mit ihrem ganzen Herzen zu mir umkehren.";
    headline_texte.innerHTML = "Ein neues Herz";
    texte.innerHTML = "Der 55-jährige Louis Washansky war unheilbar krank, er brauchte ein neues Herz. Dr. Christiaan Barnard und sein Operationsteam wagten erstmals die riskante Operation – damals, 1967. Doch obwohl der Patient das neue Herz dringend brauchte, stieß sein Körper es ab. Im Lauf der letzten fünf Jahrzehnte ist dieser komplizierte medizinische Eingriff schon bei vielen Menschen durchgeführt worden und auch gelungen. Im übertragenen Sinn brauchen wir alle ein neues Herz – ein neues Schaltzentrum für mich, für meine Gedanken und Empfindungen. Warum ist eine solche „Operation“ nötig? Weil mein Herz von der Sünde verdorben ist, „denn das Sinnen des menschlichen Herzens ist böse von seiner Jugend an“ (1. Mose 8,21). Gott selbst will mir dieses neue Herz geben. Von mir wird nur verlangt, dass ich von ganzem Herzen zu ihm umkehre. Diese „Operation“ hat Gott schon millionenfach durchgeführt – und sie gelingt 100%ig!";
}
if(janauryday === 3){
    verse.innerHTML = "Herr, du bist unsere Wohnung gewesen von Generation zu Generation.";
    headline_texte.innerHTML = "Home is where the heart is coming to rest";
    texte.innerHTML = "Was ist dein Zuhause? Ein Ort? Eine Person? Es gibt kaum etwas Wertvolleres, als jemand zu haben, bei dem man sich angenommen weiß und sein kann, wie man ist. Wo Unstimmigkeiten nicht direkt eine Beziehung beenden. Die Bibel erzählt von einer unzerbrechlichen Beziehung. Von einer Person, die dein Zuhause werden will: Gott selbst. Gott als Zuhause?! Gott ist immer da. Er ist überall – nur ein Gebet von dir entfernt. Er hat versprochen: „Wer zu mir kommt, den werde ich nicht hinausstoßen“ (Johannes 6,37). Aber nicht erschrecken! Seine strahlende Reinheit wird dich blenden. Darum bitte ihn zuerst: „Reinige mich von meiner Sünde“ (Psalm 51,4). In der Beziehung zu Gott findest du Geborgenheit. In seiner Gegenwart kommt deine aufgewühlte Seele zur Ruhe. Er will dir seinen Frieden geben – egal, was in deinem Leben gerade passiert.";
}
if(janauryday === 4){
    verse.innerHTML = "Ich verkündige euch große Freude,  die für das ganze Volk sein wird;  denn euch ist heute in der Stadt  Davids ein Erretter geboren,  welcher ist Christus, der Herr.";
    headline_texte.innerHTML = "Aus dem Leben  von Jesus - seine Geburt";
    texte.innerHTML = "Auf Israels Straßen ist viel los. Kaiser Augustus hat in seinem Reich eine Volkszählung angeordnet. Dazu muss jeder in die Stadt reisen, aus der seine Familie stammt. Joseph kommt aus Nazareth und ist mit seiner Verlobten Maria auf dem Weg nach Bethlehem, um sich dort einschreiben zu lassen. Die Reise ist mühsam für Maria, denn sie ist hochschwanger. In Bethlehem angekommen, machen sie sich auf die Suche nach einer Unterkunft. Die Stadt ist brechend voll. Überall, wo sie anklopfen, heißt es: „Kein Platz mehr. Ausgebucht!“ Wie unangenehm für eine schwangere Frau! Wo sie letztlich untergekommen sind, wird nicht berichtet. In der Nacht setzen die Wehen ein. Maria bekommt ihr erstes Kind – offensichtlich an einem Platz, wo sich sonst die Tiere aufhalten. Denn sie nimmt ihr Baby und legt es in eine Futterkrippe. Und wie soll es heißen? Jesus - „der Herr ist Rettung“. Er wird sein Volk von ihren Sünden erretten (Matthäus 1,21).";
}
if(janauryday === 5){
    verse.innerHTML = "Nur auf Gott  vertraut still meine Seele,  von ihm kommt meine Rettung.";
    headline_texte.innerHTML = "Lied und lebendig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Lied.";
}
if(janauryday === 6){
    verse.innerHTML = "Das Wort Gottes ist lebendig und  wirksam und schärfer als jedes zweischneidige Schwert und durchdringend … und ein Beurteiler der Gedanken und  Überlegungen des Herzens.";
    headline_texte.innerHTML = "Was ist die Bibel";
    texte.innerHTML = "Für manche Menschen ist die Bibel wie ein Maskottchen: Wenn sie da liegt, wo sie immer liegt, geht es ihnen gut. Für andere ist sie eine Art Lexikon: Bei einer Frage suchen sie einen passenden Bibelvers - dann legen sie sie wieder weg. Manche benutzen sie als Erinnerung: an Eltern oder Großeltern, an Konfirmation oder Trauung. Für andere ist sie Kapitalanlage oder Sammelobjekt, manchmal auch Buchstütze oder Briefbeschwerer. Wieder andere brauchen sie für ein ruhiges Gewissen: Als anständiger Mensch hat man nun einmal eine Bibel im Haus. Doch ungelesen ist die Bibel wie ein Medikament, das nicht genommen, eine E-Mail, die nicht geöffnet, ein Geschenk, das nicht ausgepackt wird. Erst wenn sie gelesen wird, wird sie lebendig und nützlich und beurteilt Gedanken und Herzen. Hast du eine Bibel zu Hause? Wenn ja: Was ist sie für dich? Wenn nein, bestell dir gerne eine: www.csv-verlag.de";
}
if(janauryday === 7){
    verse.innerHTML = "So hat Gott die Welt geliebt, dass er seinen eingeborenen Sohn gab, damit jeder, der an ihn glaubt, nicht verloren gehe, sondern ewiges Leben habe.";
    headline_texte.innerHTML = "Ein Vers der Superlative";
    texte.innerHTML = "So hat Gott – der größte Geber die Welt – die größte Zielgruppe geliebt, dass er – das größte Motiv seinen eingeborenen Sohn – das größte Geschenk gab, – die größte Tat damit jeder, – die größte Einladung der an ihn – die größte Person glaubt, – die größte Entscheidung nicht verloren gehe, – die größte Befreiung sondern – der größte Unterschied ewiges Leben – der größte Besitz habe. – die größte Gewissheit";
}
if(janauryday === 8){
    verse.innerHTML = "Alles, was ihr tut, geschehe in Liebe.";
    headline_texte.innerHTML = "Alles in Liebe! – Zur Jahreslosung";
    texte.innerHTML = "Der Bibelvers der diesjährigen Jahreslosung stammt aus der Feder des Apostels Paulus. Er hatte der christlichen Gemeinde in der griechischen Stadt Korinth einen langen Brief geschrieben. Es geht unter anderem darum, wie ein gutes Miteinander innerhalb einer Gemeinde möglich ist. Am Ende dann dieser kurze Satz, eine Art Zusammenfassung: Alles, was ihr tut, geschehe in Liebe! Herausfordernd: Mein Handeln soll durch Liebe zu meinen Mitmenschen geprägt sein. Es geht nicht darum, durch selbstlose Heldentaten die Welt zu retten. Ich soll einfach nur die kleinen Handgriffe des Alltags in Liebe erledigen. Was würde sich wohl in diesem Jahr verändern, wenn ich dieses Motto in meinen Beziehungen ausleben würde? In meiner Familie, gegenüber meinen Kollegen, in meiner Nachbarschaft, in meinem Freundeskreis oder in der Gemeinde? Probieren wir es aus!";
}
if(janauryday === 9){
    verse.innerHTML = "Jesus aber, innerlich bewegt, rührte ihre Augen an; und sogleich wurden sie wieder sehend und folgten ihm nach.";
    headline_texte.innerHTML = "Heilung mit Folgen";
    texte.innerHTML = "Zwei Blinde sitzen am Wegesrand und bemerken eine vorbeiziehende Volksmenge. Mittelpunkt dieser Volksmenge ist Jesus. Als die zwei Blinden hören, dass Jesus vorübergeht, rufen sie laut nach ihm. Sie sehnen sich danach, dass er ihre Blindheit heilt. Die vorübergehende Volksmenge fühlt sich davon gestört. Deshalb drängt sie die Blinden, zu schweigen. Aber keine Chance! Den Glauben an Jesus, ihren einzigen Retter, können die Leute nicht zum Schweigen bringen. Die Blinden rufen umso lauter: Erbarme dich unser, Herr! Jesus bleibt stehen, spricht mit den Blinden über ihr Problem, wird davon „innerlich bewegt“ und heilt sie. Sie werden sehend und folgen ihm nach. Eine ganze Volksmenge folgt Jesus bereits nach, jetzt kommen noch zwei dazu. Diese beiden folgen ihm allerdings nicht wegen Sensationslust, sondern weil er ihr persönlicher Retter aus der Not geworden ist. Was müsste geschehen, dass du Jesus nachfolgst?";
}
if(janauryday === 10){
    verse.innerHTML = "Gott sprach, dass er sein Volk vertilgen wollte, wenn nicht Mose, sein Auserwählter, vor ihm in den Riss getreten wäre.";
    headline_texte.innerHTML = "In den Riss treten";
    texte.innerHTML = "In die Bresche springen oder in den Riss treten sind Redensarten, die ihren Ursprung im militärischen Bereich haben. Wenn früher eine Stadt belagert wurde, dann versuchten die Angreifer ein Loch in die Stadtmauer zu brechen, um so in die Stadt einzudringen. War ihnen das gelungen, dann wurden unter den Verteidigern Freiwillige gesucht, die sich in diesen Riss in der Mauer stellen würden, um die Eindringlinge zurückzuhalten. Das war eine Aufgabe, die oft mit dem Leben bezahlt wurde. Als das Volk Israel sich das goldene Kalb als Bild ihres Gottes gemacht hatte, stellte sich Mose, der Leiter des Volkes, vor Gott hin und bat darum, dass Gott ihn anstelle des Volkes dafür auslöschen möge. Er trat in den Riss, der zwischen Gott und dem Volk entstanden war. Und doch musste er nicht sterben. Es gab nur einen Einzigen, der für andere vollständig in den Riss getreten ist: Jesus Christus. Er hat sein Leben gegeben als Lösegeld für alle. Wer davon Gebrauch macht, ist für ewig gerettet.";
}
if(janauryday === 11){
    verse.innerHTML = "Es geschah, als er an einem gewissen Ort war und betete, da sprach, als er aufhörte, einer seiner Jünger zu ihm: Herr, lehre uns beten.";
    headline_texte.innerHTML = "Lehre uns beten!";
    texte.innerHTML = "Jesus, der Sohn Gottes betet. Das haben die zwölf Männer, die ihn ständig begleiten, schon oft gesehen. Der Eindruck, den sie dabei gewinnen, beschäftigt sie offensichtlich. Sie merken: Jesus schöpft aus dem Gebet die Kraft für seinen wohltuenden Dienst an den Menschen. Seine Worte fallen dabei besonders auf: Es sind Worte der Gnade, und er lehrt mit Vollmacht. Bei den Jüngern kommt der Wunsch auf, so beten zu können wie ihr Herr. Dabei geht es ihnen gewiss nicht um poetische Formulierungen, sondern um die Anliegen und wie man sie Gott vorlegt. Auf die Bitte der Jünger: „Herr, lehre uns beten!“, formuliert Jesus ein Beispiel-Gebet, das sogenannte „Vaterunser“. Seine Jünger sollen dieses Gebet allerdings nicht einfach nachplappern, sondern in ihren persönlichen Gebeten an die verschiedenen Aspekte dieses Gebets anknüpfen: Gottes Ehre, Zukunft, tägliche Nahrung, Vergebung, Versuchung. Willst du auch beten lernen?";
}
if(janauryday === 12){
    verse.innerHTML = "Philippus spricht zu ihm: Komm und sieh!";
    headline_texte.innerHTML = "Überzeuge dich selbst!";
    texte.innerHTML = "„Kann aus Nazareth etwas Gutes kommen?“ – Nathanael reagiert zuerst skeptisch, als ihm sein Freund Philippus begeistert von einer Person erzählt, die er kürzlich getroffen hat: Jesus, aus der Stadt Nazareth, der bereits im Alten Testament angekündigt worden ist. Nathanael wohnt in der Nähe von Nazareth und hat einige Vorurteile gegenüber den Bewohnern dieser Stadt. Mit denen will er am liebsten keinen Talk, keine Beziehung. Und es fühlt sich auch irgendwie gut an, auf diese Bewohner herabzuschauen. Aber Philippus bleibt dran: „Komm und sieh!“ Dann, etwas später, hat Nathanael tatsächlich die Begegnung seines Lebens mit diesem Jesus – und ist beeindruckt. „Gott&du“ – ein neues Jahr und eine neue Chance, Gott kennenzulernen. Du wirst immer wieder etwas von Jesus Christus lesen. Er ist Gottes Sohn. Also: „Komm und sieh!“ Oder: Überzeuge dich selbst! Es kann die Begegnung deines Lebens werden!";
}
if(janauryday === 13){
    verse.innerHTML = "Wenn ihr in meinem Wort bleibt, seid ihr wahrhaft meine Jünger.";
    headline_texte.innerHTML = "Was ist ein Jünger?";
    texte.innerHTML = "1. überzeugter Anhänger einer Person; den Begriff „Jünger“ hat der Reformator Martin Luther erfunden, als er die Bibel ins Deutsche übersetzte. Es bedeutet eigentlich „Schüler“ oder „Lehrling“. 2. im engsten Sinn Bezeichnung für die 12 Gefolgsleute von Jesus (Matthäus 11,1), die er auch Apostel (= Gesandter) nannte. 3. im weiteren Sinn die Nachfolger Jesu. Darunter befanden sich auch Frauen, die mit ihm zogen. 4. in einem umfassenderen Sinn alle, die (bis heute) Jesus als ihren Herrn akzeptieren und ihm nachfolgen (Lukas 14,26-33).";
}
if(janauryday === 14){
    verse.innerHTML = "Meine Seele dürstet nach Gott, nach dem lebendigen Gott.";
    headline_texte.innerHTML = "Gerade & heraus";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Video.";
}
if(janauryday === 15){
    verse.innerHTML = "Gott sprach, und es war; er gebot, und es stand da.";
    headline_texte.innerHTML = "TAAGTGAACTGCTTT…";
    texte.innerHTML = "TAAGTGAACTGCTTTCTAGCAACTCCTGGCTCCTTGAT TGTCTTCTTAAAATCAGAAGCCACTGTATCATAAACAA ACAGTAATAAACTTAGATGCTTCTTAAGTGCTTTAAA CTTTGGGTTCAAATTTGAGCTGAGACTAAGACAGGTG GTGATGGTCAGAACATGTGCTTTTTATTCTTTCAGAA AATTCCCTGTCCAACTCGCCGATGAGTGCATTTTTCT CTGAGTATAGCAAAACAAACAAAACCTTTCACAAGA AATTCCACTTATGAGAAATAAAGAATGTAAGCAGAC Das ist nur ein kleiner Ausschnitt aus unserer DNA, die die Gene mit den Informationen enthält, die für die Zellfunktion notwendig sind. Die Länge der DNA in einem menschlichen Körper beträgt insgesamt 150 Milliarden Kilometer, also 1000-mal die Strecke von der Erde zur Sonne. Jeder geschriebene Text hat einen Autor. Da wirst du mir zustimmen. Und wer ist der Autor der DNA?";
}
if(janauryday === 16){
    verse.innerHTML = "Ja, als ein Schattenbild geht der Mensch umher.";
    headline_texte.innerHTML = "Licht und Schatten";
    texte.innerHTML = "Das klingt aber sehr pessimistisch, wenn Salomo feststellt, dass alles Menschenleben nur ein Schatten sein soll. Dabei sind die Menschen doch die Lichtgestalten der Schöpfung, die nicht nur angestrahlt werden und dann einen Schatten werfen, sondern selbst leuchten. Tatsächlich ist es ein Trugschluss, zu glauben, dass man selbst Lichtquelle ist. Der Mensch hat nämlich durch die Sünde das Licht Gottes in seinem Leben ausgeknipst. Genau wie ein Schatten nicht das Wesen selbst ist, entspricht der Mensch als Sünder nicht mehr seinem ursprünglich von Gott vollkommen geschaffenen Zustand. Es braucht eine Neuschöpfung, stellt Paulus fest, die damit beginnt, dass Gott in unsere Herzen leuchtet – so, wie er bei der Schöpfung aus Finsternis Licht leuchten ließ. Nur dann sind wir Leuchtmittel und können wir wie Lichter in der Welt scheinen (2. Korinther 4,6; Philipper 2,15).";
}
if(janauryday === 17){
    verse.innerHTML = "Wer sich über den Armen erbarmt, ehrt Gott.";
    headline_texte.innerHTML = "Un-erhört";
    texte.innerHTML = "Ist doch selbstverständlich, dass wir uns für die Hilfsbedürftigen und Unterdrückten einsetzen. Selbstverständlich spenden wir in die Dritte Welt; selbstverständlich kämpfen wir gegen Diskriminierung sozialer Randgruppen und Sexismus. Aber wie sieht es mit den „Armen“ und „Schwachen“ in unserer direkten Umgebung aus? Mit dem Außenseiter in der Klasse, den alle komisch finden? Mit dem überforderten Kollegen, der nichts auf die Kette kriegt? Wie reagieren wir, wenn die alte Oma an der Aldi-Kasse zwei Minuten braucht, um ihr Kleingeld abzuzählen? Wenn der/die Partner/in ständig gereizt und depri drauf ist? Hören wir ihren (oft stummen) Schrei nach Aufmerksamkeit, nach Hilfe und Nachsicht? Oder lassen wir sie eiskalt unser Genervtsein oder sogar Verachtung spüren? Gott ist barmherzig. Wenn wir es auch sind, ehren wir Gott.";
}
if(janauryday === 18){
    verse.innerHTML = "Wer irgend unter euch groß werden will, soll euer Diener sein; und wer irgend unter euch der Erste sein will, soll euer Knecht sein.";
    headline_texte.innerHTML = "Die zweite Geige";
    texte.innerHTML = "Der Dirigent Leonard Bernstein wurde einmal gefragt, welches Instrument im Orchester am unbeliebtesten sei. Er antwortete mit einem Augenzwinkern: „Die zweite Geige. Jeder will die erste Geige spielen! Es gibt nur wenige Geiger, die mit dem gleichen Eifer und Einsatz die zweite Geige spielen. Aber die berühmtesten Orchester sind die mit den besten zweiten Geigern. Sie sorgen für die Harmonie!“ Harmonie – da ist etwas dran! Harmonie kann es nur geben, wenn nicht alle die erste Geige spielen wollen. Das hat Jesus seinen Nachfolgern gezeigt und auch vorgelebt. Er hätte als Sohn Gottes alle Macht gehabt, seine Gegner zu übertrumpfen. Aber er verzichtete aus Liebe darauf, um den Menschen zu dienen und sie zu retten. Das ist wirklich revolutionär und eine befreiende Botschaft für die, denen niemand freiwillig die erste Geige überlässt. Das macht Jesus Christus so anziehend für alle, die sich zurückgesetzt fühlen.";
}
if(janauryday === 19){
    verse.innerHTML = "Alles hat er schön gemacht zu seiner Zeit; auch hat er die Ewigkeit in ihr Herz gelegt.";
    headline_texte.innerHTML = "Ewigkeit im Herzen";
    texte.innerHTML = "„Wenn wir in uns selbst ein Bedürfnis entdecken, das durch nichts in dieser Welt gestillt werden kann – dann können wir daraus schließen, dass wir für eine andere Welt erschaffen sind.“";
}
if(janauryday === 20){
    verse.innerHTML = "Glückselig, der da liest und die da hören die Worte der Weissagung und bewahren, was in ihr geschrieben ist.";
    headline_texte.innerHTML = "Lesen & staunen";
    texte.innerHTML = "An dieser Stelle ist eigentlich eine Buchempfehlung.";
}
if(janauryday === 21){
    verse.innerHTML = "… da erscheint ein Engel des Herrn dem Joseph im Traum und spricht: Steh auf, nimm das Kind und seine Mutter zu dir und flieh nach Ägypten und bleibe dort, bis ich es dir sage; denn Herodes wird das Kind suchen, um es umzubringen.";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – seine Flucht";
    texte.innerHTML = "Riesenaufregung in Jerusalem! Den damaligen Herrscher Herodes erreicht die Nachricht, dass in seinem Regierungsgebiet ein König geboren worden ist. Das ist eine potenzielle Bedrohung für ihn und seine Familie. Was tun? Das Kind muss gefunden und beseitigt werden! Etwa zur gleichen Zeit in Bethlehem: Joseph hat einen Traum. Ein Engel sagt ihm, dass er seine Frau Maria und sein Kind Jesus nehmen soll, um nach Ägypten zu fliehen – und so dem Mordanschlag des Herodes zu entgehen. So wird Jesus Christus zu einem Flüchtlingskind! Dramatische Umstände – und doch schreibt Gott seine eigene Geschichte. Bereits etliche Jahrhunderte vorher hat er einem seiner Propheten mitgeteilt: „Aus Ägypten habe ich meinen Sohn gerufen“ (Hosea 11,1). Nachdem Herodes gestorben ist, verlässt die Familie Ägypten und zieht in die Heimat zurück. So erfüllt sich die jahrhundertealte Prophezeiung.";
}
if(janauryday === 22){
    verse.innerHTML = "Kummer im Herzen des Mannes beugt es nieder, aber ein gutes Wort erfreut es.";
    headline_texte.innerHTML = "Weltknuddeltag";
    texte.innerHTML = "Gestern war internationaler „Weltknuddeltag“. Erfunden wurde er vor über 30 Jahren von einem amerikanischen Pfarrer. Der Tag liegt zeitlich fast genau zwischen Weihnachten und Valentinstag, also mitten in der kalten und oft auch trüben Jahreszeit. Hier kann eine Umarmung wohltun und sich positiv auf Stress, Hormone, Blutdruck und Atmung auswirken. Natürlich bedeutet das nicht, dass du heute wildfremden Menschen um den Hals fallen sollst. Das wäre auch nicht im Sinne des Erfinders. Die Bibel sagt aber, dass das Herz durch ein gutes Wort „erfreut“ wird. Und ganz sicher erinnerst du dich an Situationen, wo du gelobt wurdest oder ein Kompliment erhalten hast. Nimm dir doch heute einmal bewusst vor, anderen ein „gutes Wort“ zu sagen! Möglichkeiten gibt es genug: In der Schule, auf der Arbeit oder im Supermarkt an der Kasse. Vor allem aber lass dich heute von Gott und seinem „guten Wort“ erfreuen!";
}
if(janauryday === 23){
    verse.innerHTML = "… denn du vermagst nicht ein Haar weiß oder schwarz zu machen.";
    headline_texte.innerHTML = "Haare färben";
    texte.innerHTML = "Den Satz im heutigen Bibelvers hat Jesus in der sogenannten Bergpredigt gesagt. Eigentlich ein unscheinbarer Nebensatz. Doch er zeigt uns einen unbeliebten Fakt: Bei aller Anstrengung ist kein Mensch in der Lage, die Farbe eines einzigen Haares bleibend zu verändern. Trotzdem leben wir oft so, als würde der Fortschritt in Wissenschaft und Technik irgendwann alles möglich machen. Dann kämen wir unserem Ziel der absoluten Selbstbestimmung näher. Im heutigen Vers sagt Gott uns, wie es wirklich ist: Eine Sache, die für Gott nicht einfacher sein könnte, stellt uns Menschen vor ein unlösbares Rätsel. So hat Gott bereits die passende Haarfarbe für die Menschen ausgewählt, bevor sie geboren werden. Und dass die Haare mit zunehmendem Alter irgendwann grau oder weiß werden, hat er ebenfalls festgelegt. So wird uns einmal mehr bewusst, dass wir auf Gott angewiesen sind. Und das ist auch gut so.";
}
if(janauryday === 24){
    verse.innerHTML = "Ich will dich unterweisen und dich den Weg lehren, den du wandeln sollst; mein Auge auf dich richtend, will ich dir raten.";
    headline_texte.innerHTML = "Schlafen, arbeiten, netflixen. Und sonst so?";
    texte.innerHTML = "Ob es die kurze Zwischenpause ist, wenn wir den Bildschirm sperren, um ungestört eine duftende Tasse Kaffee zu schlürfen, ob es die Wartezeit an der Haltestelle ist, eine längere Autobahnfahrt oder die letzten Minuten abends im Bett, wir brauchen sie: Denkpausen. Zeit zur Selbstreflexion. Welchen Sinn hat das, was ich gerade tue? Welche Ziele verfolge ich (und sind sie meinen Ehrgeiz wert)? Wo hinein stecke ich meine Energie, meine Zeit, meine Gefühle? Wir sind zu unperfekt, als dass wir uns blind von inneren Impulsen leiten lassen sollten. Darum ist es so wichtig, regelmäßig innezuhalten und uns kritisch zu hinterfragen. Gar nicht so einfach, wenn das Smartphone jederzeit griffbereit liegt und nonstop Musik oder Fernsehen läuft. Lass dich challengen, bewusst abzuschalten (im wahrsten Sinne des Wortes) und erlaube deinem Herzen, die großen Fragen des Lebens zu stellen. Adressiere sie an den, der die Antworten kennt und der einen Plan mit dir hat. Er will dich führen.";
}
if(janauryday === 25){
    verse.innerHTML = "Nachdem Gott vielfältig und auf vielerlei Weise ehemals zu den Vätern geredet hat in den Propheten, hat er am Ende dieser Tage zu uns geredet im Sohn.";
    headline_texte.innerHTML = "Klare Worte";
    texte.innerHTML = "Der Mensch will Klarheit in seinem Leben: Über den aktuellen Kontostand … den Urlaubsanspruch … das Weihnachtsgeld … den Rentenbeginn … die Zukunft. Manchmal auch über die Vergangenheit des Partners oder das Geschlecht des Ungeborenen. Er will Zahlen und Fakten, will es schwarz auf weiß, will es schriftlich haben. Unsicherheiten erträgt er nicht. Doch wenn es um Gott oder um das Leben nach dem Tod geht, dann scheint das für manche nicht mehr zu gelten. Dann verlassen sich viele auf eigene Ideen, basteln sich einen eigenen Religions-Mix zusammen oder verschieben das Thema bis zum Sankt-Nimmerleins-Tag. Gott redet klare Worte durch die Bibel, sein geschriebenes Wort. Vor allem redet er zu uns in seinem Sohn, Jesus Christus, der Mensch geworden ist. Damit wir Gott erkennen können, seine Gedanken über uns erfahren und gerettet werden. Klare Worte sind gut. Da weiß man, woran man ist.";
}
if(janauryday === 26){
    verse.innerHTML = "Wenn wir unsere Sünden bekennen, so ist er treu und gerecht, dass er uns die Sünden vergibt und uns reinigt von aller Ungerechtigkeit.";
    headline_texte.innerHTML = "Schuld in die Schuhe schieben";
    texte.innerHTML = "„Jemandem die Schuld in die Schuhe schieben“ – das stammt von den Gaunern im Mittelalter. Da man in den Herbergen häufig zu mehreren in einem Raum übernachtete, konnte ein Dieb einfach seine Beute in die Schuhe eines anderen schieben, um sie darin über Nacht zu verstecken. Fand jemand das Diebesgut, wurde derjenige für schuldig erklärt, bei dem es in die Schuhe geschoben worden war, und der Dieb kam davon. Auch wir neigen dazu, Schuld von uns auf andere zu schieben. Wir reden uns heraus und wollen nicht die Verantwortung für unser Handeln übernehmen. Bei Menschen kommen wir vielleicht damit durch, aber bei Gott funktioniert das nicht: „Keineswegs hält er für schuldlos den Schuldigen“ sagt die Bibel in 2. Mose 34,7. Allerdings spricht Gott auch von Schuld frei, wenn wir sie ihm ehrlich bringen und in Jesus das Geschenk seiner Vergebung annehmen!";
}
if(janauryday === 27){
    verse.innerHTML = "Wer hat die Wasser gemessen mit seiner hohlen Hand … und wem wollt ihr Gott vergleichen, und was für ein Gleichnis wollt ihr ihm an die Seite stellen?";
    headline_texte.innerHTML = "Die hohle Hand Gottes";
    texte.innerHTML = "Vielleicht klingt das etwas seltsam für dich: Schau dir deine Hände mal etwas genauer an! Wenn du jetzt mit einer Hand eine kleine Schale bildest und diese unter dem nächsten Wasserhahn mit Wasser füllst, passen nur wenige Milliliter Wasser in deine hohle Hand. In allen Meeren, Seen, Flüssen, Bächen und Gletschern und Gewässern unseres Planeten gibt es zusammen ca. 1.385.984.600.000.000.000.000 Liter Wasser. Das sind 1.386 Trillionen Liter. Durch diese unvorstellbar große Menge Wasser werden ca. 71 Prozent der Erdoberfläche bedeckt. Die Bibel beschreibt die Größe Gottes und seine Allmacht als Schöpfer des Universums, indem sie zeigt, dass Gott das gesamte Wasservorkommen der Erde mit seiner hohlen Hand abgemessen hat. Einfach so. Gott ist so groß, dass die menschliche Vorstellungskraft nicht ausreicht, um ihn zu beschreiben. Niemand ist so groß, so mächtig, so heilig und so voller Liebe, wie der Gott der Bibel.";
}
if(janauryday === 28){
    verse.innerHTML = "Wie lieblich sind auf den Bergen die Füße dessen, der frohe Botschaft bringt, der Frieden verkündigt, der frohe Botschaft des Glücks bringt, der Rettung verkündigt.";
    headline_texte.innerHTML = "Live & farbig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Livestream.";
}
if(janauryday === 29){
    verse.innerHTML = "Christus Jesus, der, da er in Gestalt Gottes war, es nicht für einen Raub achtete, Gott gleich zu sein, sondern sich selbst zu nichts machte und Knechtsgestalt annahm.";
    headline_texte.innerHTML = "Superhero?";
    texte.innerHTML = "Zwischen den Dimensionen wechseln, durch geschlossene Türen gehen, Tote lebendig machen, Kranke heilen, unverletzt durch eine Menge wütender Angreifer marschieren, Tausende von Menschen mit fünf Broten und ein paar kleinen Fischen satt machen, mit seinen Worten Tausende fesseln, und zwar über Stunden, sogar über Tage. Was meinst du? Ein Mensch mit diesen Fähigkeiten könnte doch mühelos die Weltherrschaft an sich bringen, oder? Doch Jesus Christus, der all das getan hat (nachzulesen in den vier ersten Büchern des Neuen Testaments in der Bibel), suchte überhaupt keine Macht, Anerkennung oder Ehre für sich selbst. Er lebte nur, um Gott zu gefallen und starb, um verlorene Menschen zu retten. Und er verließ am dritten Tag das Grab, in das man ihn gelegt hatte! Er hat den Tod besiegt! Also doch ein Superhero? Hast du Lust bekommen, ihn (näher) kennenzulernen?";
}
if(janauryday === 30){
    verse.innerHTML = "Er wird seine Herde weiden wie ein Hirte, die Lämmer wird er auf seinen Arm nehmen und in seinem Schoß tragen, die Säugenden wird er sanft leiten.";
    headline_texte.innerHTML = "Gott weidet";
    texte.innerHTML = "Auf seinem Sterbebett richtet der Patriarch Jakob sich noch einmal auf, um mit seinem Sohn Joseph zu sprechen. Am Ende der Tage angekommen, lässt er sein Leben Revue passieren und stellt fest: „Der Gott, vor dessen Angesicht meine Väter, Abraham und Isaak, gelebt haben, der Gott, der mich geweidet hat, seitdem ich bin bis auf diesen Tag ...“ Was für ein schöner Ausdruck: Gott hat mich geweidet! Wie oft war Jakobs Leben holprig verlaufen – meist selbstverschuldet. Gott musste immer wieder eingreifen, um das widerspenstige Schaf Jakob auf den richtigen Weg und die richtige Weide zurückzubringen. Gott war auch der mutmachende Hirte in Jakobs Notzeiten, manchmal auch der erziehende Hirte. Letztendlich fasst Jakob das liebevolle Handeln des Hirten zu seinem Besten mit den Worten zusammen: „Gott hat mich geweidet“. Keine Klage, nur Dankbarkeit! Der Tagesvers beschreibt, was Jakob erfahren hat: Gott führt wie ein Hirte und sorgt liebevoll für jedes seiner Schafe.";
}
if(janauryday === 31){
    verse.innerHTML = "Lehre uns denn zählen unsere Tage, damit wir ein weises Herz erlangen!";
    headline_texte.innerHTML = "Carpe diem – momento mori";
    texte.innerHTML = "„Es ist nicht zu wenig Zeit, die wir haben, sondern es ist zu viel Zeit, die wir nicht nutzen.“ Der römische Philosoph Seneca bringt kurz nach Christi Geburt etwas auf den Punkt, das heute absolut aktuell ist: Gefühlt hetzen wir gestresst durch unser Leben, während wir enorm viel Zeit vertrödeln. In diesem Sinn wollen wir uns mit „carpe diem“ auffordern lassen, jeden Tag, der uns noch zur Verfügung steht, sinnvoll einzusetzen. Deshalb auch: momento mori – gedenke des Sterbens. Weil der Mensch mit Gras verglichen werden kann – „am Morgen blüht es und sprosst auf, am Abend wird es abgemäht und verdorrt“ (Psalm 90,6) –, wünschte der Patriarch Mose, von Gott belehrt zu werden, seine Tage zu zählen, d. h. zielorientiert zu verleben. Dafür braucht man ein weises Herz. Nach dem Motto zu leben: „Lasst uns essen und trinken, denn morgen sterben wir!“ (Jesaja 22,13), wäre fatal. Klug ist, wenn man mit Gott lebt und seine Zeit im Blick auf die Ewigkeit nutzt.";
}

// Februar
if(month === 2){
    janauryday = false;
    februaryday = true;
    marchday = false;
    aprilday = false;
    mayday = false;
    juneday = false;
    julyday = false;
    augustday = false;
    septemberday = false;
    octoberday = false;
    novemberday = false;
    decemberday = false;

    februaryday = janauryday+day;

    console.log("HAllo wie gehts"+februaryday);
}
if(februaryday === 1){
    verse.innerHTML = "Aus deinen Vorschriften empfange ich Einsicht.";
    headline_texte.innerHTML = "Please, read the manual";
    texte.innerHTML = "Kürzlich regte sich meine Frau zurecht auf, weil ich mir in ihrer Abwesenheit an unserer Waschmaschine mittels Trial-and-Error zu schaffen gemacht hatte. „Schatz, lies doch einfach das Benutzerhandbuch.“ Manchmal denke ich, dass uns Männern ein Abenteuer-Gen eingepflanzt wurde ... Was im Haushalt so humorvoll erscheint, ist in Bezug auf das Leben total ernst: Das Allerwichtigste, was wir verantwortungsvoll zu „bedienen” haben, ist eben unser Leben, und zu selten – vielleicht nie – lesen wir das „Benutzerhandbuch”: Gottes Wort, die Bibel. Gott, unser Schöpfer, weiß genau, warum er uns „gebaut” hat, wie wir funktionieren, welche lebensbedrohlichen Schwachstellen und moralischen Funktionsstörungen bei uns auftreten können und wie diese behoben werden müssen. Er spricht in seiner „Anleitung” oft im „Schongang”, bisweilen im „Schleudergang”, aber immer reinigend. Wir müssen nur nachlesen ...";
}
if(februaryday === 2){
    verse.innerHTML = "Erhebe dich, HERR, in deiner Kraft! Wir wollen singen und Psalmen singen deiner Macht.";
    headline_texte.innerHTML = "Lied & lebendig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Lied.";
}
if(februaryday === 3){
    verse.innerHTML = "Alle aber, die ihn hörten, gerieten außer sich über sein Verständnis und seine Antworten.";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – kurzzeitig vermisst";
    texte.innerHTML = "„Wo ist Jesus?“ Niemand weiß es. Joseph und Maria sind auf dem Heimweg, als sie ihren zwölfjährigen Sohn vermissen. Sie kommen von einem Fest in Jerusalem und sind jetzt mit vielen anderen auf der Rückreise nach Nazareth, als ihnen der Verlust auffällt. Sie finden Jesus nicht. Es bleibt ihnen nichts anderes übrig, als den ganzen Weg zurückzugehen. Drei Tage vergehen, bis sie ihn endlich finden. Da sitzt er. Im Tempel, mitten unter den Gelehrten. Er hört zu, stellt Fragen und gibt Antworten. Die Anwesenden staunen nicht schlecht. Zwölf Jahre ist der Junge erst alt – und dann solche verblüffenden Antworten! – So ist es eben, wenn der Mensch gewordene Sohn Gottes über sein eigenes Wort, die Bibel, spricht. Maria tadelt ihren Sohn. Schließlich haben sie und Joseph sich große Sorgen gemacht. Jesus erklärt ihnen, was ihn bewogen hat und macht damit deutlich, dass ihn keine Schuld trifft. Trotzdem geht er mit seinen Eltern und ordnet sich ihnen unter.";
}
if(februaryday === 4){
    verse.innerHTML = "Hieran haben wir die Liebe erkannt, dass er für uns sein Leben hingegeben hat.";
    headline_texte.innerHTML = "What is love?";
    texte.innerHTML = "Ein Wochenmagazin präsentierte vor einigen Jahren einige Liebesbeweise, mit denen man seinen Partner begeistern kann: <br>Für die Psychotherapeutin Dr. Wolf ist Zuhören äußerst wichtig. <br>Der Forscher Shelly Gable hält es für die größte Liebe, wenn man den Erfolg des Partners wie seinen eigenen feiert. <br>Der Paarberater Michael Mary ist überzeugt, dass kleine Botschaften oder Gesten viel über die Liebe aussagen. <br>Ein Team der Florida State University meint sogar, dass Streiten für eine Beziehung lebenswichtig sei. <br>Den größten Liebesbeweis in einer Beziehung nennt die Bibel: „Größere Liebe hat niemand als diese, dass jemand sein Leben lässt für seine Freunde“ (Johannes 15,13). Mehr geht nicht. Und diese Liebe hat Jesus Christus bewiesen, indem er für uns starb. <br>Danke Herr!";
}
if(februaryday === 5){
    verse.innerHTML = "Ihr habt den Heiligen und Gerechten verleugnet und gebeten, dass euch ein Mann, der ein Mörder war, geschenkt würde; den Urheber des Lebens aber habt ihr getötet.";
    headline_texte.innerHTML = "Echte Vergebung";
    texte.innerHTML = "Von den zwölf Jüngern Jesu war niemand fehlerlos. Besonders von Petrus werden uns Verfehlungen berichtet. Man denke nur an die peinliche Situation, als Petrus dreimal seinen Meister verleugnete, indem er behauptete, diesen Jesus nicht zu kennen – aus Angst, mitverurteilt zu werden. Nach der Auferstehung und Himmelfahrt Jesu hält Petrus eine Rede. Darin wirft ausgerechnet er den Juden die Verleugnung des gerechten Jesus vor, obwohl er dieses Vergehen selbst dreimal begangen hat. Wie ist das möglich? Die Antwort: Jesus hat Petrus vollständig vergeben, als sie sich am Auferstehungstag ausgesprochen haben. An diese Sünde denkt Gott danach nicht mehr; sie wird nie mehr hervorgeholt. So kann Petrus tatsächlich von Gott dazu gebraucht werden, den Juden die Verleugnung vorzuhalten. Doch genauso wie Petrus vergeben worden ist, will Gott auch den Juden vergeben, wenn sie – wie Petrus – Buße tun und sich bekehren. – Gott ist reich an Vergebung!";
}
if(februaryday === 6){
    verse.innerHTML = "Gott, mein Schöpfer, gibt Gesänge in der Nacht";
    headline_texte.innerHTML = "Tanzen im Gefängnis";
    texte.innerHTML = "Richard Wurmbrand, Sohn einer deutsch-jüdischen Familie in Rumänien, kam 1937 zum christlichen Glauben. Weil er verfolgten Juden Schutz und Zuflucht bot, wurde er 1948 von der kommunistischen Regierung verhaftet und kam in ein unmenschliches, grausames Gefängnis. Mit täglichen Folterungen, dem Spott der Wärter, Schlägen und vielen weiteren brutalen Demütigungen wurde er gequält. Die Peiniger urinierten sogar auf das wenige, verschimmelte Essen, das er bekam. Die Lage war absolut hoffnungslos. Und trotzdem schreibt er Folgendes in sein Tagebuch: „Allein in meiner Zelle, frierend, hungrig und in Lumpen – so tanzte ich jede Nacht vor Freude. Manchmal war ich so voll Freude, dass ich dachte, ich würde zerspringen.“ War er wahnsinnig? War er durchgedreht? Hatte er den Verstand verloren? Nein! Er hatte Jesus Christus in seinem Herzen. Selbst die dicksten Kerkermauern und die dunkelsten Stunden konnten ihm nicht seine Freude rauben.";
}
if(februaryday === 7){
    verse.innerHTML = "Die Himmel erzählen die Herrlichkeit Gottes, und die Ausdehnung verkündet seiner Hände Werk. Keine Rede und keine Worte, doch gehört wird ihre Stimme.";
    headline_texte.innerHTML = "Gottes Schöpfer-Stimme";
    texte.innerHTML = "Wenn Materie, Zeit und Raum aus dem Nichts zum Vorschein kommen, sprechen viele Wissenschaftler von einem „Urknall“ vom „Big Bang“. Zack – und alles war angelegt, damit sich all das Schöne um uns herum innerhalb von 13,8 Milliarden Jahren bis heute entwickeln konnte. Der Bibelleser nennt einen anderen Anfang: „Gott sprach: Es werde … und es wurde so.” Und die wunderbare Schöpfung, die durch Gottes Reden entstanden ist, spricht nun selbst von der Herrlichkeit ihres Schöpfer-Gottes. Überall ist seine Stimme zu hören: von der Genauigkeit der gigantischen Umlaufbahnen riesiger Himmelskörper bis hin zu der mikroskopischen Zellteilung, aus der ein Mensch entsteht. <br>Da kann man nur staunen und Gott die Ehre geben!";
}
if(februaryday === 8){
    verse.innerHTML = "Der Sohn des Menschen ist gekommen, zu suchen und zu erretten, was verloren ist.";
    headline_texte.innerHTML = "Randpersönlichkeit";
    texte.innerHTML = "Fühlst du dich manchmal am Rand der Gesellschaft, unbeachtet und ungeliebt? Jesus hatte gerade an solchen Personen immer großes Interesse: <br>Er sprach mit einer Samariterin, einer Frau aus einer damals verachteten Volksgruppe (Johannes 4) <br>Er heilte Maria, die von sieben Dämonen besessen worden war (Markus 16,9). <br>Er beschützte eine auf frischer Tat ertappte Ehebrecherin vor der Steinigung (Johannes 8,3-11). <br>Er vergab dem Schwerverbrecher, der neben ihm gekreuzigt worden war und sicherte ihm das Paradies zu (Lukas 23,40-43). <br>Er half einem Mann, der seit 38 Jahren gelähmt war und der keinen einzigen Freund hatte (Johannes 5,3-9). <br>Er heilte zwei Blinde, die keiner beachtete (Matthäus 20,30-34). <br>Er kümmerte sich um zehn Aussätzige, um die jeder Mensch einen großen Bogen machte (Lukas 17,12-19). <br>Er hat auch ein Auge für dich!";
}
if(februaryday === 9){
    verse.innerHTML = "Gott zu nahen ist gut für mich.";
    headline_texte.innerHTML = "Sprichst du noch mit dir selbst oder betest du schon?";
    texte.innerHTML = "Als der Altkanzler Helmut Schmidt einmal gefragt wurde, ob er auch bete, soll er provokant entgegnet haben: „Ich führe keine Selbstgespräche“. Schade, dass Helmut Schmidt nicht daran glaubte, dass Gott dem Beter zuhört. Er ist der „Hörer des Gebets”, wie der König David ihn einmal ansprach (Psalm 65,3). Übrigens hört Gott nicht nur Gebete, auch die spöttische Antwort ist oben angekommen. Als Kind Gottes bin ich fest davon überzeugt, dass keins meiner Gebete nur bis zur Zimmerdecke gekommen ist. Nein: „Der das Ohr gepflanzt hat, sollte er nicht hören?” (Psalm 94,9). Ihm danke ich, wenn es mir gut geht, und ihm schütte ich mein Herz aus, wenn ich in Not bin. Zu ihm kann ich immer kommen – nie werde ich abgewiesen oder nicht ernst genommen. Ihm vertraue ich, weil ich weiß und erlebt habe, dass er nur mein Bestes will. Diese Erfahrungen konnte ein Helmut Schmidt nicht machen ...";
}
if(februaryday === 10){
    verse.innerHTML = "Als aber die Güte und Menschenliebe unseres Heiland-Gottes erschien, errettete er uns, nicht aus Werken, die, in Gerechtigkeit vollbracht, wir getan hatten, sondern nach seiner Barmherzigkeit.";
    headline_texte.innerHTML = "Eine Tragödie mit Folgen";
    texte.innerHTML = "Die Nordsee vor Borkum. Dort verloren damals viele Menschen ihr Leben. Denn lange gab es keine organisierten Rettungseinheiten. Im September 1860 sind schwache Hilferufe vom Meer aus auf Borkum zu hören. Ein Schiff liegt auf der Sandbank. Mit schwerer Schlagseite, hin- und hergeworfen vom Wind und der Brandung. Machtlos müssen die Borkumer dem Überlebenskampf der Mannschaft zuschauen. Denn vom Strand aus das Schiff zu erreichen, ist aussichtslos – die Brandung ist unbezwingbar. Alle an Bord sterben. Diese Tragödie ist der Anlass für den ersten deutschen Seenotrettungsverein. Er wird 1861 gegründet und errichtet eine erste Rettungsstation auf der Insel. Auch Gott hat eine „Rettungsstation” errichtet: das Kreuz von Golgatha, an dem Jesus Christus für uns starb – „damit jeder, der an ihn glaubt, nicht verloren gehe, sondern ewiges Leben habe” (Johannes 3,15).";
}
if(februaryday === 11){
    verse.innerHTML = "Niemand hat Gott jemals gesehen; der eingeborene Sohn, der im Schoß des Vaters ist, der hat ihn kundgemacht.";
    headline_texte.innerHTML = "Gerade & heraus";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Video.";
}
if(februaryday === 12){
    verse.innerHTML = "Ein Kind ist uns geboren, ein Sohn uns gegeben, und die Herrschaft ruht auf seiner Schulter. Und man nennt seinen Namen: Wunderbarer, Berater, starker Gott, Vater der Ewigkeit, Friedefürst.";
    headline_texte.innerHTML = "Jesus heißt auch: Berater";
    texte.innerHTML = "Schon im Alten Testament (geschrieben ca. 1.500 bis 400 v. Chr.) wird die Geburt Jesu angekündigt. Allerdings wird dabei sein Name „Jesus“ noch nicht verraten. Es wird mit anderen Bezeichnungen bzw. Titeln von ihm gesprochen, wie der Tagesvers zeigt. Einer seiner Namen lautet „Berater“. Jesus ist der ewige Sohn Gottes und zugleich die Person, die von der Jungfrau Maria geboren worden ist. Schon von Kindheit an lebte er in ständigem Kontakt zu seinem Gott und Vater im Himmel: Diese Beziehung versetzte ihn in die Lage, bei jeder Begegnung mit seinen Mitmenschen immer genau das zu fragen, sagen und antworten, was jeweils gut und notwendig war. Niemals sprach Jesus unnütze Worte, niemals spendete er oberflächlichen Trost. Was damals für viele seiner Landsleute galt, gilt auch noch heute: Christus will dein und mein Berater sein. Seine „Ratschläge“ stehen in der Bibel und damit auch im 21. Jahrhundert barrierefrei zur Verfügung! Lass dich von ihm beraten.";
}
if(februaryday === 13){
    verse.innerHTML = "Denn meine Gedanken sind nicht eure Gedanken, und eure Wege sind nicht meine Wege, spricht der HERR. Denn wie der Himmel höher ist als die Erde, so sind meine Wege höher als eure Wege und meine Gedanken als eure Gedanken.";
    headline_texte.innerHTML = "Lebenswirrwarr – oder die falsche Perspektive?";
    texte.innerHTML = "Niemand würde einen handgewebten Teppich mit der Unterseite nach oben legen. Dieses scheinbare Fäden-Wirrwarr sieht einfach schlecht aus. Dass auf der Vorderseite ein so schönes Muster zu sehen ist, würde man eigentlich nicht erwarten. Gleicht dein Leben aktuell solch einem Wirrwarr? Alles scheint so „verknotet“ zu sein? Du hast vielleicht das Gefühl, einfach nicht mehr zu wissen, wo vorne und hinten ist? Schaust mutlos in die Zukunft, haderst mit dir selbst, hast Schwierigkeiten, wichtige Entscheidungen zu treffen? Überlass Gott den Faden deines Lebens! Vertraue ihm! Er hat die „Vorderseite deines Teppichs” vor Augen und möchte etwas Wunderschönes daraus machen.";
}
if(februaryday === 14){
    verse.innerHTML = "Nun aber bleibt Glaube, Hoffnung, Liebe, diese drei; die größte aber von diesen ist die Liebe.";
    headline_texte.innerHTML = "Das Hohelied der Liebe";
    texte.innerHTML = "Die Liebe ist langmütig, ist gütig; die Liebe neidet nicht, die Liebe tut nicht groß, sie bläht sich nicht auf, sie gebärdet sich nicht unanständig, sie sucht nicht das Ihre, sie lässt sich nicht erbittern, sie rechnet das Böse nicht zu, sie freut sich nicht über die Ungerechtigkeit, sondern sie freut sich mit der Wahrheit, sie erträgt alles, sie glaubt alles, sie hofft alles, sie erduldet alles. Die Liebe vergeht niemals. 1. Korinther 13,4-8";
}
if(februaryday === 15){
    verse.innerHTML = "Ich aber, ich habe auf dich vertraut, HERR; ich sprach: Du bist mein Gott!";
    headline_texte.innerHTML = "Mensch & mutig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Einblick in das Leben eines Christen.";
}
if(februaryday === 16){
    verse.innerHTML = "Eins tue ich: Ich vergesse, was dahinten ist, und strecke mich aus nach dem, was vor mir liegt, und jage auf das Ziel zu, den Kampfpreis der himmlischen Berufung Gottes in Christus Jesus.";
    headline_texte.innerHTML = "Nur wer das Ziel kennt, findet auch den Weg";
    texte.innerHTML = "Kennst du dein Lebensziel? Ich spreche nicht vom Sinn, Zweck oder Inhalt deines Lebens, sondern vom Ziel. Also ganz am Ende, wenn du hier „fertig” bist und die Ziellinie überquerst. Vielleicht fühlst du dich vom Leben manchmal überfordert, hin- und hergeworfen, mehr ab als auf. Woran könnte es liegen? An einer gewissen Ziellosigkeit? – Ziellosigkeit führt jedenfalls in die Irre. Stell dir einen Marathonläufer vor, der nicht weiß, wo sein Ziel ist. Oder einen Bildhauer: Wie soll er seinen „Rohling” bearbeiten, wenn er nicht weiß, was für ein Kunstwerk es werden soll? Der Schreiber des Philipperbriefs war alles andere als ziellos. Er kannte sein Ziel und seine Bestimmung genau: bei Jesus Christus im Himmel. Darauf freute er sich. Seine Vorfreude beeinflusste jeden Tag seines Lebens: Er streckte sich nach diesem Ziel aus und „jagte“ ihm entgegen. Das wünsche ich dir auch: eines Tages bei Jesus im Himmel zu sein und jetzt zielstrebig zu leben.";
}
if(februaryday === 17){
    verse.innerHTML = "Und dies ist die Botschaft, die wir von ihm gehört haben und euch verkündigen: dass Gott Licht ist und gar keine Finsternis in ihm ist.";
    headline_texte.innerHTML = "Lesen & staunen";
    texte.innerHTML = "An dieser Stelle ist eigentlich eine Buchempfehlung.";
}
if(februaryday === 18){
    verse.innerHTML = "Das Wort vom Kreuz ist denen, die verloren gehen, Torheit; uns aber, die wir errettet werden, ist es Gottes Kraft.";
    headline_texte.innerHTML = "Das Kreuz – der entscheidende Punkt!";
    texte.innerHTML = "Paulus, ein wirklich herausragender Gelehrter in der Anfangszeit der Christenheit, schreibt einen langen Brief an die christliche Gemeinde in Korinth. Und gleich zu Beginn rückt er eine entscheidende Tatsache in den Mittelpunkt: Jesus Christus starb am Kreuz. Wenn es darum geht, dass Gott Menschen retten will, dann kommt man an der Botschaft vom Kreuz nicht vorbei. In unserem Bibelvers werden die Menschen in zwei Gruppen unterschieden: Für die einen ist die Botschaft vom Kreuz nichts als Dummheit. Für die anderen ist sie Gottes Kraft zum Heil. Zu welcher Gruppe gehörst du? Zu denen, für die das Kreuz der Wendepunkt in ihrem Leben war? Dann bist du gerettet für die Ewigkeit. Genial! Oder kannst du mit dieser Botschaft vom Kreuz und einem gestorbenen und auferstandenen Christus nichts anfangen? Dann befasse dich noch einmal mit diesem wunderbaren Wort vom Kreuz, damit es in dir wirken kann und du nicht verloren gehst";
}
if(februaryday === 19){
    verse.innerHTML = "Die Gottlosen sind wie das aufgewühlte Meer, denn es kann nicht ruhig sein, und seine Wasser wühlen Schlamm und Kot auf.";
    headline_texte.innerHTML = "Ein schmutziges Geschäft";
    texte.innerHTML = "Es gibt Berufe mit echter Drecksarbeit: Früher Bergleute und Schornsteinfeger, heute Müllabfuhr und Kanalreinigung. Andere Berufe kümmern sich um den „moralischen“ Dreck: Sozialarbeiter und Polizisten, Richter und Justizvollzugsbeamte. Doch die größte „Drecksarbeit” hat Jesus Christus erledigt: Dafür kam er, der Sohn Gottes, auf die Erde. Hier bekam er den ganzen „Dreck” der Menschen zu spüren: Er erlebte Hass und Verachtung, Widerstand und Verfolgung. Schließlich wurde er verhaftet, geschlagen, angespuckt, verspottet, gegeißelt und gekreuzigt. Und dann kam die eigentliche „Drecksarbeit”: Er wurde von Gott gestraft, geschlagen und verlassen. Warum? Weil er dort meine Sünden trug: meine Lügen, meinen Hochmut, meine bösen Gedanken. Dort litt und starb Jesus Christus für den ganzen Schutt und Dreck meines Lebens. Weil ich ihn als Stellvertreter angenommen habe, bin ich abgewaschen und gerecht gesprochen. Und einmal werde ich ewig bei ihm sein.";
}
if(februaryday === 20){
    verse.innerHTML = "Die Welt vergeht und ihre Lust; wer aber den Willen Gottes tut, bleibt in Ewigkeit.";
    headline_texte.innerHTML = "Ein Schuss für die Ewigkeit";
    texte.innerHTML = "4. Juli 1954: Endspiel der Fußball-Weltmeisterschaft. Deutschland gegen Ungarn. 8 Minuten vor Schluss steht es 2:2. Da kommt Helmut Rahn, täuscht mit Rechts an, legt auf Links vor – und schießt: „Tor, Tor, Tor“. Ein Schuss für die Ewigkeit, wie er genannt wird. Dieser Tag, dieser Schuss gab den Menschen im Nachkriegsdeutschland Auftrieb. Es war der emotionale Gründungstag der Bundesrepublik. Es war ein Schuss mit Folgen: Für Rahn, für die Mannschaft, für Deutschland. Bei aller Begeisterung für das „Wunder von Bern“ bleibt bestehen: „Die Welt vergeht und ihre Lust“. Letztlich war auch Rahns Schuss nur ein Schuss für die Zeit. Wie viel weitreichender ist die persönliche Entscheidung für oder gegen Jesus Christus: für das Hier und Heute und vor allem für die Ewigkeit. „Wer an den Sohn glaubt, hat ewiges Leben; wer aber dem Sohn nicht glaubt, wird das Leben nicht sehen, sondern der Zorn Gottes bleibt auf ihm“ (Johannes 3,36).";
}
if(februaryday === 21){
    verse.innerHTML = "Der Mensch sieht auf das Äußere, aber der HERR sieht auf das Herz.";
    headline_texte.innerHTML = "#nofilter";
    texte.innerHTML = "Mit der App „BeReal“ sollte erreicht werden, dass die Nutzer authentisch und ungefiltert ihren Alltag teilen. Je ein Bild aus der Front- und Rückkamera stellt den aktuellen Moment dar. Der Reiz liegt für den Betrachter darin, „ungeschminkte“ Tatsachen zu sehen. Doch ähnlich wie ein Bild mit dem Hashtag #nofilter kann auch bei „BeReal” so manches auf die Schnelle inszeniert sein. Der Betrachter wird getäuscht und bekommt die beste Seite zu sehen. Er sieht nur das, was vor Augen ist. Wir können jedem Menschen etwas vormachen und in einem scheinbar „ungefilterten“ Moment doch noch schnell unsere beste Maske aufsetzen. Bei Gott funktioniert das allerdings nicht. Er deckt auf. Wenn sein Licht auf unser Leben leuchtet, fallen alle Masken und Filter. Er sieht nicht auf das Äußere, sondern auf das Herz. Er kennt dich und mich besser, als wir uns selbst meinen zu kennen. Machen wir ihm nichts vor!";
}
if(februaryday === 22){
    verse.innerHTML = "Der diese Dinge bezeugt, spricht: Ja, ich komme bald.";
    headline_texte.innerHTML = "Coming soon!";
    texte.innerHTML = "Der nächste James Bond, die nächste Staffel, die nächste DHL- Lieferung, der nächste Urlaub ... - Coming soon! Ständig ist man in Erwartung auf etwas nahe Bevorstehendes – die Vorfreude ist groß. Und kaum ist das Ereignis vorbei, geht der Blick schon zum nächsten. Vielleicht kennst du Christen in deinem Umfeld, die eine ständige Freude ausstrahlen. Sie sind glücklich und dankbar und lassen sich nicht von den nächsten Highlights treiben. Woran kann das liegen? Gläubige Christen sind auch in Erwartung auf etwas Bevorstehendes. Jesus hat gesagt: „Ich komme bald!” Dieses „Coming soon“ bestimmt ihre Lebensausrichtung. Da ist der nächste Urlaub nichts gegen. Denn es geht um eine ewige Zukunft im Himmel bei Jesus Christus. Coming soon! Bist du dabei?";
}
if(februaryday === 23){
    verse.innerHTML = "Niemand hat Macht über den Tag des Todes.";
    headline_texte.innerHTML = "62 Jahre zu früh";
    texte.innerHTML = "Oft sprach ich mit Marcel über den christlichen Glauben. Irgendwie fand er das schon interessant, doch mit einer Entscheidung wollte er noch warten. „Wenn ich mal 80 bin, dann werde ich mich um die Sache mit Gott kümmern“, war seine Standardantwort. Nach zwei Jahren – wir hatten uns zwischenzeitlich aus den Augen verloren – hörte ich wieder etwas über Marcel. Er war auf einer Party so unglücklich gefallen, dass er direkt starb. Mit nur 18 Jahren! Ganze 62 Jahre vor dem Zeitpunkt, zu dem er sich dann mal mit Gott beschäftigen wollte. 62 Jahre zu früh … Ob ich den morgigen Tag oder das kommende Wochenende noch erlebe, weiß ich nicht. Du auch nicht. Dieser Gedanke soll keine Angstmache sein, aber die Wichtigkeit betonen, sich früh genug um „die Sache mit Gott” zu kümmern. Zu früh gestorben – das trifft auf Marcel und viele andere Menschen zu. Deshalb: „Heute, wenn ihr seine Stimme hört, verhärtet eure Herzen nicht” (Hebräer 4,7).";
}
if(februaryday === 24){
    verse.innerHTML = "Kehre wieder, meine Seele, zu deiner Ruhe! Denn der HERR hat wohlgetan an dir.";
    headline_texte.innerHTML = "Auszeit";
    texte.innerHTML = "„Eine Auszeit im Kloster“, las ich kürzlich in einer Werbeanzeige. Tatsächlich trifft ein solches Angebot den Nerv unserer schnelllebigen Welt; die Nachfrage ist groß. Ein abgeschiedener Ort, fernab der täglichen Hektik und dem Getriebensein durch Verpflichtungen. Anhaltende Ruhe und Stille hinter Klostermauern, ein In-sich-Hineinhorchen und spirituelle Erfahrungen. Sein Leben entschlüsseln und unerfüllte Sehnsüchte befrieden. Ob´s hilft? Unser Tagesvers stellt uns den vor, der echte Ruhe gibt und deine tiefen Sehnsüchte stillt. Den, der dein Leben entschlüsselt und dem du wirklich zuhören solltest: Jesus Christus. Dazu brauchst du keinen besonderen Ort, keine Kirche oder Klostermauern. Dort, wo du jetzt bist, kannst du zu ihm kommen. Sprich mit ihm, bete zu ihm, wie es dir ums Herz ist. Er hört dich! Und lass ihn zu dir sprechen, indem du die Bibel liest. Fange mit den Evangelien an. Dort werden das Leben und die Worte Jesu ausführlich beschrieben. Dabei wirst du innerlich zur Ruhe kommen.";
}
if(februaryday === 25){
    verse.innerHTML = "Sie aber sprachen: Glaube an den Herrn Jesus, und du wirst errettet werden, du und dein Haus. Und sie redeten das Wort des Herrn zu ihm samt allen, die in seinem Haus waren.";
    headline_texte.innerHTML = "Live & farbig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Livestream.";
}
if(februaryday === 26){
    verse.innerHTML = "Siehe, das Lamm Gottes, das die Sünde der Welt wegnimmt!";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Erstes öffentliches Auftreten";
    texte.innerHTML = "Was für eine Menschenmasse! Viele Juden sind an den Jordan gekommen. Ein Prophet namens Johannes hat sie eingeladen. Jeder, der zu Gott umkehren will, soll kommen und sich von ihm in dem Fluss taufen lassen. Jesus, ungefähr 30 Jahre alt, ist auch auf dem Weg zum Jordan. Heute wird er zum ersten Mal öffentlich auftreten und damit beginnen, seinen Landsleuten Gottes Gedanken zu erklären. Johannes sieht ihn kommen und hält inne. Dann beginnt er eine kleine, aber inhaltsreiche Rede über Jesus Christus. Er zeigt auf ihn und sagt zu den Menschen, die ihn umgeben: „Siehe, das Lamm Gottes, das die Sünde der Welt wegnimmt!“ Bedeutungsvoller Satz – gleich zu Beginn des öffentlichen Auftretens von Jesus Christus. In diesem einen Satz wird deutlich, warum er auf diese Erde gekommen ist. Er ist der von Gott gesandte Retter, der das Problem der Sünde durch seinen Tod am Kreuz ein für alle Mal lösen wird.";
}
if(februaryday === 27){
    verse.innerHTML = "Jesus sprach zu ihnen: Dies sind meine Worte …, dass alles erfüllt werden muss, was über mich geschrieben steht in dem Gesetz Moses und den Propheten und Psalmen.";
    headline_texte.innerHTML = "Altes Testament (AT)";
    texte.innerHTML = "• Erster von zwei Teilen der Bibel; besteht aus insgesamt 39 Büchern <br>Das AT wurde von den Juden in drei Teile untergliedert: a. das Gesetz (hebr. Tora) umfasst die fünf Bücher Mose b. die Propheten (hebr. Neviim) umfasst einen Teil der historischen Bücher sowie die sogenannten Prophetenbücher (Jesaja, Jeremia, Hesekiel …) c. die Schriften (hebr. Ketuvim) enthalten vor allem poetische Bücher, nach dem umfangreichsten Buch auch als Psalmen bezeichnet <br>Das AT macht etwa 75% des Umfangs der gesamten Bibel aus <br>Es wurde von unterschiedlichsten Schreibern zum Großteil in Hebräisch verfasst, über einen Zeitraum von 1000 Jahren <br>Hauptaussage des AT: Ein Retter wird kommen!";
}
if(februaryday === 28){
    verse.innerHTML = "...so viele ihn aber aufnahmen, denen gab er das Recht, Kinder Gottes zu werden, denen, die an seinen Namen glauben.";
    headline_texte.innerHTML = "Beziehungsweise";
    texte.innerHTML = "Das Wort beziehungsweise bedeutet lt. DUDEN <br>1. oder; oder vielmehr, genauer gesagt <br>​​​​​​​2. und im anderen Fall Wenn ich sage: „Ich glaube an Gott“, beziehungsweise „ich glaube, dass Gott meine Schuld vergeben hat und ich sein Kind bin”, dann trifft die erste Bedeutung zu. Dann will ich es genauer sagen: Ich habe eine persönliche Beziehung zu Gott. Beziehungs-weise wird auch schon mal wörtlich verstanden – entweder beschreibend: wie ich eine Beziehung lebe, oder auffordernd: Sei weise in deinen Beziehungen! Stellen wir uns die Frage, in welcher Beziehung ich zu Gott lebe. Begnüge ich mich damit, an die Existenz einer höheren Macht zu glauben, zu der ich aber keine Verbindung habe? Oder weiß ich sicher, dass Gott mich zu seinen Kindern zählt und mich liebt? Damit wären wir wieder beim Tagesvers ...";
}
if(februaryday === 29 && result === 366){
    verse.innerHTML = "Glückselig sind, die nicht gesehen und doch geglaubt haben!";
    headline_texte.innerHTML = "Wer’s glaubt, wird selig";
    texte.innerHTML = "Wer nicht glaubt, was ihm mitgeteilt worden ist, reagiert manchmal mit spöttischem Unterton: Wer’s glaubt, wird selig. Ähnlich reagierte Thomas, ein Nachfolger Jesu. Er konnte es einfach nicht fassen, als seine Freunde ihm drei Tage nach dem Kreuzestod Jesu erzählten: „Wir haben den Herrn gesehen” (Johannes 20,25). Eine Woche später war Thomas selbst dabei, als Jesus Christus sich ihnen noch einmal zeigte – und er lernte: Glaube ist mehr als Sehen! Hätte ich die Nachricht direkt geglaubt, hätte ich mich schon die ganze Woche lang freuen können ... Der Glaube an den auferstandenen und lebendigen Herrn Jesus Christus ist keine Einbildung, sondern eine Überzeugung von Dingen, die man nicht sieht, die dennoch Realität sind. „Wenn du mit deinem Mund Jesus als Herrn bekennst und in deinem Herzen glaubst, dass Gott ihn aus den Toten auferweckt hat, wirst du errettet werden” (Römer 10,9).";
}

// März
if(month === 3){
    janauryday = false;
    februaryday = false;
    marchday = true;
    aprilday = false;
    mayday = false;
    juneday = false;
    julyday = false;
    augustday = false;
    septemberday = false;
    octoberday = false;
    novemberday = false;
    decemberday = false;

    marchday = februaryday+day;
    
    console.log(marchday);
}
if(marchday === 1){
    verse.innerHTML = "Der das Ohr gepflanzt hat, sollte er nicht hören? Der das Auge gebildet hat, sollte er nicht sehen?";
    headline_texte.innerHTML = "Lied & lebendig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Lied.";
}
if(marchday === 2){
    verse.innerHTML = "Den Reichen in dem jetzigen Zeitlauf gebiete, nicht hochmütig zu sein noch auf die Ungewissheit des Reichtums Hoffnung zu setzen, sondern auf Gott, der uns alles reichlich darreicht zum Genuss.";
    headline_texte.innerHTML = "Börsenspiel";
    texte.innerHTML = "Das bekannte Planspiel Börse soll Interessierten helfen, die Börse verstehen zu lernen. Sie erhalten ein fiktives Kapital und können durch Aktienkäufe und -verkäufe versuchen, ihr Kapitel zu vervielfachen. Dabei muss man die wirtschaftliche Lage insgesamt und der einzelnen Unternehmen beobachten. Doch selbst wenn das Planspiel zu Tipps und Tricks im Börsengeschäft verhilft, bleiben Aktiengeschäfte immer auch ein Wetten auf die Zukunft. Die Zukunft ist aber ungewiss, und so wird jeder echte oder virtuelle Aktienhändler mit Verlusten leben müssen. Salomo, der herausragende König Israels, war in Finanzgeschäften sehr erfolgreich und ist noch heute ein guter Anlagenberater: „Wer allmählich Vermögen sammelt, vermehrt es“ (Sprüche 13,11). Das klingt allerdings nicht nach risikoreicher Geldanlage. Reich werden – das wollen viele. Aber wer sein Herz an den Mammon hängt, der ist verraten und verkauft. Reich sein in Bezug auf Gott – hierfür lohnt sich dein Einsatz. Er ist risikofrei und bringt höchste Rendite.";
}
if(marchday === 3){
    verse.innerHTML = "Zu den Taubenverkäufern sprach er: Nehmt dies weg von hier, macht nicht das Haus meines Vaters zu einem Kaufhaus";
    headline_texte.innerHTML = "Bethaus statt Kaufhaus";
    texte.innerHTML = "Jesus war empört über das, was er im Tempel vorfand. Er war so empört, dass er alle Handeltreibenden dort mitsamt ihren Utensilien aus dem Tempel trieb. Der Tempel war voller Kaufleute, die Besuchern Opfertiere verkauften. Das Problem war, dass nicht der Gottesdienst im Vordergrund stand, sondern die Geschäftemacherei – und das im Bethaus!? Heutzutage treffen wir an dem Ort, wo eigentlich Gottesdienst stattfinden sollte, leider auch oft Ähnliches an: Man verkauft vermeintlichen geistlichen Segen gegen Geld. Gerade da, wo Menschen das Heil für ihre Seele suchen, sind die Geschäftemacher nicht weit ... Jesus Christus hingegen bietet das ewige Heil kostenfrei denen an, die reumütig mit ihrer Schuld zu ihm kommen. Ihnen vergibt er, weil er selbst dafür bezahlt hat – durch seinen Tod.";
}
if(marchday === 4){
    verse.innerHTML = "Denn ein Kind ist uns geboren, ein Sohn uns gegeben, und die Herrschaft ruht auf seiner Schulter. Und man nennt seinen Namen: Wunderbarer ...";
    headline_texte.innerHTML = "Jesus heißt auch: Wunderbarer";
    texte.innerHTML = "Schon im Alten Testament (geschrieben ca. 1.500 bis 400 v. Chr.) wird die Geburt Jesu angekündigt. Allerdings wird dabei sein Name „Jesus“ noch nicht verraten. Es wird mit anderen Bezeichnungen bzw. Titeln von ihm gesprochen, wie der Tagesvers zeigt. Einer seiner Namen lautet „Wunderbarer“. Zwei Dinge haben sich im Blick auf diesen – erstmal ungewöhnlich klingenden – Namen Jesu bestätigt: 1. Er hat viele Wunder, viel Wunderbares, d.h. Übernatürliches getan, indem er z.B. Blinde sehend machte, unheilbar kranke Menschen gesund machte oder sogar Tote zum Leben erweckte. 2. Die Menschen haben sich über ihn gewundert – und tun es bis heute! „Niemals hat ein Mensch so geredet wie dieser Mensch“ (Johannes 7,46), mussten damals sogar seine Feinde bewundernd anerkennen.";
}
if(marchday === 5){
    verse.innerHTML = "Wo warst du, als ich die Erde gründete?";
    headline_texte.innerHTML = "Gott – und du?";
    texte.innerHTML = "Die Frage in unserem Tagesvers stellt Gott dem Patriarchen Hiob und stellt damit seine eigene Allmacht und Überlegenheit heraus. Auf der einen Seite der Schöpfer aller Dinge – auf der anderen Seite der Mensch, Gottes einzigartiges Geschöpf. Auf die Frage: “Wo warst du, als ich die Erde gründete?”, wurde Hiob still. Er dachte nach und kam zu dem Ergebnis: “Ich weiß, dass du alles vermagst und kein Vorhaben dir verwehrt werden kann.” Er musste eingestehen, dass er Dinge beurteilt hatte, die er nicht verstand. Deshalb wurde er ganz klein in seinen Augen und sagte schließlich: “Darum verabscheue ich mich und bereue in Staub und Asche” (Hiob 42,2.6). Gott – und du. Diskutierst du noch über die Existenz Gottes? Oder klagst du ihn, wenn er denn existiert? Merkst du nicht, dass er sich in seiner Größe gezeigt hat – nicht nur allmächtig in der Schöpfung, sondern auch voller Liebe in seinem Sohn Jesus Christus?";
}
if(marchday === 6){
    verse.innerHTML = "Dann schreien sie zu dem Herrn in ihrer Bedrängnis, und aus ihren Drangsalen rettet er sie.";
    headline_texte.innerHTML = "Beten. #howto";
    texte.innerHTML = "„Vater unser im Himmel …“ Schon einmal gehört oder vielleicht auch schon einmal mitgesprochen? Als Jesus von seinen Nachfolgern gefragt wurde, wie sie beten sollten, nannte er ihnen ein Beispiel: das sogenannte „Vaterunser“ (Matthäus 6,9-13). Aber lies nochmal den Bibelvers auf der Vorderseite: Da schreit jemand in einer lebensbedrohlichen Situation zu Gott – und verwendet wohl kaum einen auswendig gelernten Gebetstext ... <br>So fällt die Anleitung zum Beten sehr kurz aus, denn Gott freut sich, wenn du ihm einfach genau das sagst, was dir gerade zu schaffen macht – mit deinen eigenen Worten. In der Bibel beten Menschen <br>leise oder laut, <br>draußen oder drinnen, <br>allein oder gemeinsam, <br>im Stehen, im Sitzen, auf den Knien, <br>und zu jeder Tageszeit. <br>Fang einfach an, mit Gott zu reden!";
}
if(marchday === 7){
    verse.innerHTML = "Denn wer ist unsere Hoffnung oder Freude oder Krone des Ruhmes? Nicht auch ihr vor unserem Herrn Jesus bei seiner Ankunft?";
    headline_texte.innerHTML = "Ein herrliches Wiedersehen";
    texte.innerHTML = "Manche trifft es wirklich hart. Eine gläubige Familie verlor drei Söhne: Einer starb mit 10 Jahren bei einem Autounfall und zwei weitere im Alter von 34 und 46 Jahren an einem Herzinfarkt. “Plötzlich und unerwartet”, aber die Familie war unendlich getröstet: Sie würden sich im Himmel wiedersehen. Ähnlich erging es mir, nachdem meine gläubige Mutter abgerufen wurde. In einem Gespräch mit unserer Nachbarin stellte sich heraus, dass sie unsere Gewissheit förmlich beneidete – wir würden unsere Mutter im Himmel wiedersehen. So ist es: Gläubige Christen sehen sich nie zum letzten Mal. Nachdem der Apostel Paulus für eine kurze Zeit in Thessaloniki das Evangelium gepredigt hatte, versuchte er zweimal, die Gläubigen dort zu besuchen. Doch leider war es ihm nicht vergönnt. War er nun enttäuscht und verärgert? Nein. Wenn Jesus Christus vom Himmel zurückkehrt, würde er sie wiedersehen und dann voller Freude sein.";
}
if(marchday === 8){
    verse.innerHTML = "Wie das Geknister der Dornen unter dem Topf, so ist das Lachen des Toren";
    headline_texte.innerHTML = "Hoch die Hände, Wochenende!";
    texte.innerHTML = "Das wird man doch wohl noch dürfen: Nach einer Woche voller Arbeit und Verpflichtungen das Wochenende zum Feiern nutzen. Ich brauche das zum Abschalten, ich muss es einfach mal krachen lassen, sei es auf einer Geburtstagsparty, im Club oder sonst wo. „Ja“, sagt Salomo, der damalige König Israels, der besser als wir alle wusste, wie zünftiges Feiern geht, „kannst du machen. Aber denk dran: Das Lachen des Narren ist wie das Geknister der Dornen im Feuer“. Es knackt und knistert, es prasselt und spritzt, ein kurzes Aufflammen und Lodern und schon ist alles verraucht. Und wir fragen uns zurecht: Was bleibt von so einer „Freude“ für die nächste Woche? Wir haben einen Schöpfer, der es gut mit uns meint. Er will uns echte Freude geben. Aber wir finden sie nicht ohne ihn! Außerdem hat er mehr zu bieten als Materielles und Vergnügen. In seinem Sohn Jesus Christus finden wir eine echte Herzensfreude und ewiges Glück. Das muss man erlebt haben …";
}
if(marchday === 9){
    verse.innerHTML = "Der Geist des Herrn ist auf mir, weil er mich gesalbt hat, Armen gute Botschaft zu verkündigen; er hat mich gesandt, Gefangenen Befreiung auszurufen … Zerschlagene in Freiheit hinzusenden.";
    headline_texte.innerHTML = "„F“ wie Freiheit";
    texte.innerHTML = "Am 15. Oktober 1950 soll zum ersten Mal die Volkskammer, das Parlament der damaligen DDR, gewählt werden. Es ist eine Scheinwahl, denn die Mandate sind schon vorher auf die Parteien verteilt worden. Das löst Protest aus: Eine Handvoll Studenten schneidet „F“- Buchstaben aus und verteilt sie auf der Straße. „F“ wie Freiheit. Doch der Protest wird erstickt, die Studenten verhaftet und verurteilt, ihr Anführer hingerichtet. Freiheit – danach sehen wir uns alle. Und wenn wir sie besitzen, wollen wir sie unter keinen Umständen wieder abgeben. Aber sind wir Menschen wirklich frei? Leiden wir nicht unter der Macht der Sünde? Wir tun nicht das Gute, was wir wollen, sondern das Böse. Warum? Weil in uns „nichts Gutes“, sondern die Sünde wohnt (Römer 7,15-20). Jesus Christus ist gekommen, um „Zerschlagene in Freiheit“ zu führen. Dafür musste er sterben und auferstehen. In ihm können wir wirklich frei sein.";
}
if(marchday === 10){
    verse.innerHTML = "Wie oft habe ich deine Kinder versammeln wollen, wie eine Henne ihre Küken versammelt unter ihre Flügel, und ihr habt nicht gewollt!";
    headline_texte.innerHTML = "Gerade & heraus";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Video.";
}
if(marchday === 21){
    verse.innerHTML = "Ist mein Wort nicht so – wie Feuer, spricht der HERR, und wie ein Hammer, der Felsen zerschmettert? ";
    headline_texte.innerHTML = "Er rauchte die Bibel";
    texte.innerHTML = "Als Kind hat Wilhelm Buntz nur einen Traum: Er will Gangster werden. Als Säugling wird er von seiner Mutter verstoßen. Seine Kindheit verbringt er in unzähligen Pflegefamilien und Kinderheimen. Was sich in seiner Kindheit abzeichnet, setzt sich in seinem Leben als Teenager und Erwachsener fort. Insgesamt 148 Straftaten stehen zu Buche, vom Kleindelikt, über einen Bankraub, bis hin zum Mord – schließlich landet er im Gefängnis. 14 Jahre mit anschließender Sicherheitsverwahrung sitzt er ein. Ein Mithäftling hatte Zündhölzer und Tabak in die Zelle geschmuggelt. Vom Pfarrer bekommt Wilhelm schließlich eine Bibel, die er über 6 Jahre Seite für Seite liest, herausreißt und anschließend raucht. Bei der Bergpredigt angekommen, beginnt Wilhelm zum lebendigen Gott zu beten, der ihn zu verändern beginnt. Nach einiger Zeit stößt er auf 1. Johannes 1,9. Wilhelm bekennt Gott seine Sünden und regelt nach seiner Freilassung auch alle Delikte mit denen, die er durch seine Verbrechen geschädigt hat.";
}
if(marchday === 12){
    verse.innerHTML = "Was sucht ihr?";
    headline_texte.innerHTML = "Was sucht ihr?";
    texte.innerHTML = "Johannes steht mit vielen anderen am Jordan, als er in der Ferne Jesus umhergehen sieht. „Siehe, das Lamm Gottes!“, sagt er und ist dabei ganz auf Jesus fixiert. Neben ihm stehen zwei von seinen Jüngern. Sie werden neugierig und schauen genauer hin. „Das Lamm Gottes? – Diese Person müssen wir unbedingt kennenlernen!“ Sie machen sich auf den Weg und folgen Jesus. Dieser dreht sich um und fragt sie: „Was sucht ihr?“ „Wo hältst du dich auf?“ antworten sie. Jesus lädt sie ein: „Kommt und seht!“ Das lassen sich die beiden nicht zweimal sagen und bleiben an diesem Tag bei ihm. Jesus hat sie so beeindruckt, dass sie ab jetzt mit ihm durchs Land ziehen und an seiner Seite bleiben. Hier beginnt eine Beziehung, die ein ganzes Leben lang hält. Und nicht nur das. Es ist eine Beziehung, die sie ausfüllt und bis an ihr Lebensende glücklich macht. Bei Jesus haben sie gefunden, was sie gesucht haben.";
}
if(marchday === 13){
    verse.innerHTML = "Wir bitten an Christi statt: Lasst euch versöhnen mit Gott!";
    headline_texte.innerHTML = "Anschieber";
    texte.innerHTML = "Die Spikes graben sich ins Eis, die kraftvollen Schritte donnern durch die Bahn. Der schwere Bob beschleunigt – und dann verschwinden sie einer nach dem anderen im Bob: die Anschieber. Mit einem letzten Anschwung und gekonntem Sprung “verstecken” sie sich hinter dem Piloten, der ab jetzt die Führung übernimmt. Dieser hält den Bob auf Spur und lenkt ihn ins Ziel. Die Anschieber spielen zwar eine entscheidende Rolle, doch letztlich ist es der Pilot, der am Ende den Sieg einfährt oder eine Niederlage einstecken muss. Mit diesem Kalender dürfen wir deine Anschieber sein. Wir versuchen, dir den nötigen Schwung zu geben, damit der Glaube in deinem Leben Fahrt aufnimmt und du das himmlische Ziel erreichst. Aber für den Ausgang deines „Rennens“ bist du selbst verantwortlich. Wir bitten für Christus: Lass dich versöhnen mit Gott!";
}
if(marchday === 14){
    verse.innerHTML = "Gott sei Dank für seine unaussprechliche Gabe!";
    headline_texte.innerHTML = "Undank ist der Welten Lohn";
    texte.innerHTML = "Ein aufrichtiges und herzliches Dankeschön sollte im Alltag eine Selbstverständlichkeit sein. Es macht das Leben einfacher und schöner. Als Eltern versuchen wir unseren Kindern beizubringen, wie wichtig ehrliche Dankbarkeit ist, und doch merken wir bei uns selbst, wie undankbar wir häufig sind – in der Familie, am Arbeitsplatz oder beim Einkaufen. Kürzlich wurde mir noch einmal bewusst, wie selten ich Gott, dem Schöpfer, für das viele Gute in meinem Leben danke. Er lässt die Sonne über mir scheinen und den Regen herabfallen. Er hat die Erde so geschaffen, dass sie grundsätzlich jeden Menschen ernähren kann (auch wenn die Gier des Menschen zu großer Ungerechtigkeit geführt hat). Er gibt mir Gesundheit, kümmert sich um mich. Er führt mich durch Notzeiten. Er hat mir die Bibel, sein Wort, gegeben, um mir seine Gedanken mitzuteilen. Und die größte Gabe ist sein Sohn, Jesus Christus – mein Retter und Herr. Ich danke ihm so sehr. Hast du ihm heute schon gedankt?";
}
if(marchday === 15){
    verse.innerHTML = "Wie ein Schatten sind unsere Tage auf der Erde, und es gibt keine Hoffnung, hier zu bleiben";
    headline_texte.innerHTML = "Nicht für immer";
    texte.innerHTML = "“Wie schnell die Zeit vergeht”, denken wir oft, wenn wir mal für einen Moment zur Ruhe kommen und uns an zurückliegende Erlebnisse erinnern. Im Rückblick kommt einem die Zeit viel kürzer vor, als wenn sie vor uns steht, obwohl die Zeit objektiv gesehen immer gleich schnell vergeht. Im heutigen Bibelvers vergleicht der König David die Lebenszeit mit einem Schatten. Ein Schatten ist einerseits schnell verschwunden und andererseits bleibt nichts von ihm übrig. David macht in seinem ernüchternden Statement jedoch eine Einschränkung, die Hoffnung gibt: Er spricht von unseren Tagen auf der Erde. Er war sich also bewusst, dass es mehr gibt als das Leben auf der Erde. Und im Vergleich zum Leben nach dem Tod ist das Leben auf der Erde tatsächlich wie ein Schatten. Umso wichtiger, dass wir mit Blick auf die Ewigkeit leben – und nicht so, als wären wir unsterblich.";
}
if(marchday === 16){
    verse.innerHTML = "Ist mein Wort nicht so – wie Feuer, spricht der HERR, und wie ein Hammer, der Felsen zerschmettert?";
    headline_texte.innerHTML = "Lesen & staunen";
    texte.innerHTML = "An dieser Stelle ist eigentlich eine Buchempfehlung.";
}
if(marchday === 17){
    verse.innerHTML = "Gott hat seinen Sohn nicht in die Welt gesandt, damit er die Welt richte, sondern damit die Welt durch ihn errettet werde.";
    headline_texte.innerHTML = "Gericht oder Gnade?";
    texte.innerHTML = "Als Gott den Menschen schuf, setzte er ihn in einen wunderschönen Garten. Besser konnte der Mensch es nicht haben. Doch es dauerte nicht lange, da wurde der Mensch ungehorsam. Gott hatte ihm nur ein Gebot gegeben – und das übertrat er. So fing das Elend der Menschheitsgeschichte an, und es ging gleich weiter: In der zweiten Generation ermordete jemand seinen Bruder. Schließlich lautete das Urteil Gottes: Die Erde ist verdorben und voll Gewalttat. Doch Gott ließ nichts unversucht, um den Menschen zur Umkehr zu bewegen. Es änderte sich allerdings fast nichts. Schließlich sandte Gott seinen eigenen Sohn, Jesus Christus, auf die Erde. Wir hätten erwartet, dass er die Menschheit richten würde. Das Gegenteil trat ein: Er kam, um sie zu retten. Unfassbar, diese Gnade! Gott lässt seinen Sohn das Strafgericht für verlorene Menschen erdulden, um Menschen freizusprechen und sie in seine Nähe zu bringen. <br>Gott sei Dank für seine unaussprechliche Gabe!";
}
if(marchday === 18){
    verse.innerHTML = "Wenn jemand nicht von neuem geboren wird, kann er das Reich Gottes nicht sehen.";
    headline_texte.innerHTML = "Happy Birthday";
    texte.innerHTML = "Die Geburt eines Babys ist ein besonderes Ereignis: Ein Mensch erblickt das Licht der Welt. Das ganze Leben liegt noch vor ihm – herrlich! Andererseits: Beginnt mit dem Tag der Geburt nicht zugleich ein Countdown? Die Lebensjahre eines Menschen sind ja begrenzt. Mit jedem Tag kommen wir unserem Ende hier auf der Erde ein Stück näher. Und dann? Bei diesen Gedanken könnte einem die feierliche Stimmung vergehen. Doch es gibt die Chance einer “zweiten” Geburt: „Ihr müsst von neuem geboren werden“, sagt Jesus Christus und erklärt in diesem Zusammenhang, dass jeder, der an ihn glaubt, nicht verloren geht, sondern ewiges Leben bekommt (Johannes 3,16). So ein Geburtstag ist ein echter Grund zur Freude! Für den Glaubenden beginnt damit ein Leben mit Gott, das über den Tod hinausgeht. Sozusagen ein Leben ohne Countdown.";
}
if(marchday === 19){
    verse.innerHTML = "Und man nennt seinen Namen: … Friedefürst.";
    headline_texte.innerHTML = "Endlich Frieden auf Erden";
    texte.innerHTML = "Jesus Christus kommt bald zum zweiten Mal auf die Erde. Dann wird Er als Friedefürst jeden Streit, jeden Krieg und jeden Konflikt beenden. Das wird wunderbar sein. 1000 Jahre lang wird diese Erde nur Frieden und Gerechtigkeit erleben. In Jesaja 2,4 lesen wir über diese Zeit: „Und er wird richten zwischen den Nationen und Recht sprechen vielen Völkern. Und sie werden ihre Schwerter zu Pflugscharen schmieden und ihre Speere zu Winzermessern; nicht wird Nation gegen Nation das Schwert erheben, und sie werden den Krieg nicht mehr lernen.“ Als Jesus Christus vor ca. 2000 Jahren auf die Erde kam, hat Er die Grundlage für diesen zukünftigen Weltfrieden gelegt. Die Bibel sagt, dass Er „Frieden gemacht hat“, indem Er am Kreuz starb (vgl. Kolosser 1,20). Dieser Friede steht schon heute jedem Glaubenden zur Verfügung. Dabei geht es nicht zuerst um zwischenmenschliche Beziehungen, sondern um unsere Beziehung zu Gott. Wenn Jesus unser Friedefürst ist, kehrt Ruhe ins Herz ein.";
}
if(marchday === 20){
    verse.innerHTML = "Ich aber sage euch: Liebt eure Feinde und betet für die, die euch verfolgen";
    headline_texte.innerHTML = "Von Pearl Harbor nach Golgatha – Teil 1";
    texte.innerHTML = "Mitsuo Fuchida war der leitende Pilot, der 1941 den Angriff auf Pearl Harbor führte. Obwohl dieser grausame Tag des Krieges ein voller Erfolg für die japanische Seite bedeutete, wurde Japan letztendlich zum Verlierer des Zweiten Weltkrieges. Voller Hass gegenüber der amerikanischen Siegermacht, machte Fuchida es sich nach Kriegsende zur Lebensaufgabe, die Amerikaner für ihre Kriegsverbrechen zur Rechenschaft zu ziehen. Dazu suchte er japanische Rückkehrer aus einem amerikanischen Kriegsgefangenenlager auf und interviewte sie. Entgegen seinen verbitterten Hoffnungen, berichteten ihm diese Männer jedoch nicht von Folter, sondern von einer Christin, die die Gefangenen häufig besuchte, sie pflegte und ihnen aus einem „christlichen Buch“ vorlas. Völlig überrascht fragte er weiter und erfuhr, dass die Eltern dieser Christin als Missionare auf den Philippinen von japanischen Soldaten hingerichtet worden waren. Kurz vor ihrem Tod hatten diese Missionare jedoch für alle hörbar ein Gebet gesprochen …";
}
if(marchday === 21){
    verse.innerHTML = "Als sie an den Ort kamen, der Schädelstätte genannt wird, kreuzigten sie dort ihn und die Übeltäter.Jesus aber sprach: Vater, vergib ihnen, denn sie wissen nicht, was sie tun!";
    headline_texte.innerHTML = "Von Pearl Harbor nach Golgatha – Teil 2";
    texte.innerHTML = "Nach den überraschenden Berichten der japanischen Kriegsgefangenen ließ Mitsuo Fuchida der Gedanke an diese Christin und ihr Verhalten nicht mehr los. Völlig unverständlich war für ihn, warum sich jemand gegenüber seinen Feinden so verhalten sollte. Seine Neugier war geweckt. Er besorgte sich das erwähnte „christliche Buch“ – ein Neues Testament, las darin und versuchte es zu verstehen. Als er bei der Kreuzigung des Herrn Jesus Christus und dem heutigen Tagesvers ankam, traf es ihn wie ein Schlag. „Vater, vergib ihnen, denn sie wissen nicht, was sie tun!“ Das musste das Gebet sein, das auch die Eltern dieser Christin bei ihrer Hinrichtung gesprochen hatten! Überwältigt von der bedingungslosen Nächstenliebe dieser Menschen, die ihrem Vorbild, Jesus Christus, nachahmten, nahm er den christlichen Glauben an. Von da an, machte er es sich zur Lebensaufgabe, die Botschaft von Jesus Christus zu verbreiten. Hass und Rache wurden durch die Liebe am Kreuz weggewischt. Das Kreuz verändert Menschen!";
}
if(marchday === 22){
    verse.innerHTML = "Es ist in keinem anderen das Heil, denn es ist auch kein anderer Name unter dem Himmel, der unter den Menschen gegeben ist, in dem wir errettet werden müssen.";
    headline_texte.innerHTML = "Der Bestimmer";
    texte.innerHTML = "Kinder fragen beim Spielen oft: „Wer ist der Bestimmer?“ Das heißt: Wer legt die Regeln fest, wer sagt, wo’s langgeht? Gott bestimmt auch. Bestimmt den Zugang zum Himmel. Legt fest, dass er nur möglich ist über seinen Sohn Jesus Christus. An ihm allein entscheidet es sich, denn durch keinen anderen ist die Errettung möglich. Jesus unterstreicht das, wenn Er sagt: „Ich bin der Weg und die Wahrheit und das Leben. Niemand kommt zum Vater als nur durch mich“ (Johannes 14,6). Im Gegensatz zu menschlichen „Bestimmern“ ist Gott absolut gerecht und zugleich überaus gnädig. Er formuliert die Voraussetzung und Er zeigt den Weg. Er lädt aber auch dazu ein … wirbt … bittet. Er hat seinen geliebten Sohn gegeben, ihn gestraft und leiden lassen, damit andere die Voraussetzung erfüllen können. Einfach großartig – einmalig!";
}
if(marchday === 23){
    verse.innerHTML = "Du, Herr, hast im Anfang die Erde gegründet, und die Himmel sind Werke deiner Hände.";
    headline_texte.innerHTML = "Der Himmel";
    texte.innerHTML = "Bemerkenswert – die Bibel spricht an vielen Stellen von Himmel in der Mehrzahl. Sie unterscheidet folgendermaßen: <br>1. Die geschaffenen Himmel, von denen im Tagesvers gesprochen wird: <br>a. die Atmosphäre; also den Himmel, den wir tagsüber wahrnehmen. <br>b. das Sternenzelt; also den Himmel, den wir nachts bestaunen können. <br>c. den „dritten Himmel“, auch “Paradies” genannt (2. Korinther 12,2.4); hier befinden sich die Seelen der verstorbenen Gläubigen; hier können wir uns auch die Sphäre der Engelwelt vorstellen. <br>2. Den ungeschaffenen Himmel, das „Haus des Vaters“ (Johannes 14,2), der ewige Wohnort Gottes – zugleich das endgültige Ziel aller, die an Jesus Christus glauben.";
}
if(marchday === 24){
    verse.innerHTML = "Der Hohn hat mein Herz gebrochen, und ich bin ganz elend; und ich habe auf Mitleid gewartet, und da war keins, und auf Tröster, und ich habe keine gefunden.";
    headline_texte.innerHTML = "Mitleid? Fehlanzeige!";
    texte.innerHTML = "Nachdem Jesus das Abendmahl eingesetzt hatte, begannen für ihn die schwersten Stunden seines Lebens. Zuerst litt er im Gebet, das wie ein ringender Kampf für ihn war, weil er wusste, was vor ihm stand: die Schrecken des Kreuzes. Doch während er betete, schliefen seine Jünger – kein Mitempfinden! Dann wurde Jesus gefangen genommen und vor unterschiedlichen Gremien verhört. Völlig schuldlos wurde er zum Tod verurteilt. Der römische Statthalter Pilatus wollte den Fall loswerden und ließ ihn geißeln, um bei dem jüdischen Volk Mitleid zu erregen – vergeblich. Gegen 9 Uhr morgens wurde Jesus von römischen Soldaten brutal an ein Holzkreuz genagelt. Die körperlichen Schmerzen, die er als Gekreuzigter erlitt, sind unvorstellbar! Dazu kam der Spott der religiösen Führer und die Lästerung derer, die sich das Schauspiel im Vorbeigehen anschauten. – Mitleid? Fehlanzeige! Tröster? Nicht ein einziger! Berührt dich das Leiden, das Jesus aus Liebe erlitten hat?";
}
if(marchday === 25){
    verse.innerHTML = "Betrachte die Wunder Gottes!";
    headline_texte.innerHTML = "Erfindung – nicht Entdeckung";
    texte.innerHTML = "„Als junger Mann war ich praktizierender Atheist. Die Erforschung des Universums hat mir gezeigt, dass die Existenz von Materie ein Wunder ist, das sich nur übernatürlich erklären lässt.“ <br>(Allan Sandage, Astronom, Nobelpreis für Physik 1977) <br>„Der Evolution ist soeben der Todesstoß versetzt worden. Nachdem ich „Origins of Life“ (von Charles Darwin) gelesen habe, und zwar auf der Grundlage meines Werdegangs in der Chemie und Physik, ist klar, dass die Evolution nicht stattgefunden haben kann.“ <br>(Richard Smalley, Chemiker, Nobelpreis für Chemie 1996) <br>„Bei der Evolution haben wir es nicht mit einer Entdeckung, sondern mit einer Erfindung zu tun.“ <br>(Wilhelm Sahm, 1932-2002)";
}
if(marchday === 26){
    verse.innerHTML = "Kommt her zu mir, alle ihr Mühseligen und Beladenen, und ich werde euch Ruhe geben.";
    headline_texte.innerHTML = "Ruhe für dein Herz";
    texte.innerHTML = "Jesus möchte dich von deiner Last befreien. Er weiß, welche schweren “Rucksäcken” du vielleicht trägst: <br>ein schlechtes Gewissen, weil man sich für Dinge in der Vergangenheit schämt. <br>den dauernden Druck, gute Werke tun zu müssen. <br>die ständige Last, immer wieder zur Zigarette oder Flasche zu greifen, obwohl man nicht möchte. <br>die innere Unruhe, wegen der man nicht schlafen kann oder Albträume hat. <br>fehlende Freude, weil man von Sorgen und Ängsten beinahe erdrückt wird. <br>der Drang, sich dauerhaft vom Handy, Fernsehen oder Musik berieseln zu lassen, weil man Stille nicht (mehr) aushält. <br>das ununterbrochene Treiben im Privat- und Geschäftsleben ohne eine Verschnaufpause. <br>Sehnst du dich nach Befreiung und Ruhe? Jesus gibt sie jedem, der zu ihm kommt – das hat er versprochen und wir können es aus Erfahrung bestätigen.";
}
if(marchday === 27){
    verse.innerHTML = "Wie süß sind meinem Gaumen deine Worte, mehr als Honig meinem Mund!";
    headline_texte.innerHTML = "Kein Clickbait!";
    texte.innerHTML = "Ein gebräuchliches Mittel, um viele Aufrufe zu generieren, ist das Clickbaiting (Englisch bait, der Köder). Man scrollt durch YouTube und sieht fabelhafte Thumbnails mit reißerischen Überschriften. Eh man sich versieht hat man schon ein Video aufgerufen. Man stellt fest: Das, womit im Thumbnail gelockt wurde, findet sich so gar nicht im Video wieder. So etwas frustriert und raubt Zeit. Viel Schein aber ernüchternder Inhalt. Anders verhält es sich mit der Bibel. Aufwendige Werbung im Bücherladen? Selten. Ansprechend gestaltetes Cover? Geschmacksache. Der Bibelvers macht deutlich: Den unbeschreiblich schönen Geschmack der Bibel kann man erst dann erfahren, wenn man sie quasi in sich aufnimmt. Erst wenn man Gottes Worte liest und sie auf seiner Zunge zergehen lässt, kann man den wahren Wert erkennen. Der Inhalt ist so groß(artig), dass er sich gar nicht in einem „Thumbnail“ darstellen lässt. Die Bibel wirbt für sich selbst, denn es sind Gottes Worte - für dich und mich.";
}
if(marchday === 28){
    verse.innerHTML = "Was irgend er euch sagen mag, tut!";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Wasser wird zu Wein";
    texte.innerHTML = "Eine Hochzeitsfeier in Kana. Jesus ist mit seinen Jüngern dort eingeladen. Auch seine Mutter Maria ist anwesend. Während fröhlich gefeiert wird, gibt es plötzlich eine peinliche Panne: Der Wein ist ausgegangen. Der Gastgeber hat sich offensichtlich verkalkuliert. Wie ist die Situation zu retten? Maria teilt es Jesus mit. „Was irgend er euch sagen mag, tut!“, lautet nun die Anweisung von Maria an die Bediensteten. Sie weiß, dass ihr Sohn helfen kann. „Füllt die Wasserkrüge mit Wasser!“, lautet die Anweisung von Jesus. Mit Wasser? Doch die Bediensteten tun es. „Schöpft nun und bringt es dem Speisemeister!“ Gesagt – getan. Der Speisemeister probiert und kann es nicht glauben: Wein! Exzellenter Wein! Die Hochzeit ist gerettet. Es kann fröhlich weitergefeiert werden. Hier in Kana zeigt Jesus erstmals etwas von seiner übernatürlichen Macht und göttlichen Größe - und vergrößert die Freude.";
}
if(marchday === 29){
    verse.innerHTML = "Sein Kreuz tragend, ging er hinaus zu der Stätte, genannt Schädelstätte, die auf Hebräisch Golgatha heißt, wo sie ihn kreuzigten, und zwei andere mit ihm, auf dieser und auf jener Seite, Jesus aber in der Mitte.";
    headline_texte.innerHTML = "Drei Kreuze machen";
    texte.innerHTML = "Wir kennen alle die Redewendung “Drei Kreuze machen‘‘ und sie vielleicht auch schon gebraucht, wenn etwas Unangenehmes vorbei ist und wir erleichtert sind. <br>An der Schädelstätte Golgatha wurden vor 2000 Jahren buchstäblich drei Kreuze “gemacht”. An zwei dieser Kreuze wurden Räuber hingerichtet. Der Mann in der Mitte war auch als Übeltäter angeklagt worden, aber völlig zu Unrecht. Sein Verhalten während der qualvollen Hinrichtung bewies es. Als er beleidigt wurde, blieb er still. Er fluchte nicht, er drohte auch nicht. Stattdessen betete er für seine Feinde und kümmerte sich noch liebevoll um seine Mutter. Dann wurde es dunkel – niemand durfte zusehen, wie schrecklich Jesus litt. Er gab sich selbst als Lösegeld für alle Menschen und rief dann laut: “Es ist vollbracht.” Er hat uns eine ewige Erlösung erworben, die jeder für sich in Anspruch nehmen darf (Johannes 19,30; Hebräer 9,12).  <br>Danke Herr, dass du das Schwerste für mich erlitten hast";
}
if(marchday === 30){
    verse.innerHTML = "Wer seine Übertretungen verbirgt, wird kein Gelingen haben; wer sie aber bekennt und lässt, wird Barmherzigkeit erlangen";
    headline_texte.innerHTML = "Eine zweite Chance";
    texte.innerHTML = "Die Bibel ist die Wahrheit. Sie teilt uns die Dinge so mit, wie sie sind, und beschönigt nichts. So berichtet sie in der Apostelgeschichte von einer deutlichen Meinungsverschiedenheit zwischen den Missionaren Paulus und Barnabas. Es ging um Markus, Barnabas’ Neffen, den sie zwar mitgenommen, der aber nicht lange durchgehalten und sich von den anderen getrennt hatte. Deshalb wollte Paulus ihn nicht noch einmal mitnehmen, Barnabas dagegen doch. Weil sie sich nicht einigen konnten, entstand eine Verbitterung: die beiden Missionare trennten sich. Echt traurig! Barnabas ging seinen Weg mit Markus, und Paulus wählte sich einen neuen Begleiter. Doch jetzt kommt das Schöne: Im Laufe der Jahre fand Markus den Weg zu Paulus und wurde ihm ein nützlicher Diener. Gott gab ihm eine zweite Chance. Und die Krönung von allem: Markus wird beauftragt, ein Evangelium über Jesus Christus, den perfekten Diener, zu schreiben. Wenn das kein Comeback war! Brauchst du auch eine zweite Chance? Gott will sie dir geben!";
}
if(marchday === 31){
    verse.innerHTML = "Sooft ihr dieses Brot esst und den Kelch trinkt, verkündigt ihr den Tod des Herrn.";
    headline_texte.innerHTML = "Tut dies zu meinem Gedächtnis!";
    texte.innerHTML = "Viele Christen treffen sich jeden Sonntag zum Gottesdienst, um das Abendmahl zu feiern, dass Jesus Christus kurz vor seinem Tod eingesetzt hat. Warum machen sie das? Ist das so wichtig? Dahinter verbirgt sich das Vermächtnis Jesu: “Dies tut zu meinem Gedächtnis”, hat er gesagt. Wer Jesus als seinen Erlöser und Herrn kennt und liebt, wird keine Gelegenheit auslassen, um diesem Wunsch nachzukommen. Einfach aus Dankbarkeit. Jedes Mal werden die Gläubigen daran erinnert, was Jesus für sie erleiden musste, damit ihnen ihre Sünden vergeben werden konnten. Jesus hat das gerechte Strafgericht Gottes stellvertretend für sie erduldet. Jeder, der am Abendmahl teilnimmt, isst vom Brot und trinkt aus dem Kelch und denkt andächtig an den Tod Jesu. Doch ebendiese schlichte Handlung wird zu einer Verkündigung - für die Engel und für alle Menschen, die nicht daran teilhaben. Jeder soll es zur Kenntnis nehmen: Jesus Christus starb, um Menschen ewiges Leben zu geben. - Danke Herr!";
}

// April
if(month === 4){
    janauryday = false;
    februaryday = false;
    marchday = false;
    aprilday = true;
    mayday = false;
    juneday = false;
    julyday = false;
    augustday = false;
    septemberday = false;
    octoberday = false;
    novemberday = false;
    decemberday = false;

    aprilday = marchday+day;

    console.log(aprilday);
}
if(aprilday === 1){
    verse.innerHTML = "Ich bin die Auferstehung und das Leben; wer an mich glaubt, wird leben, auch wenn er stirbt.";
    headline_texte.innerHTML = "Der springende Punkt";
    texte.innerHTML = "Der griechische Philosoph Aristoteles entdeckte bei befruchteten Hühnereiern einen kleinen pulsierenden roten Fleck im Inneren – das erste Lebenszeichen des Embryos – und spricht vom „punctum saliens“. Daraus bildete sich die Redewendung „der springende Punkt”. Er zeigt das Entscheidende an: Sein oder Nichtsein, Leben oder Tod, Licht oder Dunkelheit, Himmel oder Hölle … – das entscheidet sich einzig und allein daran, ob wir glauben, dass Jesus Christus leiblich auferstanden ist. Er, der das Leben ist, hat auch die Macht, uns Menschen Leben zu geben. Doch der springende Punkt ist, an ihn als den Lebenden zu glauben, nur dann bekommen wir dieses ewige Leben und damit die Garantie: „Wer an mich glaubt, wird leben, auch wenn er stirbt”. <br>„Wähle das Leben, damit du lebst ” <br>5. Mose 30,19";
}
if(aprilday === 2){
    verse.innerHTML = "Das Unsichtbare von Gott wird geschaut.";
    headline_texte.innerHTML = "Unsichtbar?";
    texte.innerHTML = "Es ist noch keiner zurückgekommen. Mir hat Gott sich noch nie vorgestellt. Ich glaube nur an das, was ich sehe. Also gibt’s Gott nicht. Genau hier knüpft Gott an: „Stimmt, ich bin unsichtbar; aber ich habe mich in der Schöpfung sichtbar gemacht“. Wenn du also nur an das glaubst, was du siehst, dann schaue bitte mal genauer hin: Die Komplexität der Natur kann unmöglich ohne göttliche Intelligenz entstanden sein. Wenn du an der Küste mit dem Fahrrad gegen den Wind fährst, dann kannst du den Wind auch nicht sehen – aber du bekommst ihn deutlich zu spüren. Es wäre Unsinn zu behaupten, den Wind gebe es nicht. Es ist genauso Unsinn, die Natur in ihrer ganzen Perfektion zu sehen, um dann fest und steif zu behaupten, es gebe keinen Schöpfer. Der unsichtbare Gott hat sich sichtbar gemacht – für jeden von uns. <br>„Wie groß sind deine Werke, Herr! Sehr tief sind deine Gedanken“ <br>Psalm 92,6";
}
if(aprilday === 3){
    verse.innerHTML = "Die Summe deines Wortes ist Wahrheit.";
    headline_texte.innerHTML = "Wenn Autoren flunkern";
    texte.innerHTML = "Im Dezember 2019 erschütterte der Betrugsskandal um den SPIEGEL-Reporter Claas Relotius den deutschen Journalismus. Relotius galt bis dato als junger Starreporter. Für seine außergewöhnlichen Reportagen erhielt er renommierte Journalistenpreise. Bis zu diesem 19. Dezember, als die Bombe platzte: Plötzlich wurde publik, dass viele seiner Geschichten frei erfunden waren. Fakten entpuppten sich als Fälschung. Die Glaubwürdigkeit des gesamten Journalismus wurde plötzlich infrage gestellt. Besonders ironisch: Bei einer Veranstaltung mit Nachwuchsjournalisten hatte Relotius einmal gesagt, er erwarte von seinen Lesern, dass sie ihm vertrauen. Dieses Vertrauen hat er bitter enttäuscht. Anders Gott. Sein Wort, die Bibel, ist glaubwürdig. Selbst Kritiker müssen eingestehen, dass historische Personen und Ereignisse präzise beschrieben werden. Ich vertraue der Bibel aber besonders deshalb, weil ihr Autor absolut vertrauenswürdig ist: Gott selbst.";
}
if(aprilday === 4){
    verse.innerHTML = "Wo ist, o Tod, dein Sieg?";
    headline_texte.innerHTML = "Wo ist, o Tod, dein Sieg?";
    texte.innerHTML = "Die durchschnittliche Lebenserwartung bei der Geburt in Deutschland belief sich 2020 für Männer auf 78,5 und für Frauen auf 83,4 Jahre. Damit hat sich die Lebenserwartung seit dem 19. Jahrhundert rasant entwickelt und sich gegenüber den 1870er Jahren mehr als verdoppelt. Und was wird heute nicht alles beworben und konsumiert, um so alt wie möglich zu werden! Nur der Tod konnte bisher von keinem bezwungen werden. Oder doch? Jesus Christus ist vor 2000 Jahren als Mensch auf die Erde gekommen. Im Alter von ca. 33 Jahren starb er und wurde begraben. Aber drei Tage nach seinem Tod hat er etwas gemacht, was nur er als der Sohn Gottes konnte. Er hat sein Leben wieder genommen, das heißt, er ist aus den Toten auferstanden. Er hat den Tod besiegt! Denselben Sieg über den Tod schenkt Gott allen, die an seinen Sohn glauben. „Gott aber sei Dank, der uns den Sieg gibt durch unseren Herrn Jesus Christus!” (1. Korinther 15,57).";
}
if(aprilday === 5){
    verse.innerHTML = "Er hat alles wohlgemacht.";
    headline_texte.innerHTML = "Lied & lebendig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Lied.";
}
if(aprilday === 6){
    verse.innerHTML = "Ich will dir einen Verband anlegen und dich von deinen Schlägen heilen, ";
    headline_texte.innerHTML = "All you need is grace";
    texte.innerHTML = "Schon erlebt? Brutal schlägt das Schicksal zu, plötzlich stehst du vor den Trümmern deines Lebens. In dir tobt ein Gefühlschaos, jeder Gedanke ist eine Folter, jeder Atemzug ein Stöhnen. Du glaubst, unter der Last zu ersticken. Bleibt das immer so: Schmerz, immer nur Schmerz? Erstaunlich: Die Bibel berichtet auch von Menschen, die so etwas erlebt haben: David wurde das Opfer einer Intrige, Jeremia verfluchte den Tag seiner Geburt, Mose war ausgebrannt. Schließlich Hiob: Erst verlor er seinen ganzen Besitz, dann alle Kinder, dann wurde er sterbenskrank. Wie sind sie mit ihrem Schicksal fertiggeworden? Sie wandten sich an die richtige Adresse – an Gott. Noch erstaunlicher: Genau solche Leute benutzte Gott, um sein Buch, die Bibel aufzuschreiben – seine hoffnungsfrohe Botschaft für verzweifelte Menschen. Und noch immer heilt er, „die zerbrochenen Herzens sind, und verbindet ihre Wunden“ (Psalm 147,3). Mach dich auf zu ihm!";
}
if(aprilday === 7){
    verse.innerHTML = "Staunen ergriff alle, und sie verherrlichten Gott und wurden mit Furcht erfüllt und sagten: Wir haben heute außerordentliche Dinge gesehen.";
    headline_texte.innerHTML = "Wer ist denn dieser … Jesus? (1)";
    texte.innerHTML = "Wer ist denn dieser …“ fragten sich vor 2000 Jahren die Jünger mit Blick auf ihren Lehrer Jesus Christus. Er hatte sie gerade in ihrem Schiff vor einem heftigen, lebensbedrohlichen Sturm gerettet, und das verursachte natürlich großes Staunen (Markus 4,35-41). Ich möchte uns gemeinsam zum Staunen über diesen Jesus bringen. Es wird manches über ihn gesagt und geschrieben. An den folgenden Sonntagen werden wir sehen, was die Bibel über diesen Jesus berichtet – das ist eine ganze Menge. Und die Tatsachen werden sicherlich eine Wirkung auf uns haben. Genau das ist ja Gottes Ziel mit uns, wenn er uns in der Bibel seinen Sohn Jesus Christus vorstellt: Er möchte, dass dieses ungläubige Staunen über ihn in eine glaubende Beziehung mit ihm übergeht. Viele Menschen, nicht nur seine Jünger, haben diese Erfahrung gemacht. Vielleicht machst du sie auch, wenn du dich fragst: „Wer ist denn dieser …?“";
}
if(aprilday === 8){
    verse.innerHTML = "Vergib uns unsere Schuld, wie auch wir unseren Schuldigern vergeben.";
    headline_texte.innerHTML = "Wir vergeben?!";
    texte.innerHTML = "Für 2020 hat das statistische Bundesamt ermittelt, dass in Deutschland täglich 2.790 Menschen gestorben sind. Im Schnitt haben wir also täglich ähnlich viele Beisetzungen. Wenn nur jede zweite Beisetzung kirchlich wäre und durchschnittlich 20 Trauergäste anwesend wären, dann würden täglich knapp 30.000 Menschen in Deutschland das „Vaterunser“ mitsprechen und sagen: „Vergib uns unsere Schuld, wie auch wir vergeben unseren Schuldigern.“ Ist diese Bitte wirklich ernst gemeint? Wollen wir, dass Gott uns vergibt? Und sind wir vergebungsbereit? Liegt uns am Frieden mit Gott, dem Nachbarn, dem Ehepartner, oder dem Arbeitskollegen? Wenn Gott uns wirklich so vergeben würde, wie wir oft unseren Schuldigern vergeben, dann gnade uns Gott! <br>„Doch Gott ist zum Vergeben bereit und groß an Güte, wenn wir Ihn aufrichtig anrufen.” <br>Psalm 86,5";
}
if(aprilday === 9){
    verse.innerHTML = "Ihrer Sünden und ihrer Gesetzlosigkeiten werde ich nie mehr gedenken.";
    headline_texte.innerHTML = "Gott vergibt für immer";
    texte.innerHTML = "Wenn ich Gott meine Sünden bekenne, vergibt er mir und wird nie wieder darauf zurückkommen. Damit ich seine Vergebung besser verstehe, gebraucht die Bibel verschiedene Bilder: König Hiskia wusste und bekannte: „Alle meine Sünden hast du hinter deinen Rücken geworfen“ (Jesaja 38,17). – Der Prophet Micha betete zu Gott: „Du wirst alle ihre Sünden in die Tiefen des Meeres werfen“ (Micha 7,19). – König David dichtete in einem Psalm: „So weit der Osten ist vom Westen, hat er von uns entfernt unsere Übertretungen“ (Psalm 103,12). – Und der Prophet Jeremia verkündete die Zusicherung Gottes: „Ich werde ihre Schuld vergeben und ihrer Sünde nicht mehr gedenken“ (Jeremia 31,34). Wer seine Sünden Gott bekennt, kann mit David sagen: „Glückselig der, dessen Übertretung vergeben, dessen Sünde zugedeckt ist!“ (Psalm 32,1).";
}
if(aprilday === 10){
    verse.innerHTML = "… sammelt euch aber Schätze im Himmel, wo weder Motte noch Rost zerstören und wo Diebe nicht einbrechen und nicht stehlen.";
    headline_texte.innerHTML = "Ohne Moos nix los?";
    texte.innerHTML = "„Spare in der Zeit, dann hast du in der Not“ sagt ein Sprichwort. Wer also in guten Zeiten vorsorgt, profitiert davon in schlechten Zeiten. Darin sind wir Deutschen Weltmeister: zur Vorsorge Geld auf die hohe Kante legen. Doch die steigende Inflation macht die Sache nicht einfach. Und politische Unruhen und Auseinandersetzungen sowie extreme Wetterereignisse versprechen keine Sicherheit … Unser heutiger Bibelvers deutet in die gleiche Richtung: Alles auf dieser Erde ist vergänglich. Das wird niemand bestreiten. Deshalb werden wir aufgefordert, Werte zu schaffen, die keinen Schwankungen unterliegen. Es sind Werte, die im Himmel aufbewahrt sind. Werte, die sicher und unvergänglich sind. Einer davon wird so beschrieben: „Freut euch vielmehr, dass eure Namen in den Himmeln angeschrieben sind” (Lukas 10,20). Das gilt für alle, die ihre Identität in Jesus Christus gefunden haben. Gehörst du dazu?";
}
if(aprilday === 11){
    verse.innerHTML = "Mein Mund soll Weisheit reden.";
    headline_texte.innerHTML = "10.000 Wörter pro Tag";
    texte.innerHTML = "Meine Kinder (6 und 3 Jahre alt) unterhalten sich über den Mund. Leni: „Ich kann sprechen, weil ich hab einen Mund. Den hat Gott so gemacht und der ist mit Kleber festgemacht.“ Emil: „Nee Leni, nicht mit Kleber. Der wurde da so reingebaut.“ Ich muss schmunzeln, während ich dieses Gespräch mithöre. Über so etwas machen sich wohl nur Kinder Gedanken. Aber ist es nicht viel wichtiger, was aus dem Mund herauskommt? Über 10.000 Wörter spricht der Mensch durchschnittlich pro Tag und nicht alle sind gut eingesetzt. Wie oft bereue ich gedankenloses Gerede, ganz zu schweigen von unrechtmäßiger Kritik oder harten Worten. Oder ich schweige, wo ich besser geredet hätte. Deshalb möchte ich mit dem Psalmdichter und König David beten: „Lass die Reden meines Mundes und das Sinnen meines Herzens wohlgefällig vor dir sein, HERR, mein Fels und mein Erlöser!” (Psalm 19,15).";
}
if(aprilday === 12){
    verse.innerHTML = "Macht nicht das Haus meines Vaters zu einem Kaufhaus!";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Rausschmiss";
    texte.innerHTML = "In Jerusalem ist richtig was los. Die Juden feiern das Passahfest und die Stadt ist voller Besucher. Auch Jesus ist dort. Er geht in den Tempelbezirk, wie viele andere Juden auch. Doch was ist das? Überall sitzen Viehhändler und bieten Rinder, Schafe, Tauben an – alles, was man passend zum Fest gut verkaufen kann. Jesus nimmt einen Strick und fängt an, die Tiere aus dem Tempelbezirk zu vertreiben. Zornig schüttet er das Geld der Wechsler aus und wirft die Tische um. Obwohl die Händler in der Überzahl sind, wehrt sich keiner. „Nehmt dies weg von hier, macht nicht das Haus meines Vaters zu einem Kaufhaus!“ Der Tempel Gottes ist kein Ort, um Geld zu scheffeln, sondern dort wird Gott geopfert, sein Wort gelesen und zu ihm gebetet. Ein Ort der Begegnung mit Gott. Jesus setzt sich für die Ehre seines himmlischen Vaters ein und räumt auf. So durchkreuzt er die Machenschaften der Händler, die das Glaubenssystem für egoistische Zwecke missbrauchen.";
}
if(aprilday === 13){
    verse.innerHTML = "Hierin ist die Liebe Gottes zu uns offenbart worden, dass Gott seinen eingeborenen Sohn in die Welt gesandt hat, damit wir durch ihn leben möchten.";
    headline_texte.innerHTML = "Gottes Liebe";
    texte.innerHTML = "Wenn die Ozeane Tinte wären, <br>und das Universum ein riesiges Pergament, <br>jeder Grashalm eine Feder und <br>jeder Mensch ein Schriftsteller – <br>es würde nicht genügen, <br>um die Liebe Gottes zu beschreiben.“";
}
if(aprilday === 14){
    verse.innerHTML = "Gott der HERR rief den Menschen und sprach zu ihm: Wo bist du?";
    headline_texte.innerHTML = "Gerade & heraus";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Video.";
}
if(aprilday === 15){
    verse.innerHTML = "Ich preise dich dafür, dass ich auf eine erstaunliche, ausgezeichnete Weise gemacht bin. Wunderbar sind deine Werke, und meine Seele weiß es sehr wohl.";
    headline_texte.innerHTML = "Mensch & mutig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Einblick in das Leben eines Christen.";
}
if(aprilday === 16){
    verse.innerHTML = "Du bist ihnen wie ein liebliches Lied, wie einer, der eine schöne Stimme hat und gut zu spielen versteht; und sie hören deine Worte, doch sie tun sie nicht.";
    headline_texte.innerHTML = "Gleichgültig oder eigensinnig?";
    texte.innerHTML = "In unserem Ort hing ein großes Plakat mit der Aufschrift: Frieden mit Gott – durch Jesus Christus. Ich habe mir oft die Frage gestellt, was diese Botschaft bei den Passanten auslöst. Der Fernfahrer ist nur einmal an diesem Plakat vorbeigefahren. Der Berufspendler hat täglich zweimal den Text gelesen. Der Gebrauchtwagenhändler von gegenüber vielleicht noch öfter. Und was macht diese Botschaft mit den Anwohnern, deren Blicke immer mal wieder auf diese Plakatwand fällt? Wird sie schlichtweg ignoriert? Wird sie belächelt? Ärgert man sich darüber? Oder löst sie vielleicht doch wenigstens Neugierde aus: Was hat es mit Jesus Christus und dem Frieden mit Gott auf sich? Als damals der Prophet Hesekiel eine Botschaft von Gott an sein Volk richtete, kamen sie scharenweise zu ihm. Sie waren durchaus neugierig und sogar beeindruckt, doch das Problem war: „Sie tun, was ihrem Geschmack zusagt.” So kann man nicht mit Gottes Wort umgehen!";
}
if(aprilday === 17){
    verse.innerHTML = "Wenn ihr ihn sucht, wird er sich von euch finden lassen.";
    headline_texte.innerHTML = "Auf der Suche?";
    texte.innerHTML = "Statistiken zeigen, dass ein Mensch bis zu 13 Prozent seiner Zeit mit Suchen verbringt. Wo hab’ ich nur mein Portemonnaie hingelegt? Hat jemand den Schlüsselbund gesehen? Wieso ist die Datei nicht mehr zu finden? Fragen, die wir von der Arbeit und von zu Hause gut kennen. Suchen kostet Energie und Zeit. Aber ohne Suchen geht’s nicht weiter. Viele Menschen sind auf der Suche nach dem Sinn des Lebens – oft ihr ganzes Leben lang. Leider verläuft diese Suche häufig ergebnislos und unbefriedigend. Auf der Suche nach dem Sinn des Lebens verspricht Gott uns zwei Dinge. Erstens: Wer ihn sucht, der wird ihn auch finden. Und zweitens: „Wer mich findet, hat das Leben gefunden” (Sprüche 8,35). Vielleicht fragst du dich: Gott suchen, wie soll das gehen? Rede einfach zu ihm, frage ihn, zum Beispiel so: Wer bist du, Herr? Oder: Was soll ich tun, Herr? Dann lies die Bibel, zum Beispiel das Lukasevangelium. Durch Bibelworte wird Gott dir Antworten auf deine Fragen geben. Suche ihn mit ganzem Herzen!";
}
if(aprilday === 18){
    verse.innerHTML = "Wen habe ich im Himmel? Und neben dir habe ich an nichts Lust auf der Erde";
    headline_texte.innerHTML = "Definitionssache";
    texte.innerHTML = "Als Kind habe ich mich über meine Noten definiert, als Teenie über mein Aussehen und als junge Erwachsene über meinen Job. Zusätzlich galt in meinem Freundeskreis die Hochzeitsfeier als einmalige Chance zur Selbstpräsentation: Je krasser die Location, je pinterestmäßiger die Deko, desto höher stieg man auf der Bewunderungsskala. Jetzt, als 30-Jährige, liegt es nahe, mich über meine Kinder zu definieren: ausgefallene Namen, trendige Outfits und gute Manieren – willkommen in meiner Vorzeigefamilie! Worüber werde ich mich mit 50 definieren? Über mein Gucci-Outfit? Oder über die Likes für meinen plastikfreien Ökolifestyle? Hoffentlich nicht! Denn je mehr ich entdecke, wie wertvoll ich in Gottes Augen bin, desto weniger brauche ich die ständige Anerkennung und Bewunderung anderer. Desto weniger Ehrgeiz verschwende ich für das Aufpolieren meiner Fassade. Und desto glücklicher macht es mich, verborgen hinter den Glitzerkulissen der Gesellschaftsbühne dem lebendigen Gott zu dienen.";
}
if(aprilday === 19){
    verse.innerHTML = "Sie führten Jesus weg zu dem Hohenpriester; und alle Hohenpriester und Ältesten und Schriftgelehrten versammeln sich um ihn.";
    headline_texte.innerHTML = "Unvorstellbar!";
    texte.innerHTML = "Mal angenommen, du wirst nachts plötzlich von der Polizei verhaftet und direkt in den Gerichtssaal gebracht. Dort sind Ankläger, Schriftführer, Zeugen versammelt – und natürlich der Richter. Sie alle warten auf dich. Und noch bevor die Sonne aufgeht, fällen sie das Todesurteil. Über dich. Unvorstellbar – oder? Was fühlte Jesus Christus in der Nacht, als er im Garten Gethsemane in der Dunkelheit verhaftet und direkt in den Gerichtssaal gebracht wurde? Dort traten falsche Zeugen auf, die sich aber in Widersprüche verstrickten. Dann fragte der Hohepriester: „Bist du der Christus?“ Und Jesus antwortete: „Ich bin’s“. Dafür wurde er zum Tod verurteilt. Nicht weil er log, sondern weil er die Wahrheit sagte. Jesus Christus ist Gott. Warum entzog er sich dem ganzen Prozess nicht? – Weil er mich retten wollte. <br>Unvorstellbar, dass ich ihm so wichtig bin!";
}
if(aprilday === 20){
    verse.innerHTML = "Ja, er spricht: Es ist zu gering, dass du mein Knecht seist, um die Stämme Jakobs aufzurichten und die Bewahrten von Israel zurückzubringen. Ich habe dich auch zum Licht der Nationen gesetzt, um meine Rettung zu sein bis an das Ende der Erde.";
    headline_texte.innerHTML = "Lesen & staunen";
    texte.innerHTML = "An dieser Stelle ist eigentlich eine Buchempfehlung.";
}
if(aprilday === 21){
    verse.innerHTML = "Musste nicht der Christus dies leiden und in seine Herrlichkeit eingehen? Und von Mose und von allen Propheten anfangend, erklärte er ihnen in allen Schriften das, was ihn selbst betraf.";
    headline_texte.innerHTML = "Wer ist denn dieser … Jesus? (2)";
    texte.innerHTML = "Wenn wir uns die Suche machen nach diesem Jesus, fällt auf, dass er im ersten Teil der Bibel (Altes Testament) explizit überhaupt nicht genannt wird. Doch wenn man den zweiten Teil (das Neue Testament) liest, erfährt man, dass viele Stellen im ersten Teil klar auf ihn hinweisen. Zum Beispiel wird sein Geburtsort angekündigt, dass er Blinde heilen würde, dass er von einem seiner engsten Freunde für 30 Silberstücke verraten und dann am Kreuz sterben würde. Wenn wir also fragen: „Wer ist denn dieser …“, dann merken wir, dass dieser Jesus von Anfang an die zentrale Figur der gesamten Bibel ist. Er selbst sagte einmal den Führern des jüdischen Volkes: „Ihr erforscht die Schriften [damals das Alte Testament], … und sie sind es, die von mir zeugen” (Johannes 5,39). Und zwei Jüngern erklärte er, wo von ihm im Alten Testament geschrieben steht. Wenn du eine Bibel hast, kannst du dich selbst überzeugen: Lies das 53. Kapitel des Propheten Jesaja.";
}
if(aprilday === 22){
    verse.innerHTML = "Henoch wandelte mit Gott.";
    headline_texte.innerHTML = "Gottfokussierter Lifestyle";
    texte.innerHTML = "Wandeln. Eine Bibel-Vokabel. Aber so lebensfremd, wie sie klingt, ist sie gar nicht! „Wandel“ bedeutet „Lifestyle”: die Art, wie du dein Leben gestaltest. „Wandel“ hat eine Richtung. Manche Menschen leben spaß- und erlebnisorientiert. Bei anderen dreht sich das Leben vor allem um Klamotten, Kosmetik, Inneneinrichtung: Alles muss schön aussehen. Man kann sein Leben auch auf Karriere oder Familie ausrichten, auf Gesundheit, Fußball, Politik, was auch immer. Schau mal in deinen Browserverlauf: Er verrät dir, was dir wichtig ist! Die Bibel stellt uns eine ganz andere Art zu leben vor: gottfokussiert! Es beginnt damit, dass wir uns auf die Suche nach Gott machen – in der Bibel. Dass wir uns seiner Liebe anvertrauen und von seiner Hand geführt durchs Leben gehen. Mit einem Ziel, das sich immer klarer über alle anderen Bedürfnisse stellt: Gott zu erkennen und ihm zu begegnen. Jeden Tag neu.";
}
if(aprilday === 23){
    verse.innerHTML = "Ich glaube, hilf meinem Unglauben!";
    headline_texte.innerHTML = "Echte Hilferufe";
    texte.innerHTML = "Vor Jesus steht ein verzweifelter Mann mit seinem Sohn, der von einem bösen Geist besessen ist. Oft stürzt dieser das Kind ins Wasser oder in eine Feuerstelle. Es kann sich nicht dagegen wehren. Schlimm sieht der Kleine aus. Immer wieder gibt es diese Vorfälle. Die Eltern müssen das hilflos mit ansehen und das treibt sie schier zur Verzweiflung! „Wenn du etwas kannst, so erbarme dich unser und hilf uns!“, fleht der Vater des Kindes Jesus an. Er ist sich selbst nicht sicher. Als Jesus ihn auf seinen Glauben anspricht, gibt er seine Zweifel offen zu und bittet eindringlich: „Ich glaube, hilf meinem Unglauben!“ Fühlst du dich vielleicht auch manchmal machtlos und bist verzweifelt? Bist hin- und hergerissen – zwischen Glauben und Unglauben? Wer sich mit seiner Not an Jesus wendet, der HAT Glauben. Und selbst wenn dein Glaube noch so mickrig ist: Jesus antwortet darauf. Sag ihm deshalb alles, was dich belastet und quält. Echte Hilferufe erhört er gerne!";
}
if(aprilday === 24){
    verse.innerHTML = "Wie in den Tagen Noahs: Sie aßen, sie tranken, sie heirateten, sie wurden verheiratet, bis zu dem Tag, als Noah in die Arche ging; und die Flut kam und brachte alle um.";
    headline_texte.innerHTML = "Nach mir die Sintflut";
    texte.innerHTML = "Als Noah die Arche baute, hatten seine Landsleute anderes im Sinn: essen, trinken, fröhlich sein – man lebt nur einmal. So einen Unsinn, den Noah hier verzapfte, hatten sie noch nie gesehen: Da baut dieser ansonsten ja ganz gescheite Kerl einen riesigen Schiffskasten auf dem Trockenen. Und das unbeirrt über mehrere Jahrzehnte. Warum? Weil Gott ihm das aufgetragen habe. Große Wassermassen sollen bald die Erde überschwemmen. Gott wolle Gericht über das Böse bringen. Aber es passiert doch nichts: Es regnet nicht, es ändert sich nichts ... Seit 2000 Jahren predigen Christen ebenfalls immer wieder dieselbe Botschaft: Jesus Christus ist die Rettungsarche, um sich vor Gottes Gericht zu schützen. Aber es tut sich nichts. Alles bleibt, wie es ist und „nach mir die Sintflut.“ Aber wie zur Zeit Noahs: Man aß, man trank, das Leben dümpelte so vor sich hin – und plötzlich ging die Tür zur Arche zu und es kam tatsächlich nach ihm die Sintflut.";
}
if(aprilday === 25){
    verse.innerHTML = "Ich preise dich dafür, dass ich auf eine erstaunliche, ausgezeichnete Weise gemacht bin. Wunderbar sind deine Werke, und meine Seele weiß es sehr wohl.";
    headline_texte.innerHTML = "Gesundheitspolizei";
    texte.innerHTML = "Wusstest du, dass in deinem Körper ein andauernder Kampf herrscht? Ständig versuchen Krankheitserreger dich fertigzumachen. Gott sei Dank haben wir in unserem Körper eine starke Truppe, die immer auf der Suche nach Feinden und im ständigen Kampf gegen Erreger ist. Gemeint sind die sogenannten Leukozyten. Sie werden auch weiße Blutkörper genannt. Davon schwimmen in einem Kubikmillimeter Blut ca. 6000-8000 Stück. Treffen sie auf Krankheitserreger, werden diese sofort – ohne jedes Wenn und Aber – angegriffen, umschlungen und plattgemacht. Bei einer Wunde kommt es zu einem Massenangriff von Erregern. Dann versammelt sich eine ganze Armee von weißen Blutkörpern und nimmt den Kampf auf. Das nimmst du als Eiter in der Wunde wahr. In den allermeisten Fällen siegt deine Armee und die Wunde verheilt. Faszinierend, wie der Schöpfer dafür gesorgt hat, dass du, ohne es zu merken, ständig verteidigt wirst.";
}
if(aprilday === 26){
    verse.innerHTML = "Diese sind Murrende, mit ihrem Los Unzufriedene …";
    headline_texte.innerHTML = "Unzufrieden";
    texte.innerHTML = "Man hat den Eindruck, dass die Unzufriedenheit in Deutschland zunimmt. Man ist unzufrieden mit der Arbeit der Regierung, mit dem Arbeitsplatz, mit der Beziehung, mit der Wohnsituation, mit seinen Freunden … Man könnte an allem rumnörgeln. Warum sind wir unzufrieden? Wir leben in Freiheit und Frieden. Die meisten haben einen Arbeitsplatz. In der Regel haben wir ein Dach über dem Kopf. Keiner muss in Deutschland hungern. Wir duschen mit Trinkwasser. Nicht umsonst setzen manche Menschen ihr Leben aufs Spiel, um auf unseren Kontinent zu kommen. Warum sind wir trotzdem oft unzufrieden? Liegt es vielleicht daran, dass wir zwar alles haben, nur keinen inneren Frieden? „Die Gottlosen sind wie das aufgewühlte Meer, denn es kann nicht ruhig sein”, sagt der Prophet Jesaja (Kap. 57,20). Was wir brauchen, ist Frieden – Frieden mit Gott. Diesen Frieden hat Jesus Christus gestiftet – durch seinen Kreuzestod. Lass dir diesen Frieden nicht entgehen!";
}
if(aprilday === 27){
    verse.innerHTML = "Ihr müsst von neuem geboren werden.";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – eines Nachts";
    texte.innerHTML = "Es ist Nacht. Ein Mann namens Nikodemus macht sich auf den Weg zu Jesus. Er gehört zu den führenden Theologen und will deshalb nicht gesehen werden. Aber er möchte von Jesus profitieren. Die Wunder, die er bei Jesus gesehen hat, haben ihn beeindruckt – und auch die Lehre. So begrüßt er ihn mit den Worten: „Rabbi … niemand kann diese Zeichen tun, die du tust, wenn Gott nicht mit ihm ist.“ Jesus weiß genau, was diesem Mann fehlt. Es ist nicht die fehlende Bibelkenntnis, sondern die innere Erneuerung. Deshalb sagt er: „In das Reich Gottes kann man nur eingehen, wenn man von neuem geboren ist.“ Abstammung oder Religiosität sind keine Eintrittskarte für den Himmel. „Neu geboren – wie soll das geschehen?“, fragt Nikodemus weiter. Wer sich eingesteht, von Geburt an verloren zu sein, und an Jesus, den Retter, glaubt, erfährt eine komplette Erneuerung und bekommt ewiges Leben! Das gilt nicht nur für schlechte Menschen, sondern genauso für Nikodemusse.";
}
if(aprilday === 28){
    verse.innerHTML = "Es ist in keinem anderen das Heil, denn es ist auch kein anderer Name unter dem Himmel, der unter den Menschen gegeben ist, in dem wir errettet werden müssen.";
    headline_texte.innerHTML = "Live & farbig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Livestream.";
}
if(aprilday === 29){
    verse.innerHTML = "Freut euch vielmehr, dass eure Namen in den Himmeln angeschrieben sind.";
    headline_texte.innerHTML = "Wo steht dein Name?";
    texte.innerHTML = "Bei einem Spaziergang über die gepflegte Promenade eines Ferienortes an der Ostsee. Einer Gruppe von jungen Leuten fallen die Messingplatten auf, die in unregelmäßigen Abständen in das Pflaster eingearbeitet sind. Sie tragen Aufschriften wie „Herbert und Renate – Berlin“ oder „Klaus Müller – seit 1980“. Zwangsläufig kommt die Frage nach dem Sinn dieser Platten auf. „Nun, damit kannst du dokumentieren, dass du mit diesem Ort verbunden bist und dich auf der Promenade verewigen“, lautet die Antwort. „Für mich ist wichtig zu wissen, dass mein Name im Himmel eingraviert ist“, entgegnet eine Urlauberin mit Anspielung auf den heutigen Bibelvers. Namen sind Schall und Rauch, sagt der Volksmund. Dagegen hat ein Name, der im Himmel aufgeschrieben ist, für Gott höchsten Wert. Denn das bedeutet, dass er dieser Person vergeben und ewiges Leben geschenkt hat.";
}
if(aprilday === 30){
    verse.innerHTML = "Der HERR sprach: Ich suchte einen Mann unter ihnen, der … vor mir in den Riss treten würde für das Land, … aber ich fand keinen.";
    headline_texte.innerHTML = "In den Riss getreten";
    texte.innerHTML = "Ungefähr 600 Jahre vor Christus trat der Prophet Hesekiel im Namen Gottes auf. Seine Botschaft erging an solche, die Gottes Gebote übertreten hatten. Ihre vielen Sünden trennten sie von dem heiligen Gott wie ein großer Riss. Wie schmerzte es Gott, wenn er daran dachte! Er suchte nach einem Mann, der selbst ohne Schuld war, damit dieser in diesen Riss treten könnte. Doch Gottes trauriges Fazit am Ende des Verses lautet: „aber ich fand keinen“. Ein hoffnungsloser Fall? Ja, wenn Gott nicht selbst tätig geworden wäre. Er sandte seinen eigenen Sohn, Jesus Christus. Die Berichte über diesen vollkommenen Menschen zeigen, dass Jesus keine Sünde getan hat, nicht einmal ein unpassendes Wort ist aus seinem Mund gekommen. Selbst seine Gedankenwelt war ohne Flecken. So konnte er, der Gerechte, für die Ungerechten in den Riss treten. Und er hat es getan! Weil er starb, ist der Weg frei zu Gott. Jetzt bist du gefragt.";
}

// Mai
if(month === 5){
    janauryday = false;
    februaryday = false;
    marchday = false;
    aprilday = false;
    mayday = true;
    juneday = false;
    julyday = false;
    augustday = false;
    septemberday = false;
    octoberday = false;
    novemberday = false;
    decemberday = false;

    mayday = aprilday+day;

    console.log(mayday);
}
if(mayday === 1){
    verse.innerHTML = "Hat doch meine Hand dies alles gemacht, und dies alles ist geworden, spricht der Herr.";
    headline_texte.innerHTML = "Gott ist souverän";
    texte.innerHTML = "Wenn irgendein Prominenter zu einem bestimmten Sachverhalt eine Erklärung abgibt, dann heißt es oft: Was für ein Statement! Die Bibel, Gottes Wort, ist voller „Statements”, die Gottes uneingeschränkte Souveränität, seine Größe und seine Allmacht bezeugen:<br>• Und Gott sah alles, was er gemacht hatte, und siehe, es war sehr gut.<br>• Gibt es einen Gott außer mir?<br>• Bei Menschen ist es unmöglich, aber nicht bei Gott.<br>• Ich der Herr bin es, der alles wirkt.<br>• Ich wirke, und wer kann es abwenden?<br>• Was unter dem ganzen Himmel ist, ist mein.<br>• Schon diese wenigen „Statements” zeigen, mit was für einem lebendigen und allmächtigen Gott wir es zu tun haben. Bringen dich solche Aussagen nicht auch dazu, ihn und seine uneingeschränkte Souveränität anzuerkennen?";
}
if(mayday === 2){
    verse.innerHTML = "Der Gefängnisdirektor warf Paulus und Silas … in das innerste Gefängnis und schloss ihre Füße fest in den Stock.";
    headline_texte.innerHTML = "Stockfinster!";
    texte.innerHTML = "Der Begriff „stockfinster“ hat seinen Ursprung in der Beschreibung von altertümlichen Gefängniszellen, in die oft kein Tageslicht drang. Zusätzlich schraubte man die Füße der Inhaftierten zwischen zwei Stöcken fest, um ihre Flucht zu verhindern. Von zwei Männern, die so gefangen waren, berichtet der heutige Bibelvers: Paulus und Silas besuchten um das Jahr 50 n.Chr. die Stadt Philippi in Griechenland. Ihre Predigt könnte in Kurzform gelautet haben: „Vor 15 Jahren ist Jesus Christus in Jerusalem am Kreuz gestorben und am dritten Tag von den Toten auferstanden. Jesus ist der Sohn Gottes. Gott hat ihn am Kreuz für unsere Schuld bestraft. Nun könnt ihr durch den Glauben an ihn Vergebung und Frieden mit Gott bekommen!” Daraufhin glaubten einige an Jesus, während andere ihre okkulten Geschäfte bedroht sahen und dafür sorgten, dass die Missionare ins Gefängnis geworfen wurden. Diese spannende Geschichte ist in Apostelgeschichte 16,11-40 nachzulesen.";
}
if(mayday === 3){
    verse.innerHTML = "Betrübt euch nicht, denn die Freude an dem Herrn ist eure Stärke";
    headline_texte.innerHTML = "Lied & lebendig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Lied.";
}
if(mayday === 4){
    verse.innerHTML = "Hallo das ist ein tolles Easter Egg<br>Esra las […] vom lichten Morgen bis zum Mittag, in Gegenwart der Männer und der Frauen und derer, die Verständnis hatten; und die Ohren des ganzen Volkes waren auf das Buch des Gesetzes gerichtet.";
    headline_texte.innerHTML = "Zeit für Gott";
    texte.innerHTML = "„Ich lese jeden Tag in der Bibel“, sagte ich zu meinem Kollegen. „Echt jetzt?“, war seine erstaunte Reaktion. Er konnte nicht glauben, dass ich mir jeden Tag ein paar Minuten Zeit für dieses Buch nehme. Wenn sich heute Spieler zum gemeinsamen Online-Gaming treffen und einer nach 60 Minuten sagt: „Ich gehe off“, werden die anderen genauso erstaunt reagieren: „Echt jetzt? Warum jetzt schon? Wir haben doch gerade erst angefangen.“ Kurz vor seiner Kreuzigung ist Jesus im Garten Gethsemane und betet. Die anwesenden Jünger hatte er aufgefordert, dies auch zu tun. Nach einer Stunde trifft er sie schlafend an und fragt: „Nicht eine Stunde vermochtet ihr mit mir zu wachen?“ Mit anderen Worten: Ihr habt nicht die Ausdauer, mal eine Stunde zu beten? „Eine Stunde beten?“, fragen wir vielleicht ungläubig zurück. „So lange?“ Wir dürfen von Gott reichlich nehmen, was er uns gibt (sein Wort) und ihm im Gebet alles abgeben, was uns belastet (z. B. Sorgen). Nehmen wir uns Zeit für Gott?!";
}
if(mayday === 5){
    verse.innerHTML = "Du sollst seinen Namen Jesus nennen.";
    headline_texte.innerHTML = "Wer ist denn dieser … Jesus? (3)";
    texte.innerHTML = "Heute wollen wir die Sonntagsreihe fortsetzen und dem nachgehen, was die Bibel über diesen Jesus zu sagen hat. Dazu schauen wir heute in die vier Evangelien. Die Evangelien sind vier parallele Berichte, in denen es im Kern um das Leben einer einzigen Person geht: Jesus Christus. Als ein Engel der Jungfrau Maria erscheint und die Empfängnis ankündigt, wird bereits sein Name mitgeteilt: Er soll „Jesus” heißen – übrigens ein gar nicht so ungewöhnlicher Name für die damalige Zeit. Aber was bedeutet „Jesus“ eigentlich? „Jesus“ ist die griechische Übersetzung des hebräisch-aramäischen Vornamens „Jeschua” – eine Kurzform von „Jehoschua“, den wir noch heute unter „Josua“ kennen. Jehoschua bedeutet: Der Herr(Jahwe oder Jehova) ist Rettung. Was für einen wunderbaren Namen trägt der erste Sohn von Joseph und Maria! Wenn der Name Programm ist …";
}
if(mayday === 6){
    verse.innerHTML = "Ich preise dich dafür, dass ich auf eine erstaunliche, ausgezeichnete Weise gemacht bin. Wunderbar sind deine Werke, und meine Seele weiß es sehr wohl.";
    headline_texte.innerHTML = "Atemberaubend";
    texte.innerHTML = "Etwa 200 Milliarden rote Blutkörperchen werden jeden Tag in unserem Körper produziert. 100 Milliarden Nervenzellen gibt es in unserem Gehirn. 11 Millionen Sinneseindrücke werden pro Sekunde im Gehirn verarbeitet, und die Rechenleistung des Gehirns liegt bei etwa 4 bis 5 Petabytes, moderne Computer leisten etwa nur ein Tausendstel davon. Bei diesen Zahlen kommen wir ins Staunen und würden gern irgendjemanden dafür loben und ihm seine Hochachtung aussprechen. Nur wem? Manche verehren „Mutter Natur”. Doch eigentlich weiß jeder, dass solche komplexen Systeme wie der menschliche Körper sich nicht entwickelt haben können. Der Dichter von Psalm 139 wusste es genau: Gott hat mich schon im Körper meiner Mutter geformt. Nicht irgendwie, sondern auf eine erstaunliche, ausgezeichnete Weise. Ich bin, wie jeder andere Mensch, ein Wunderwerk des Schöpfers und dafür lobe ich ihn.";
}
if(mayday === 7){
    verse.innerHTML = "In der Stadt fand sich ein armer weiser Mann, der die Stadt durch seine Weisheit rettete.";
    headline_texte.innerHTML = "Der weise Held";
    texte.innerHTML = "Wie stellt man sich heutzutage einen Helden vor? Kraftvoll, mutig und klug – das sind Eigenschaften, die uns sofort einfallen. In unserem Tagesvers geht es auch um einen Helden. Er wohnte in einer Kleinstadt, die von einem großen König angegriffen wurde. Durch seine Weisheit schaffte er es, die umzingelte und belagerte Stadt zu retten. Das Tragische: Kein Mensch erinnerte sich an diesen weisen Mann. Warum nicht? Weil er arm war. So lautet das Fazit aus dieser Geschichte: „Weisheit ist besser als Kraft; aber die Weisheit des Armen wird verachtet” (Prediger 9,16). Da drängt sich eine Parallele zu einem anderen Helden auf, der „keine Gestalt und keine Pracht hatte” (Jesaja 53,2), zudem in bescheidenen Verhältnissen lebte. Er rettete keine Stadt, aber durch seine Weisheit und seine Liebe hat er die größte Rettung bewirkt, an der jeder Mensch teilhaben kann. Von wem die Rede ist, dürfte klar sein: Jesus Christus, der Sohn Gottes.";
}
if(mayday === 8){
    verse.innerHTML = "Wie solltet ihr dem Gericht der Hölle entfliehen?";
    headline_texte.innerHTML = "Die Hölle";
    texte.innerHTML = "Höl | le <br>Substantiv, feminin <br>Ort der ewigen Verdammnis für die Sünder <br>• Die Menschen erleiden in der Hölle ewige Qual (Matthäus 25,46); <br>• Seele und Körper werden dort verdorben (Matthäus 10,28); <br>• die Menschen haben keine Ruhe Tag und Nacht (Offenbarung 14,11); <br>• sie befinden sich in dem Dunkel der Finsternis in Ewigkeit (Judas 13); <br>• sie werden mit Feuer und Schwefel gequält (Offenbarung 14,10); <br>• sie sind fern von dem Angesicht des Herrn und der Herrlichkeit (2. Thessalonicher 1,9); <br>• sie weinen und knirschen dort mit den Zähnen (Matthäus 24,51).";
}
if(mayday === 9){
    verse.innerHTML = "Siehe, ich stehe an der Tür und klopfe an; wenn jemand meine Stimme hört und die Tür öffnet, zu dem werde ich hineingehen und das Abendbrot mit ihm essen, und er mit mir.";
    headline_texte.innerHTML = "Stummschalten!?";
    texte.innerHTML = "Überflutet von Social-Media-Informationen, von Anrufen und von Menschen, die sich einfach nur mitteilen möchten. Man kommt kaum noch zur Ruhe, und es fällt immer schwerer, sich bei dem ganzen Lärm auf das Wesentliche zu konzentrieren. Der Stummschaltmodus ist oft die Lösung. Da ist noch jemand, der gehört werden will: Gott. Er drängt sich nicht auf, macht sich aber deutlich bemerkbar: einmal, zweimal, dreimal. Er kann warten, ist sehr geduldig. Doch wie reagierst du darauf? Schaltest du genervt auf „stumm”? Wenn Gott nach einer Beziehung zu dir verlangt, darfst du ihn nicht dauerhaft abweisen. Sonst muss er dich eines Tages auf „stumm schalten“ – und zwar für immer.";
}
if(mayday === 10){
    verse.innerHTML = "Der Sohn machte sich auf und ging zu seinem Vater. Als er aber noch fern war, sah ihn sein Vater und wurde innerlich bewegt und lief hin und fiel ihm um den Hals und küsste ihn sehr.";
    headline_texte.innerHTML = "Komm zurück!";
    texte.innerHTML = "Jesus erzählt seinen Zuhörern von einem Sohn, der das Erbe seines Vaters bereits zu dessen Lebzeiten einfordert, von zu Hause weggeht, in Saus und Braus lebt und dabei sein Erbe komplett verprasst. Doch der Spaß ist nur von kurzer Dauer: Er wird im Stich gelassen, landet auf der Straße und muss die dreckigsten Jobs annehmen, um über die Runden zu kommen. Nach innerem Ringen besinnt er sich und geht zurück zu seinem Vater. Er bittet ihn um Vergebung und wagt gar nicht, irgendwelche Ansprüche zu stellen. Umso erstaunlicher, dass sein Vater ihm nichts vorwirft oder nachträgt, sondern ihn aufnimmt und ein großes Willkommensfest veranstaltet. Mit dieser Geschichte weist Jesus deutlich darauf hin, dass eine Umkehr zu Gott immer möglich ist. Wie verkorkst dein Leben auch sein mag – durch eigene Schuld und/oder unglückliche Umstände: Gott wartet auf dich und ist bereit, dich in Liebe aufzunehmen und deine Lebensschuld zu vergeben.";
}
if(mayday === 11){
    verse.innerHTML = "Jesus sprach zu ihnen: Ein Prophet ist nicht ohne Ehre, außer in seiner Vaterstadt und unter seinen Verwandten und in seinem Haus.";
    headline_texte.innerHTML = "Ehrenmann";
    texte.innerHTML = "Die Bibel berichtet: <br>• Joseph bekommt von seinem Vater die edelste Kleidung. <br>–Ein Mann von Ehre. <br>• David bringt seinen älteren Brüdern im Krieg Nahrung. <br>–Ein richtiger Ehrenmann. <br>• Jesus Christus kommt auf diese Erde, vollbringt viele Wunder, tut nur Gutes und hilft den Armen und Kranken. <br>–Ehre, wem Ehre gebührt! <br>Alle drei Personen hatten gemeinsam: Aus dem engsten Umfeld kam starker Gegenwind. Josephs Brüder wollten ihn töten, Davids Brüder verachteten seinen Besuch und Jesus Christus wurde sowohl von seinen Brüdern als auch von seiner Heimatstadt abgelehnt. Beeindruckend ist, dass Jesus nie seine eigene Ehre suchte, sondern im Gegenteil sich um ehrlose Menschen kümmerte. Dennoch achtet Gott darauf, dass sein Sohn Jesus Christus geehrt wird. Denn „wer den Sohn nicht ehrt, ehrt den Vater nicht” (Johannes 5,23). Was zählt bei dir – deine Ehre oder seine Ehre?";
}
if(mayday === 12){
    verse.innerHTML = "Was nützt es dem Menschen, wenn er die ganze Welt gewinnt und seine Seele einbüßt? Oder was kann der Mensch geben, damit er seine Seele löse?";
    headline_texte.innerHTML = "Gerade & heraus";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Video.";
}
if(mayday === 13){
    verse.innerHTML = "Alles nun, was irgend ihr wollt, dass euch die Menschen tun, das tut auch ihr ihnen ebenso!";
    headline_texte.innerHTML = "Das Leben ist nicht fair, gewöhn dich dran.";
    texte.innerHTML = "Das Leben ist nicht fair, oder? Wenn man durch die WeltraumBrille auf diese Erde schaut, wird die augenscheinliche Unfairness deutlich: Armut und Reichtum, Wohlstand und Hunger, Gesundheit und Krankheit sind nach unserem Empfinden nicht fair verteilt. Doch wie ist es bei dir und mir – sind wir immer fair? Drücken wir nicht manchmal unseren Egotrip durch, zur Not auch auf Kosten anderer? Wie schön wäre es, wenn wir unser Leben mehr an den Bedürfnissen anderer ausrichten würden. Jesus Christus hat in unserem Bibelvers nicht nur davon gesprochen, sondern hat es zu 100% vorgelebt. Er war komplett seinem Gott zugewandt und den Menschen, denen er begegnete. Kurz vor seinem Tod betete er sogar noch für seine Feinde und bat für sie um Vergebung (Lukas 23,34). Schließlich wurde er von Gott für fremde Schuld gestraft. Vielleicht sagst du: „Das war nicht fair!” Aber es musste geschehen, wenn Menschen vergeben werden sollte. Gott ist gerecht!";
}
if(mayday === 14){
    verse.innerHTML = "Wen dürstet, der komme; wer will, nehme das Wasser des Lebens umsonst.";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Durst";
    texte.innerHTML = "Jesus ist auf dem Weg von Judäa nach Galiläa, das im Norden Israels liegt. Durch den langen Fußweg ist er müde geworden und macht Pause an einem Brunnen. Da kommt eine Frau, um Wasser zu schöpfen. Jesus spricht sie an: „Gib mir zu trinken!“ Ihm geht es weniger um seinen körperlichen Durst als vielmehr um ein Gespräch mit ihr. Jesus erkennt bei ihr ein ungestilltes Bedürfnis, quasi Durst nach erfülltem Leben. Er sagt zu ihr: „Jeden, der von diesem Brunnenwasser trinkt, wird kurze Zeit später wieder dürsten; wer aber von meinem Wasser trinkt, den wird nicht dürsten in Ewigkeit.” Die Frau wird ganz neugierig: Jesus hat kein Gefäß, aber Wasser, das besser ist als ihr Brunnenwasser? Die Frau lebt unverheiratet mit einem Mann zusammen, nachdem sie fünf Männer gehabt hat. Jesus weiß das und spricht sie auf ihre Beziehungen an. Er kennt ihr ganzes Leben! Jetzt ahnt sie, wen sie vor sich hat: den verheißenen Christus. Bei ihm bekommt sie das, was ihren Durst wirklich stillt.";
}
if(mayday === 15){
    verse.innerHTML = "Wer Ohren hat zu hören, der höre!";
    headline_texte.innerHTML = "Hörst du hin?";
    texte.innerHTML = "Beim Thema Hören sind uns die Hunde weit überlegen. Und die Katzen. Und erst recht die Fledermäuse. Wir Menschen hören bis zu 20.000 Hertz, Fledermäuse dagegen bis zu 200.000 Hertz. Das ist überlebenswichtig für sie, um Feinde zu hören und ihre Beute zu orten. Tröstlich, dass wir Menschen zumindest besser als die Frösche hören. Was Jesus sagt, ist keine Binsenweisheit. Es ist provozierend, direkt und persönlich. Jesus fragt nicht, ob unsere Ohren noch dran sind oder ob Hammer, Amboss, Steigbügel und Trommelfell gut zusammenarbeiten. Nein, er fordert uns auf, genau und gut hinzuhören, wenn er redet. Nehmen wir ihn ernst, wenn er von Gericht spricht, wenn er vor der Hölle warnt? Genauso im Blick auf seine Einladung: Folgen wir ihr oder gehen wir achtlos daran vorbei? Manchmal warnt er laut: Pass auf! – manchmal flüstert er leise: Vertrau mir! Bitte, hör ihm zu, hör, was er dir gerade heute ganz persönlich sagen will!";
}
if(mayday === 16){
    verse.innerHTML = "Herr, du hast mich erforscht und erkannt! … du verstehst meine Gedanken von fern … du bist vertraut mit allen meinen Wegen.";
    headline_texte.innerHTML = "Verstand und Gefühl";
    texte.innerHTML = "Manchmal flüstert Lisas Gefühl: „Ich will noch ein Kind.“ Im Familien-Alltagschaos ändert es seine Meinung jedoch schnell wieder: „Nie, nie wieder!“ „Es würde dich psychisch fertig machen“, pflichtet der Verstand ihm bei. Bis er Lisa wieder leise daran erinnert: „Mit 45 wirst du es bereuen.“ Gefühl und Verstand sind wertvolle Tools für Entscheidungen. Aber sie sind keine ultimativen Ratgeber. Gefühle schwanken; und der Verstand ist schnell überfordert, wenn die Konsequenzen nicht kalkulierbar sind. Ob es um Beruf- oder Partnerwahl geht, Familienplanung oder Investitionen: Bei weitreichenden Entscheidungen brauchen wir einen kompetenteren Ratgeber. Einen mit Weitblick, Überblick und Durchblick. Da kommt nur einer in Frage: Gott selbst. Er ist der Einzige, der die Zukunft kennt und der deine Gedanken- und Gefühlswelt samt deiner komplexen Vergangenheit durchschaut. Er hat nicht nur einen guten Weg für dich – er selbst will mit dir gehen!";
}
if(mayday === 17){
    verse.innerHTML = "Ist dieser nicht ein Brandscheit, das aus dem Feuer gerettet ist?";
    headline_texte.innerHTML = "Aus dem Feuer gerettet";
    texte.innerHTML = "Es war in Magdeburg. Sie war 22 Jahre alt, als die Briten und Amerikaner in der Nacht vom 16. auf den 17. Januar 1945 einen der schwersten Luftangriffe flogen. Mit ihrer Freundin hatte sie sich zum Tanzen verabredet. Da kam der Fliegeralarm. Auf der Flucht in den Bunker fiel ihr plötzlich ein, dass sie ihre schöne neue Jacke im Tanzlokal vergessen hatte. Sie rannte zurück, um sie zu holen. Als sie dann den Bunker erreichte, ließ man sie nicht mehr hinein. <br>Zwischen Bomben und Leichen und brennenden Häusern floh sie aus der Stadt hinaus. Frühmorgens erreichte sie ihr Zuhause. Später erfuhr sie, dass alle anderen im Bunker erstickt waren. <br>​​​​​​​Gott redete zu ihr. Immer und immer wieder. Doch erst 2010, im Pflegeheim, wurde ihr klar, dass sie Jesus und seine Tat auf Golgatha brauchte, um Frieden mit Gott zu bekommen. Als sie starb, fragte man sie, worauf sie vertrauen würde, dass sie in den Himmel zu Gott käme. Mit einem Funkeln in den Augen sagte sie: „Auf Jesus allein!“";
}
if(mayday === 18){
    verse.innerHTML = "Alle Schrift ist von Gott eingegeben und nützlich zur Lehre, zur Überführung, zur Zurechtweisung, zur Unterweisung in der Gerechtigkeit.";
    headline_texte.innerHTML = "Lesen & staunen";
    texte.innerHTML = "An dieser Stelle ist eigentlich eine Buchempfehlung.";
}
if(mayday === 19){
    verse.innerHTML = "Andreas findet zuerst seinen eigenen Bruder Simon Petrus und spricht zu ihm: Wir haben den Messias gefunden (was übersetzt ist: Christus).";
    headline_texte.innerHTML = "Wer ist denn dieser … Jesus? (4)";
    texte.innerHTML = "Wir möchten auch an diesem Sonntag wieder ins Staunen kommen über diesen Jesus; dazu wollen wir uns weiter ansehen, was die Bibel über ihn sagt. Ein besonderer Namenszusatz, den man gelegentlich liest und den wir auch in diesem Kalender manchmal benutzen, ist der griechische Ausdruck Christus. Es ist das gleiche Wort wie das hebräische Messias und bedeutet schlicht „der Gesalbte“. Was hat es damit auf sich? Früher wurden in Israel Priester, Propheten und Könige mit Öl gesalbt, wenn sie ihr Amt antraten. Ein Gesalbter war also etwas Besonderes, stand in gewissem Sinn über den anderen seines Volkes. Wenn Andreas zu seinem Bruder Simon Petrus sagt, dass sie den Messias gefunden haben, dann meint er nicht irgendjemand, sondern dann geht es um den Gesalbten, den bereits die Propheten des Alten Testaments angekündigt haben. Den frommen Juden ist klar, dass dieser Gesalbte, der König Israels, der Sohn Gottes ist. Damit hebt er sich von allen anderen ab. Er ist einzigartig!";
}
if(mayday === 20){
    verse.innerHTML = "Wir alle irrten umher wie Schafe, wir wandten uns jeder auf seinen Weg.";
    headline_texte.innerHTML = "Der Weg bestimmt das Ziel";
    texte.innerHTML = "Sich durch die Schulzeit quälen, für den Studienabschluss abrackern, dann die Karriereleiter hochkämpfen? Diese drei wollten da nicht mitmachen: Felix (19), Abiturient: „Das Leben ist da, um es zu genießen.“ – Leonie (22), verliebt: „Ob es mit Tom klappt – einfach nicht drüber nachdenken.“ – Matze (28), Freebiker: „Benzin in der Nase – dafür lebe ich.“ Zehn Jahre später: Felix leidet unter einem Burn-out; Leonie erfährt, dass Tom sie von Anfang an betrogen hat und sie jetzt, kurz vor der Geburt des Babys, verlassen will; Matze liegt nach einem Unfall im Krankenhaus: querschnittsgelähmt. Wie war das noch – der Weg ist das Ziel? Nein, wir brauchen ein Ziel, das außerhalb des Sichtbaren liegt, ein Ziel, das bleibt, wenn alle Glücksmomente auf dieser Erde verflogen sind. Gott hat ein Ziel für uns: Er will uns einmal für immer bei sich haben. Der Weg dorthin ist schmal, aber klar definiert. Es ist ein Glaubensweg.";
}
if(mayday === 21){
    verse.innerHTML = "Mach dich auf, nimm deine Frau und deine beiden Töchter, ... damit du nicht weggerafft wirst in der Ungerechtigkeit der Stadt!";
    headline_texte.innerHTML = "Unmoral? Ohne mich!";
    texte.innerHTML = "Hast du schon mal von der Stadt Sodom gehört? Eine vergleichbare Stadt wäre Las Vegas: Glücksspiel, Habsucht, Prostitution, kurz: Unmoral ist an der Tagesordnung. Für Gott und seine Maßstäbe interessiert sich niemand. Vor vielen Jahren lebte ein Mann namens Lot in Sodom. Durch seinen Onkel Abraham hatte er schon viel von Gott gehört, und er wusste, wie Gott über die Menschen dort denkt: Sie waren sehr böse und große Sünder. Durch das, was Lot sah und hörte, quälte er täglich seine Seele. Wie konnte Lot nur dortbleiben? Offensichtlich wollte er positiven Einfluss ausüben. Deshalb hatte er in der Stadt eine leitende Funktion übernommen. Aber er erreichte nichts. Und wenn Gott nicht barmherzig gewesen wäre, wäre er mit den Einwohnern der Stadt verbrannt worden. Es reicht also nicht, gegen das Böse Stellung zu beziehen. Gott will, dass wir uns davon trennen. Nur so können wir glücklich unseren Glauben leben.";
}
if(mayday === 22){
    verse.innerHTML = "Alle Volksmengen, die zu diesem Schauspiel zusammengekommen waren, schlugen sich, als sie sahen, was geschehen war, an die Brust und kehrten zurück.";
    headline_texte.innerHTML = "Nur ein Schauspiel?";
    texte.innerHTML = "Vielfach hielt man damals eine Kreuzigung für ein „Schauspiel“, einen spannenden Zeitvertreib. Kommt ja immer wieder mal vor, dass da draußen auf diesem Hügel jemand gekreuzigt wird. Und wenn man gerade nichts Besseres vorhat, geht man hin und guckt sich das Spektakel an. Geschieht ihnen recht, diesen Schwerverbrechern ... Die Kreuzigung von Jesus Christus war unendlich viel mehr als ein „Schauspiel“. Sie war der größte Justizmord aller Zeiten. Er, der die Menschen belehrt, getröstet, geheilt und versorgt hatte, hing dort am Kreuz. Von aufgeputschten Mengen dahingetrieben, von falschen Zeugen verleumdet. Bespuckt, geschlagen, gedemütigt, verhöhnt. Zugleich wurde Jesus freiwillig das Sühnopfer. Er selbst hatte im Voraus gesagt: „Der Sohn des Menschen muss erhöht werden, damit jeder, der an ihn glaubt, nicht verloren gehe, sondern ewiges Leben habe” (Johannes 3,14.15). Was für eine unendliche Liebe, dass er für uns starb!";
}
if(mayday === 23){
    verse.innerHTML = "Die Welt vergeht und ihre Lust; wer aber den Willen Gottes tut, bleibt in Ewigkeit.";
    headline_texte.innerHTML = "Wer schreibt, der bleibt";
    texte.innerHTML = "Viele haben sich schon gefragt, was von ihnen für die Nachwelt übrigbleibt, wenn sie nicht mehr leben. Da wir unser Leben nicht verlängern können, versuchen wir wenigstens, dass sich Menschen nach unserem Tod an uns erinnern. Wenigstens in den Erinnerungen unserer Familie und Freunde möchten wir weiterleben. Ein bekanntes Sprichwort heißt: „Wer schreibt, der bleibt. Damit meint man nicht nur, dass geschriebene Worte belastbarer sind als gesprochene. Es weist auch darauf hin, dass Bücher gewöhnlich viel länger existieren als ihre Autoren. Es gibt allerdings eine Ausnahme: die Bibel, das Wort Gottes, das in Ewigkeit feststeht in den Himmeln – so wie Gott selbst (Psalm 119,89). Und das Besondere der Bibel: Sie zeigt uns einen Weg auf, wie auch wir alles überdauern können: Wir müssen das tun, was Gott von uns will. Er ist der Ewige, der allein festlegt, wie Menschen ewig leben können.";
}
if(mayday === 24){
    verse.innerHTML = "Denn auch der Sohn des Menschen ist nicht gekommen, um bedient zu werden, sondern um zu dienen und sein Leben zu geben als Lösegeld für viele.";
    headline_texte.innerHTML = "Das höchste Lösegeld";
    texte.innerHTML = "Lösegelder werden gezahlt, um die Freilassung von Geiseln zu erreichen oder um unrechtmäßig entzogene Gegenstände zurückzuerhalten. Vermutlich das höchste Lösegeld der Geschichte zahlte der Inkakönig Atahualpa im 16. Jahrhundert für seine eigene Freilassung an den Eroberer Francisco Pizarro. 6 Tonnen Gold und 11 Tonnen Silber wurden von ihm entrichtet – das sind umgerechnet ca. 345 Millionen EUR. Es half alles nichts, er wurde trotzdem hingerichtet. Jesus Christus, der Sohn Gottes, zahlte vor ca. 2000 Jahren auch ein Lösegeld. Er zahlte nicht in Euro, Silber oder Gold, sondern er bezahlte mit seinem eigenen Leben. Dieses besondere Lösegeld war erforderlich, um jedem Menschen Erlösung anbieten zu können. Doch was nützt das Angebot, wenn ich nicht zugreife? Zuerst muss ich vor Gott kapitulieren – ich bin verloren. Dann darf ich annehmen und glauben, dass Jesus stellvertretend für mich bezahlt hat. Wunderbar, ich bin frei!";
}
if(mayday === 25){
    verse.innerHTML = "Herr, wie oft soll ich meinem Bruder, der gegen mich sündigt, vergeben?";
    headline_texte.innerHTML = "Barmherzig oder hartherzig?";
    texte.innerHTML = "Eine „Shortstory“, die Jesus selbst einmal erzählte: Es war ein König, „der mit seinen Knechten Abrechnung halten wollte. Als er aber anfing abzurechnen, wurde einer zu ihm gebracht, der zehntausend Talente schuldete. Da dieser aber nichts hatte, um zu bezahlen, befahl sein Herr, ihn und seine Frau und die Kinder und alles, was er hatte, zu verkaufen und so zu bezahlen. Der Knecht nun fiel nieder, flehte ihn an und sprach: Hab Geduld mit mir, und ich will dir alles bezahlen. Der Herr jenes Knechtes aber, innerlich bewegt, ließ ihn frei und erließ ihm das Darlehen. Jener Knecht aber ging hinaus und fand einen seiner Mitknechte, der ihm hundert Denare schuldete. Und er ergriff und würgte ihn und sprach: Bezahle, wenn du etwas schuldig bist. Sein Mitknecht nun fiel nieder, bat ihn und sprach: Hab Geduld mit mir, und ich will dir bezahlen. Er aber wollte nicht, sondern ging hin und warf ihn ins Gefängnis, bis er die Schuld bezahlt habe“ (Matthäus 18,23-30.) Hand aufs Herz: Mit welcher Person aus dieser Geschichte kann ich mich vergleichen?";
}
if(mayday === 26){
    verse.innerHTML = "Wie werden sie nun den anrufen, an den sie nicht geglaubt haben? Wie aber werden sie an den glauben, von dem sie nicht gehört haben? Wie aber werden sie hören ohne einen Prediger?";
    headline_texte.innerHTML = "Live & farbig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Livestream.";
}
if(mayday === 27){
    verse.innerHTML = "Jonathan redete zu seinem Vater Saul Gutes von David.";
    headline_texte.innerHTML = "Gutes sprechen!";
    texte.innerHTML = "Mobbing, Diskriminierung, Ignoranz, verbale Kriegsführung – Schlagworte, die für volle Wartezimmer bei Psychologen sorgen, die innerlich bitter machen und Menschen an den Rand der Verzweiflung bringen. Wie kommt das eigentlich, dass wir leider immer wieder in die Falle tappen, schlecht über andere zu reden? Machen wir das, um selbst besser dazustehen? Was wollen wir mit negativer Publicity erreichen? Bringt uns das weiter oder nützt es was? Nein, im Gegenteil. Es zieht einen selbst runter, es verbittert diejenigen, über die wir herziehen, es zieht Gräben in Beziehungen oder begräbt sie ganz, es macht das Leben komplizierter, es untergräbt Vertrauen und macht kaputt. Es tut gut, von jemandem wie Jonathan zu lesen, dass er Gutes über David zu Vater Saul spricht. Wie oft würden wir den Mund halten, wenn wir uns vornähmen, über andere nicht schlecht zu reden? Sollen wir es heute mal einen Tag lang versuchen?";
}
if(mayday === 28){
    verse.innerHTML = "Wir sind … den einen ein Geruch vom Tod zum Tod, den anderen aber ein Geruch vom Leben zum Leben.";
    headline_texte.innerHTML = "Zwischen Gestank und Du";
    texte.innerHTML = "Unter jedem herkömmlichen Waschbecken befindet sich ein U-förmig gebogenes Rohr: der (oder das) Siphon. Der letzte Teil des Wassers, der durch die Abwasserleitung abfließt – zum Beispiel beim Händewaschen –, bleibt im Siphon zurück. Dieser dient als Geruchsverschluss und verhindert aufsteigende Gerüche aus den Abwasserrohren und dem Abwasserkanal. Auf der einen Seite des Siphons ist die Luft rein, auf der anderen Seite riecht es übel. Der Apostel Paulus und seine Mitarbeiter machten die Erfahrung, dass sie als Prediger der „guten Botschaft“ durchaus nicht überall angenommen wurden. Für diejenigen, die Botschaft und Prediger ablehnten, waren sie Verwesungsgeruch. Für alle, die an die Botschaft glaubten, waren sie lebendig machender Duft. Und so ist es bis heute: Das Evangelium von Jesus Christus ist denen, die verloren gehen, Torheit, sagt Paulus. Den anderen ist es Gottes Kraft. Wie stehst du zu dieser Botschaft?";
}
if(mayday === 29){
    verse.innerHTML = "Der Mensch glaubte dem Wort, das Jesus zu ihm sagte, und ging hin.";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Krankenheilung";
    texte.innerHTML = "Sein Sohn liegt im Sterben. Verzweiflung macht sich breit. Was tun? Der besorgte Vater ist zwar ein Beamter des Königs, doch das hilft seinem Kind in dieser lebensbedrohlichen Situation nichts. Er sieht nur eine Möglichkeit: zu Jesus gehen. Er hat von dessen Wundern gehört. Vielleicht kann er ja helfen. So macht er sich auf den Weg. „Herr, komm herab, ehe mein Kind stirbt!“ In einfachen Worten spricht er seine Not aus. Die Antwort ist ebenso einfach: „Geh hin, dein Sohn lebt!“ Der Vater glaubt den Worten von Jesus und macht sich auf den Heimweg. Seine Diener kommen ihm entgegen. „Dein Sohn lebt“, sagen sie ihm. „Wann ist es mit ihm besser geworden?“, fragt er sie. „Gestern zur siebten Stunde verließ ihn das Fieber“, lautet die Antwort. Der Vater rechnet nach. Das ist genau die Zeit, in der Jesus zu ihm gesagt hat: „Dein Sohn lebt!” So erbarmt sich Jesus über die Not einer Familie und zeigt seine göttliche Macht!";
}
if(mayday === 30){
    verse.innerHTML = "Das Wort vom Kreuz ist denen, die verloren gehen, Torheit; uns aber, die wir errettet werden, ist es Gottes Kraft.";
    headline_texte.innerHTML = "Entweder – oder";
    texte.innerHTML = "Das Unglück geschah am 14. April 1912 um 23:40 Uhr. Das Luxusschiff Titanic kollidierte mit einem Eisberg und versank wenig später im eiskalten Atlantik. Ungefähr 1500 Menschen starben. <br>Am Gebäude der Reederei in Liverpool wurden kurz darauf zwei große Tafeln aufgehängt, auf denen die Angehörigen der Passagiere herausfinden konnten, ob ihre Lieben auch unter den Toten waren. Auf der einen Tafel konnte man lesen: „SAVED“ (= gerettet), auf der anderen „LOST“ (= verloren). Je mehr über das Unglück bekannt wurde, umso mehr Zettel mit Namen wurden auf einer der beiden Tafeln angebracht. Es gab kein „Dazwischen”. Für alle Passagiere galt: Entweder stand ihr Name unter „SAVED“ – oder tragischerweise unter „LOST“. <br>​​​​​​​Auch bei der Frage nach Himmel und Hölle gibt es kein Dazwischen, so sehr viele Menschen sich einen Mittelweg auch wünschen. Es gibt nur ein „Entweder – Oder“. Auf welcher Tafel steht dein Name? „SAVED” oder „LOST”?";
}
if(mayday === 31){
    verse.innerHTML = "Wir haben einen starken Trost, die wir Zuflucht genommen haben, die vor uns liegende Hoffnung zu ergreifen. Diese haben wir als einen sicheren und festen Anker der Seele";
    headline_texte.innerHTML = "Anker";
    texte.innerHTML = "„Wir merken erst im Sturm, wer unser Anker ist.“";
}

// Juni
if(month === 6){
    janauryday = false;
    februaryday = false;
    marchday = false;
    aprilday = false;
    mayday = false;
    juneday = true;
    julyday = false;
    augustday = false;
    septemberday = false;
    octoberday = false;
    novemberday = false;
    decemberday = false;

    juneday = mayday+day;

    console.log(juneday);
}
if(juneday === 153){
    verse.innerHTML = "Geht ein durch die enge Pforte; denn weit ist die Pforte und breit der Weg, der zum Verderben führt, und viele sind, die durch sie eingehen. Denn eng ist die Pforte und schmal der Weg, der zum Leben führt, und wenige sind, die ihn finden.";
    headline_texte.innerHTML = "Sie haben Ihr Ziel erreicht";
    texte.innerHTML = "Letztens habe ich folgende makabere Geschichte gehört:<br><br>Ein älterer Herr nimmt an einer Beerdigung teil. Dank des Smartphone-Navis hat er den unbekannten Friedhof mit dem Auto schnell gefunden. Jetzt hat sich die Trauergesellschaft um das offene Grab versammelt, man hat den Toten zur letzten Ruhe gebettet. Da macht sich plötzlich das vermeintlich ausgeschaltete Navi in der Manteltasche des Besuchers bemerkbar. In die andächtige Stille hinein verkündet die nette Frauenstimme laut: „Sie haben Ihr Ziel erreicht!”<br><br>Lustig, aber irgendwie auch ziemlich ernst. Denn wenn unsere Totenglocke läutet, haben wir wirklich unsere endgültige Bestimmung erreicht. Damit meine ich nicht das Grab, sondern den Ort, wo sich unsere Seele nach dem Tod aufhalten wird. Der Tagesvers nennt zwei Ziele: Verderben oder Leben. Welches Ziel steuern wir an?";
}
if(juneday === 154){
    verse.innerHTML = "Denn Gott ist einer, und einer ist Mittler zwischen Gott und Menschen, der Mensch Christus Jesus.";
    headline_texte.innerHTML = "Wer ist denn dieser … Jesus? (5)";
    texte.innerHTML = "An den letzten Sonntagen haben wir schon Erstaunliches über diesen Jesus gelernt: Er ist die Hauptperson der Bibel, er ist der Retter und zudem der von Gott bestimmte Christus. Heute lernen wir, dass Jesus der eine Mittler zwischen Gott und Menschen ist. Das war einerseits nötig, weil der heilige und gerechte Gott nicht ohne Weiteres mit sündigen Menschen in Beziehung treten kann. Andererseits war es uns Menschen aus eigener Anstrengung nicht möglich, zu Gott zu kommen. Deshalb ist Jesus Mittler zwischen Gott und Menschen geworden. Der Sohn Gottes musste dafür „Fleisch” werden, d. h. wirklicher Mensch. So konnte er uns Menschen zeigen, wer Gott wirklich ist. Darin ist er einzigartig! Genauso einzigartig ist, dass er als Mittler starb, damit Menschen erlöst und mit Gott versöhnt werden könnten. Beachte: Keine Maria, kein Papst, kein Priester – nur einer ist Mittler: der Mensch Jesus Christus. Ihm sei die Ehre!";
}
if(juneday === 155){
    verse.innerHTML = "Wir erwarten nach Gottes Verheißung neuen Himmel und eine neue Erde.";
    headline_texte.innerHTML = "Alles wird neu";
    texte.innerHTML = "Alles wird gut! – Ein Möchtegern-Mutmach-Satz, der Nonsens ist. Denn guck dich mal um auf unserem Planeten. Was endet gut? Tiere verenden qualvoll oder werden gefressen. Menschen verhungern, sterben an schrecklichen Krankheiten oder bringen sich gegenseitig um. Unsere vielgepriesene „Mutter Natur” hat ein ziemlich vernarbtes Gesicht. Warum ist unsere Welt nicht perfekt? Liegt es an Gott? Auf keinen Fall! Es liegt an uns Menschen, die nicht als Roboter erschaffen worden sind, sondern mit Vernunft und Entscheidungsfreiheit. Diese Freiheit haben wir schamlos missbraucht, haben Gottes Regeln für ein gelingendes Leben übertreten. Wir haben Gut und Böse selbst definiert und unser Leben nach eigenen Vorstellungen gestaltet. Als Folge dieser Arroganz sind wir Teil einer kaputten Welt, die uns nur eins garantiert: den Tod. Da sandte Gott seinen Sohn Jesus Christus, um uns mit sich zu versöhnen. Seine Hoffnungsbotschaft gipfelt in dem Versprechen: „Ich mache alles neu!”";
}
if(juneday === 156){
    verse.innerHTML = "Rede zu der Erde, und sie wird es dich lehren; und die Fische des Meeres werden es dir erzählen. Wer würde nicht an diesen allen erkennen, dass die Hand des Herrn dies gemacht hat?";
    headline_texte.innerHTML = "Schöpferisch genial";
    texte.innerHTML = "Die Bionik ist ein riesiges Forschungsgebiet, das sich mit Konstruktionen, Abläufen, Systemen und Ideen innerhalb der Biologie beschäftigt, um diese für die Technik nutzbar zu machen. Ob der bei Pflanzen abgeschaute „Lotuseffekt”, der Wasser an einer Oberfläche abperlen lässt, oder die der Haifischhaut nachempfundene Oberflächenstruktur heutiger Schiffe und Flugzeuge, u. v. m.: Die Natur hat unseren technischen Fortschritt erheblich beschleunigt. Stopp mal! Die „Natur”? Ernsthaft? Wenn Forscher von Konstruktionen reden, müssen wir dann nicht unwillkürlich nach dem Konstrukteur fragen? Wer Abläufe oder Systeme erforscht, will doch wissen, wer die Regeln gesetzt hat, oder? Geniale Ideen schreien doch geradezu nach einem Ideengeber! Im Buch Hiob, dem ältesten Buch der Bibel, stellt dieser Mann uns die Frage, ob nicht auch wir erkennen müssen, dass die Natur nur von einem zeugt: von dem großen Gott, ihrem Schöpfer. Was denkst du?";
}
if(juneday === 157){
    verse.innerHTML = "Ich (werde) deine Nachkommen sehr mehren, wie der Sand, der am Ufer des Meeres ist.";
    headline_texte.innerHTML = "Wie Sand am Meer ...";
    texte.innerHTML = "… nennen wir Dinge, die in großer Zahl, im Überfluss vorhanden sind. Dass diese Redewendung ihren Ursprung in der Bibel hat, dürfte nicht jedem bekannt sein. Noch weniger der Kontext, in dem sie zuerst in der Bibel vorkommt: Gott verspricht dem Patriarchen Abraham sehr viele Nachkommen – so viele „wie Sand am Meer”. Was veranlasst ihn dazu? Ganz einfach: Abraham glaubt, was Gott ihm versprochen, und tut, was Gott von ihm verlangt hat. Das nennt die Bibel Glaubensgehorsam. Im engeren Sinn stammen nicht nur alle Juden über Abrahams Sohn Isaak von Abraham ab, sondern auch die arabischen Völker über seinen Sohn Ismael. Der Apostel Paulus nennt Abraham sogar den Vater aller Glaubenden (vgl. Römer 4,11-18). So viele Nachkommen wie Abraham hat sonst kein Mensch. Wirklich eindrucksvoll, wie Gott sein Versprechen an Abraham gehalten hat!<br>​​​​​​​Dieser Gott hat sich nicht verändert: Er segnet bis heute Menschen, die ihm glauben und gehorchen.";
}
if(juneday === 158){
    verse.innerHTML = "Der Sohn des Menschen ist nicht gekommen, um bedient zu werden, sondern um zu dienen und sein Leben zu geben als Lösegeld für viele.";
    headline_texte.innerHTML = "Schon bezahlt";
    texte.innerHTML = "Du stehst in der Schlange zur Supermarktkasse und überschlägst den Wert deines vollen Einkaufswagens. Manches ist teurer geworden und du fragst dich, ob die Summe deine Haushaltskasse sprengen wird.<br>Nachdenklich legst du deinen Einkauf auf das Transportband. Die Kassiererin scannt alles ein und lächelt dich freundlich an: „Herzlichen Glückwunsch! Sie sind heute unser 500. Kunde und Ihr Einkauf ist komplett gratis!” Du kannst dein Glück kaum fassen! Alles schon bezahlt? Nicht zu glauben …<br>Ähnlich ist es mir mit meiner Sündenschuld ergangen, die ich im Lauf meines Lebens angehäuft hatte. Mit einem Unterschied: Ich hätte nicht eine Sünde bezahlen können. Aber die gute Nachricht ist: Jesus Christus hat für mich bezahlt!<br>„ Er hat gezahlt, was ich nicht zahlen konnte, er hat getan, was mir unmöglich war, er brachte mich zu Gott dem Vater, er starb für mich auf Golgatha.”";
}
if(juneday === 159){
    verse.innerHTML = "Indem ihr wisst, dass ihr nicht mit vergänglichen Dingen, mit Silber oder Gold, erlöst worden seid ... sondern mit dem kostbaren Blut Christi, als eines Lammes ohne Flecken und ohne Fehl.";
    headline_texte.innerHTML = "Lied & lebendig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Lied.";
}
if(juneday === 160){
    verse.innerHTML = "Ich, der Herr, dein Gott, ergreife deine rechte Hand, der ich zu dir spreche: Fürchte dich nicht, ich helfe dir!";
    headline_texte.innerHTML = "Gottes Hilfe";
    texte.innerHTML = "Wenn's nicht so läuft, wie du es gerne hättest, kann das frustrierend sein. Das geht übrigens auch denen so, die darauf vertrauen, dass Gott ihnen hilft. Egal, ob du Probleme in der Schule oder Ausbildung hast, im Studium, im Beruf, mit Freunden oder ob du dir einfach unsicher über die Zukunft bist – du kannst dich mit allem an Gott wenden, ihm im Gebet deine Sorgen und Ängste mitteilen und ihn um Hilfe bitten.<br>​​​​​​​Gottes Hilfe kann sehr unterschiedlich aussehen. Manchmal verändert er nicht gleich unsere Situation, sondern öffnet uns den Blick, um unser Problem mit einer anderen Einstellung zu sehen. Oder er zeigt uns einen Ausweg durch den Rat von Mitmenschen. Jedenfalls hilft Gott nicht immer so, wie wir es uns vorstellen. Vielleicht gibt er dir auch Herausforderungen, um dich näher zu ihm zu ziehen oder um dich zu stärken und reifen zu lassen. Denk daran, dass Gott immer für dich da ist und dir hilft. Vertrau ihm – es lohnt sich!";
}
if(juneday === 161){
    verse.innerHTML = "Wenn Gott für uns ist, wer gegen uns? Er, der doch seinen eigenen Sohn nicht verschont, sondern ihn für uns alle hingegeben hat – wie wird er uns mit ihm nicht auch alles schenken? ";
    headline_texte.innerHTML = "Lied & lebendig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Lied.";
}
if(juneday === 162){
    verse.innerHTML = "Nahe ist der HERR denen, die zerbrochenen Herzens sind, und die zerschlagenen Geistes sind, rettet er.";
    headline_texte.innerHTML = "Jesus ist nahe";
    texte.innerHTML = "Das Ehepaar auf der Rolltreppe vor mir, der Mann im Bus neben mir, die Frau in der Wohnung über mir – sie sind nahe und doch weit weg. Weil sie nur mein Äußeres sehen, mich aber nicht wirklich kennen oder verstehen. Weil sie nicht wissen, was mich quält und lähmt und weglaufen lässt. Doch einer ist da, der mir wirklich nahe ist, weil er mich kennt und versteht. Der mir zuhört und mir den Weg zeigt: Jesus, mein Herr! Er ist denen nahe, deren Herzen zerbrochen sind, die am Boden liegen, deren Liebe und Zuneigung mit Füßen getreten wurde. Deren Gedanken Karussell fahren. Versteht Jesus mich? Ja! Denn er wurde von seinen Feinden gehasst, von einem Bekannten verraten, einem Freund verleugnet, von allen verlassen. Er kann mitempfinden. Ich will mich zu ihm aufmachen, will ihm sagen, wie mir zumute ist. Und dann will ich hören, was er mir sagt und mir rät. Denn er meint es gut mit mir";
}
if(juneday === 163){
    verse.innerHTML = "Woher kommen Kriege und woher Streitigkeiten unter euch?";
    headline_texte.innerHTML = "Krieg am Gartenzaun";
    texte.innerHTML = "Seit dem Kriegsausbruch zwischen Russland und der Ukraine in 2022 verstehen wir als Otto Normalverbraucher die Welt nicht mehr. Wer hätte gedacht, dass ein Krieg in Europa nochmal so in unsere Nähe rückt? Wer hätte gedacht, dass die Rüstungsindustrie im Handumdrehen wieder boomt, Gelder freigesetzt werden und aufgerüstet wird? Das ist uns alles unbegreiflich. <br>Jeden Tag gehen wir unserer täglichen Arbeit nach, zahlen unsere Steuern, kleben uns nicht an der Straße fest, spenden, wo es nötig ist und nehmen unsere Verantwortung wahr. Ok, das Theater mit dem Nachbarn – das geht schon seit Jahren so. Da ist die rote Gartenlinie allerdings wirklich schon mehrfach durchbrochen worden – jetzt ist Schluss. Gut, dass man Rechtsschutz versichert ist ... <br>Woher kommen noch mal Kriege? „Aus euren Begierden” sagt Jakobus. Das gilt für die großen Kriege wie für die kleinen. Machen wir uns also nichts vor: In uns steckt dasselbe „Kriegspotential”!";
}
if(juneday === 164){
    verse.innerHTML = "Die Welt vergeht und ihre Lust; wer aber den Willen Gottes tut, bleibt in Ewigkeit.";
    headline_texte.innerHTML = "Ewigkeit im Herzen";
    texte.innerHTML = "Johann Gottlieb Fichte (1762–1814) konnte sich nicht vorstellen, dass „die gegenwärtige Lage der Menschheit ihre ganze und letzte Bestimmung” ist: „Ich äße nur und tränke, damit ich wiederum hungern und dürsten, und essen und trinken könnte, so lange, bis das unter meinen Füßen eröffnete Grab mich verschlänge, und ich selbst als Speise dem Boden entkeimte? Wozu dieser unablässig in sich selbst zurückkehrende Zirkel, in welchem alles wird, um zu vergehen, und vergeht, um nur wieder werden zu können?”<br>Nach über 200 Jahren stellen sich die Generationen immer noch dieselbe Frage: Wozu lebe ich? Nur, um wieder Nahrung für andere zu werden? Fichte hatte einen Ansatz für die Lösung: „In dem Gegenwärtigen kann mein Gemüt nicht Platz fassen, noch einen Augenblick ruhen; nach dem Künftigen und Bessern strömt unaufhaltsam hin mein ganzes Leben.” Das Künftige, Bessere findet sich allein in Gott und durch Glauben an Jesus, seinen Sohn.";
}
if(juneday === 165){
    verse.innerHTML = "Der Geist des Herrn ist auf mir, weil er mich gesalbt hat, Armen gute Botschaft zu verkündigen; er hat mich gesandt, Gefangenen Befreiung auszurufen und Blinden das Augenlicht, Zerschlagene in Freiheit hinzusenden, auszurufen das angenehme Jahr des Herrn.";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Abgelehnt";
    texte.innerHTML = "Jesus Christus ist in seinem Heimatdorf Nazareth. Hier ist er aufgewachsen. Am Samstag geht er in die Synagoge und liest aus dem Bibelbuch Jesaja die bewegenden Worte vor, die im Tagesvers stehen. „Heute ist diese Schrift vor euren Ohren erfüllt”, fügt er hinzu. Die Zuhörer wundern sich: Sollte dieser Jesus wirklich der Retter und Befreier sein, von dem dieser Bibelvers handelt? Unmöglich – das wollen sie nicht glauben! Für sie ist er nur der Sohn des Zimmermanns Joseph aus ihrem Dorf.<br>Jesus ergreift erneut das Wort und sagt seinen Zuhörern auf den Kopf zu, dass sie ihn am Ende ablehnen werden. Das Wort der Rettung und Befreiung gilt nur denen, die an ihn glauben würden. Wut macht sich breit und zeigt die ablehnende Haltung seiner Mitmenschen aus Nazareth. Sie packen ihn und stoßen ihn aus dem Dorf, bis an den Rand des Berges, um ihn dort in den sicheren Tod zu stürzen. Er aber geht einfach mit göttlicher Autorität durch ihre Mitte weg.";
}
if(juneday === 166){
    verse.innerHTML = "Die Hand unseres Gottes war über uns, und er rettete uns von der Hand des Feindes und des am Weg Lauernden.";
    headline_texte.innerHTML = "Der Faradaysche Käfig";
    texte.innerHTML = "Schon mal etwas vom Faradayschen Käfig gehört? Bestimmt aus dem Physikunterricht. Es handelt sich um eine allseitig geschlossene Hülle aus einem elektrischen Leiter (z. B. Drahtgeflecht oder Blech), die als elektrische Abschirmung wirkt (Wikipedia).<br>(Wikipedia). Schüler lernen, dass der sicherste Ort bei einem Gewitter der Innenraum eines Autos ist. Aus physikalischer Sicht ist ein Auto ein Faradayscher Käfig, dem keine noch so heftigen Blitze etwas anhaben können, so dass die Insassen gut geschützt sind. An diesen Schutzraum denke ich, wenn ich den Tagesvers lese. Unter der Hand Gottes ist man vor schädlichen Einflüssen, die manchmal wie Blitze auf uns niedergehen, bestens geschützt. Aber genau so, wie man bei einem Gewitter aktiv ins Auto steigen muss, muss man auch aktiv und aufrichtig den Schutz unter Gottes Hand aufsuchen. Esra hat es uns vorgemacht: Er lebte bewusst mit Gott und vertraute sich im Gebet ihm an.";
}
if(juneday === 167){
    verse.innerHTML = "Wenn wir allein in diesem Leben auf Christus Hoffnung haben, so sind wir die elendesten von allen Menschen. Nun aber ist Christus aus den Toten auferweckt ...";
    headline_texte.innerHTML = "Mensch & mutig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Einblick in das Leben eines Christen.";
}
if(juneday === 168){
    verse.innerHTML = "Wenn ihr nicht glaubt, dass ich es bin, so werdet ihr in euren Sünden sterben. Da sprachen sie zu ihm: Wer bist du? Jesus sprach zu ihnen: Durchaus das, was ich auch zu euch rede.";
    headline_texte.innerHTML = "Wer ist denn dieser … Jesus? (6)";
    texte.innerHTML = "Einige Gedanken haben wir uns schon über diesen Jesus gemacht, die Hauptperson der Bibel, der Mittler und Retter der Welt.<br>In den Auseinandersetzungen mit seinen Zeitgenossen weist der Sohn Gottes immer wieder darauf hin, dass er der ist, an den sie glauben müssen. Seine Worte und vor allem seine Wunderwerke haben die unwiderlegbaren Beweise geliefert, dass er der Christus ist, der Sohn Gottes<br>Doch da die Führer des Volkes es nicht wahrhaben wollen, fragen sie ihn: Wer bist du? Über die Antwort staunt man nicht schlecht. Jesus ist genau das, was seine Worte mitteilen: Er ist die Wahrheit.<br>Wer heute eine Person lediglich nach ihren Worten beurteilen würde, steht in Gefahr, sich zu täuschen. Denn wir Menschen tun gern groß.<br>Doch dieser Jesus ist anders als alle anderen. Er prahlt nicht und heuchelt nicht. Er ist vollkommen authentisch. – Je mehr ich über ihn nachdenke, umso mehr fühle ich mich zu ihm hingezogen.";
}
if(juneday === 169){
    verse.innerHTML = "Es hat ja Christus einmal für Sünden gelitten, der Gerechte für die Ungerechten.";
    headline_texte.innerHTML = "Wer ist dein Stellvertreter?";
    texte.innerHTML = "1941 tobt der Zweite Weltkrieg. Im Konzentrationslager in Auschwitz, in dem wohl mehr als eine Million Menschen einen grausamen Tod fanden, gelingt einem Häftling (angeblich) die Flucht. Als Vergeltung wählt der Lagerleiter willkürlich einige Männer aus, die für den Flüchtling sterben sollen. Als der Ehemann und Vater Franciszek Gajowniczek aufgerufen wird, bricht er in lautes Weinen aus. Da meldet sich plötzlich der katholische Priester Maximilian Kolbe: Er will für Gajowniczek in den berüchtigten Hungerbunker gehen. So wird Kolbe am 31. Juli 1941 mit den anderen Männern eingesperrt und zwei Wochen später mit der Giftspritze umgebracht.<br>Gajowniczek überlebte die Zeit im KZ Auschwitz und kehrte zu seiner Familie zurück. Weil ein anderer für ihn bestraft wurde und starb, kam er frei und durfte leben. – Für mich starb Jesus Christus am Kreuz. Weil ihn meine Strafe traf, bin ich freigesprochen und darf leben. Wer ist dein Stellvertreter?";
}
if(juneday === 170){
    verse.innerHTML = "Von verborgenen Sünden reinige mich!";
    headline_texte.innerHTML = "Mottenalarm!";
    texte.innerHTML = "Nichtsahnend öffne ich den Küchenschrank, als mir etwas hektisch Flatterndes entgegenkommt. Instinktiv klatsche ich nach dem Tier. Der Spuk ist aus! – Denke ich. Bis ich die Mehltüte öffne. Dann die Müslidose. Nudelpackungen. Gewürzbehälter. Überall Geflatter oder klumpige Gespinste mit winzigen Larven. Mich packt der Horror: Motten! Alles voller Motten! Puh – erstmal Schranktür zu … <br>Und was, wenn Gott uns beim Bibellesen antippt und gewissermaßen den „Küchenschrank” unseres Lebens aufmacht? Wenn uns die „Motten” unseres Lebens „entgegenflattern”, weil die Bibel uns zeigt, dass im Grunde unser ganzes Leben durchzogen ist von Eigenliebe, Arroganz oder Gier? <br>Google gab mir bezüglich der Mottenplage den Tipp: Alles rigoros wegschmeißen, Klebefallen aufstellen und Schlupfwespen kaufen. Diese winzigen Insekten bekämpfen Motten effektiv und nachhaltig. Noch besser als diese Nützlinge will Gott uns helfen, unser Leben nachhaltig von „verborgenen Sünden” zu befreien. Wenn wir wollen!";
}
if(juneday === 171){
    verse.innerHTML = "Wenn deine Worte sich auftun, erleuchten sie uns, dann finden selbst Unerfahrene Einsicht darin.";
    headline_texte.innerHTML = "Robinson Crusoe";
    texte.innerHTML = "Als Junge bekam ich mal zu Weihnachten Daniel Defoes weltbekannten Klassiker „Robinson Crusoe” in einer Nacherzählung für Kinder geschenkt. Ich war gefesselt von der spannenden Geschichte. Als Schiffbrüchiger auf eine einsame Insel verschlagen, muss Robinson das Überleben lernen. Später begegnet er wilden Tieren und Kannibalen! Zu den Dingen, die Robinson aus dem Schiff retten konnte, gehört auch eine Bibel. Die allerersten Worte, die er darin liest, sind: „Rufe mich an am Tag der Not, so will ich dich erretten.“ (Psalm 50,15). <br>Robinson merkt, dass die Bibel zu ihm spricht, und er beginnt täglich morgens und abends darin zu lesen. Das Bibellesen verändert ihn im Lauf der Geschichte mehr und mehr. Es macht ihn dankbar und glücklich und er beginnt sich selbst in Gottes Licht zu sehen <br>Auch wenn es nur ein Roman ist, muss Defoe, als er die Geschichte 1719 schrieb, gut verstanden haben: Die Bibel hat göttliche Kraft und verändert den, der sie liest. Bis heute!";
}
if(juneday === 172){
    verse.innerHTML = "Als ich täglich bei euch im Tempel war, habt ihr die Hände nicht gegen mich ausgestreckt; aber dies ist eure Stunde und die Gewalt der Finsternis.";
    headline_texte.innerHTML = "Seltsame Zeugen (1) – Prozesse";
    texte.innerHTML = "Jerusalem im Frühjahr 30. Das Passahfest stand bevor. Jesus war gerade verhaftet worden. Der Vorwurf: Gotteslästerung und Aufruhr gegen die Staatsgewalt. <br>In jedem ordentlichen Prozess gibt es Zeugen der Anklage und Zeugen der Verteidigung. Die Prozesse, die Jesus von Nazareth in jener Nacht und am Morgen des Freitags gemacht wurden, verstießen grundlegend gegen die Gesetze der Juden wie auch der Römer. Überall wurde mit falschen Zeugen und Falschaussagen gearbeitet. Es gab gar kein ordentliches Verfahren. Der Angeklagte hatte keinen Verteidiger. Und es waren keine Zeugen da, die für den Angeklagten sprechen wollten oder konnten. Der engste Jüngerkreis Jesu: ein Verräter, einer, der Jesus verleugnete, neun, die sich aus dem Staub machten. Ebenfalls nicht als Zeugen der Verteidigung vor Ort waren die vielen, denen Jesus Gutes getan hatte und die von ihm geheilt wurden.";
}
if(juneday === 173){
    verse.innerHTML = "Wer auf den Herrn vertraut, ist glückselig.";
    headline_texte.innerHTML = "Seines Glückes Schmied";
    texte.innerHTML = "„Jeder ist seines Glückes Schmied” ist eine Redensart, die Jahrtausende alt ist. Man meint also, Glück sei planbar und könne mittels Anstrengung „produziert” werden. Stimmt das? Jein. Wer auf der faulen Haut liegt und sich nicht „bewegt”, wird im Leben nichts bewegen. „Faulheit versenkt in tiefen Schlaf, und eine lässige Seele wird hungern”, sagt Salomo. Hungern ist Unglück pur. <br>Aber gibt es nicht auch Menschen, die ihr Glück nicht selbst schmieden mussten und trotzdem im Glück leben? Andererseits gibt es solche, die sich sehr angestrengt haben, die aber ein „Unglück” getroffen hat ... <br>Das größte Glück für Menschen ist, einmal die Ewigkeit bei Gott im Himmel zu verbringen. Dieses Glück erreichen wir allerdings nicht durch Leistung, sondern durch Glauben. Es ist für jeden zugänglich. An uns liegt es, ob wir es fassen.";
}
if(juneday === 174){
    verse.innerHTML = "Freue dich, Jüngling, in deiner Jugend, und dein Herz mache dich fröhlich in den Tagen deiner Jugendzeit, und wandle auf den Wegen deines Herzens ... doch wisse, dass für dies alles Gott dich ins Gericht bringen wird.";
    headline_texte.innerHTML = "Lesen & staunen";
    texte.innerHTML = "An dieser Stelle ist eigentlich eine Buchempfehlung.";
}
if(juneday === 175){
    verse.innerHTML = "Du bist der Christus, der Sohn des lebendigen Gottes!";
    headline_texte.innerHTML = "Wer ist denn dieser … Jesus? (7)";
    texte.innerHTML = "Dieser Jesus ist eine imponierende Person, oder? Je mehr wir von ihm erfahren, umso mehr wollen wir von ihm wissen. Und die Bibel berichtet sehr viel über ihn. Es lohnt sich, es selbst zu lesen.<br>Der heutige Bibelvers stammt aus einer Unterhaltung zwischen Jesus und seinen Jüngern. Jesus erkundigte sich bei seinen Jüngern, was die Menschen so von ihm dachten. Tatsächlich meinten die meisten, Jesus sei einer der früher lebenden Propheten. Dann richtet sich Jesus an seine engsten Begleiter: „Was sagt ihr?”. Petrus gibt eine beeindruckende Antwort – lies dazu noch einmal den Tagesvers, Wort für Wort.<br>Christus – das ist der Gesalbte (vgl. Folge 4). Aber „Sohn des lebendigen Gottes” ist neu, selbst für Petrus damals. In dem Moment bekommt er eine Offenbarung: Dieser Jesus war schon immer Gott, eben Gott, der Sohn. Hier steht also der Ewige in Person inmitten von sterblichen Menschen.<br><br>„Christus ist über allem, Gott, gepriesen in Ewigkeit. Amen.”<br>Römer 9,5";
}
if(juneday === 176){
    verse.innerHTML = "Ihr werdet die Wahrheit erkennen, und die Wahrheit wird euch frei machen.";
    headline_texte.innerHTML = "Becoming free";
    texte.innerHTML = "Stell dir vor: ein Leben ohne Lernstress, ohne Geldprobleme, ohne nervige Leute, die dir ständig sagen, was du machen sollst. <br>Aber wäre das Freiheit? Nicht wirklich. Denn da sind innere Zwänge, Ängste, Gier, negative Emotionen, Süchte. Nicht nur Nikotin und Alkohol, sondern auch Geld, Klicks und Anerkennung. Sogar der Traum vom perfekten Körper kann uns so beherrschen, dass Training, Styling oder Ernährung zum Zwang werden. Ganz zu schweigen von unseren Internet-Süchten: Shoppen, Zocken, Pornos, Netflix bis zum Screenitus. <br>​​​​​​​Jesus Christus war so anders als wir. Er hing an einem Holzkreuz, sein Rücken von Peitschenhieben aufgerissen, das Gesicht durch Schläge entstellt. Und was tat er? Er bat Gott, seinen Henkern zu vergeben! Äußerlich war er der Gefangene – doch innerlich war er frei. Seine Liebe triumphierte über ihren Hass. Bitte den Herrn Jesus, dich zu befreien. Vertraue ihm. Jemand, der Tote auferweckt hat und selbst aus den Toten auferstanden ist, hat auch die Macht, dich zu befreien.";
}
if(juneday === 177){
    verse.innerHTML = "Ich bin das Alpha und das Omega, spricht der Herr, Gott, der da ist und der da war und der da kommt, der Allmächtige.";
    headline_texte.innerHTML = "Der Allmächtige";
    texte.innerHTML = "Wirklich allmächtig ist nur Gott. Das bedeutet, dass er jederzeit zu allem in der Lage ist. Er ist dabei durch nichts und niemand beschränkt oder begrenzt. Nur wer an die Allmacht Gottes glaubt, wird die Bibel verstehen können. Dazu ein paar Beispiele:<br>In sechs Tagen hat Gott den Himmel und die Erde gemacht, das Meer, und alles, was in ihnen ist (1. Mose 1).<br>Gott spaltete das Rote Meer, damit ein Millionenvolk hindurchziehen konnte. Die Wasser standen dabei wie ein Damm (2. Mose 14).<br>Jesus Christus ging über den See, weil er es wollte und er befahl sogar einem seiner Jünger, ihm auf dem Wasser entgegenzugehen (Matthäus 14).<br>Jesus weckte einen Mann aus den Toten auf, der vier Tage zuvor gestorben war und durch die einsetzende Verwesung bereits übel roch (Johannes 11).<br>Alle Wunder und übernatürlichen Ereignisse, von der die Bibel berichtet, liegen in dem Willen und der Macht des Allmächtigen begründet.";
}
if(juneday === 178){
    verse.innerHTML = "So wähle das Leben, damit du lebst.";
    headline_texte.innerHTML = "Die Qual der Wahl";
    texte.innerHTML = "Es ist nicht immer einfach, Entscheidungen zu treffen. Denn wenn ich mich für etwas entscheide, entscheide ich mich zugleich gegen etwas anderes. Deshalb bin ich oft zögerlich, habe Angst vor einer falschen Entscheidung.<br>Solange es um alltägliche Dinge geht, sind die Folgen meist überschaubar. Manchmal gibt es auch eine zweitbeste Wahl. Zuweilen kann es auch einmal hilfreich sein, die notwendige Entscheidung noch etwas aufzuschieben.<br>Doch wenn es um wirklich Wichtiges geht, kann das Aufschieben verhängnisvolle Folgen haben. Wenn es um Fluch oder Segen, um Himmel oder Hölle geht, muss ich mich entscheiden. Dafür brauche ich natürlich auch eine gute Entscheidungsgrundlage, Fakten also. Deshalb kann man nur jeden überreden, die Bibel zu lesen und so die Fakten kennenzulernen. Wer dann über Jesus Christus, dessen Leben, Tod und Auferstehung liest, wird schnell merken, dass es nur eine richtige Entscheidung gibt ...";
}
if(juneday === 179){
    verse.innerHTML = "Kommt, folgt mir nach … Sie aber verließen sogleich die Netze und folgten ihm nach.";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Ihm folgen";
    texte.innerHTML = "Die Brüder Petrus und Andreas sind am See Genezareth und werfen die Netze ins Wasser, als Jesus ihnen begegnet. „Kommt, folgt mir nach, und ich werde euch zu Menschenfischern machen”, spricht er sie an. Sofort lassen sie alles stehen und liegen und gehen mit Jesus.<br>Ein wenig weiter am Ufer des Sees ein weiteres Brüderpaar: Jakobus und Johannes. Sie helfen ihrem Vater, die Fischernetze auszubessern. Auch sie werden von Jesus angesprochen und aufgefordert, ihm zu folgen. So wie Petrus und Andreas folgen auch sie unmittelbar diesem Aufruf und gehen mit Jesus. Ihr Vater bleibt mit einigen Hilfsarbeitern zurück.<br>Alle vier sind überzeugt: Es lohnt sich, die Komfortzone zu verlassen und mit Jesus zu gehen. Angezogen von dieser einmaligen Person bekommt ihr Leben eine völlig neue Ausrichtung und Perspektive.<br><br>„ Kommt, folgt mir nach!”<br>Matthäus 4,19";
}
if(juneday === 180){
    verse.innerHTML = "Mose machte eine Schlange aus Kupfer und tat sie auf die Stange; und es geschah, wenn eine Schlange jemand gebissen hatte, und er schaute auf zu der Schlange aus Kupfer, so blieb er am Leben.";
    headline_texte.innerHTML = "Äskulapstab";
    texte.innerHTML = "Die Bezeichnung „Äskulapstab” sagt dir vielleicht nichts – das medizinische Symbol hast du allerdings in Apotheken, Krankenhäusern, Arztpraxen schon oft gesehen: ein von einer Schlange umwundener Stab. Doch woher kommt dieses Symbol?<br>Eine mögliche Erklärung bietet ein Ereignis, das in der Bibel berichtet wird: Das Volk Israel hatte schwer gegen Gott gesündigt und zur Strafe schickte Gott eine Menge giftiger Schlangen. Durch die tödlichen Bisse schwebten viele Israeliten in Lebensgefahr. Gott beauftragte Mose, eine Schlange aus Kupfer zu machen und sie auf eine Stange zu tun. Jeder, der zur Schlange aufschaute, wurde geheilt. Doch längst nicht alle Betroffenen blickten zur Schlange – und starben deshalb. Ausgehend von dieser Geschichte, die seinen Zuhörern gut bekannt war, erklärte Jesus: „Wie Mose in der Wüste die Schlange erhöhte, so muss der Sohn des Menschen (damit meint Jesus sich selbst) erhöht werden, damit jeder, der ihn an glaubt, nicht verloren gehe, sondern ewiges Leben habe.” – Glaubst du schon?";
}
if(juneday === 181){
    verse.innerHTML = "Gott hat sein Volk (Israel) nicht verstoßen, das er zuvor erkannt hat.";
    headline_texte.innerHTML = "„Die Juden, Majestät!”";
    texte.innerHTML = "Friedrich der Große (1712–1786) war als ein Herrscher bekannt, der den christlichen Glauben ablehnte. Als er einmal seinen gläubigen Leibarzt verspotten wollte, forderte er diesen mit den Worten heraus: „Doktor, nenn' er mir einen Gottesbeweis, wenn er kann!” Aus der Not heraus entgegnete der Arzt das Erste, was ihm einfiel: „die Juden, Majestät!” <br>Hinter dieser spontanen Antwort steckt die beeindruckende Geschichte Israels. Die Geschichte eines Volkes, dem sich Gott in besonderer Weise zugewandt hat, das andererseits schon heftigste Feindschaft erlitten hat. Es ist eine Geschichte eines äußerlich kleinen Volkes und Landes und andererseits der Konfliktpunkt im Nahen Osten, an dem sich die Weltmächte scheiden. <br>Dass Israel heute überhaupt noch existiert, beweist, dass Gott selbst wirkt und dieses Volk nicht untergehen lässt, weil ihm noch eine herrliche Zukunft bevorsteht, wie die Bibel berichtet.";
}
if(juneday === 182){
    verse.innerHTML = "Durch ihn sind alle Dinge geschaffen worden, die in den Himmeln und die auf der Erde, die sichtbaren und die unsichtbaren.";
    headline_texte.innerHTML = "Wer ist denn dieser … Jesus? (8)";
    texte.innerHTML = "Extrem beeindruckend, was wir in der Bibel über diesen Jesus alles lesen. Und wir merken: Einerseits ist er wie wir, andererseits ganz anders: wahrer Mensch und zugleich Gott, der Sohn. Für uns unerklärbar – und doch wahr.<br>Im heutigen Bibelvers erfahren wir, dass dieser Jesus alles erschaffen hat. Nicht nur diese Erde. Nicht nur dieses Sonnensystem. Nicht nur dieses Universum. Alles. Wirklich alles – auch die unsichtbare Engelwelt. Den Makrokosmos und den Mikrokosmos.<br>Jemand drückt es so aus: „Ein ewiger Gott ist der Herr, der Schöpfer der Enden der Erde; ... unergründlich ist sein Verstand” (Jesaja 40,28).<br>​​​​​​​Dass Wissenschaftler aus dem Staunen nicht rauskommen, braucht uns nicht zu wundern. Alles zeugt von seiner Macht und Weisheit. Denn wer könnte solch eine Informationsdichte wie in der DNA kreieren? Wer könnte Planeten in exakt definierten Bahnen lenken? Alles zeugt von Intelligenz und Ordnung und von unserem Schöpfer Jesus Christus.";
}

// July
if(month === 7){
    janauryday = false;
    februaryday = false;
    marchday = false;
    aprilday = false;
    mayday = false;
    juneday = false;
    julyday = true;
    augustday = false;
    septemberday = false;
    octoberday = false;
    novemberday = false;
    decemberday = false;

    julyday = juneday+day;

    console.log(julyday);
}
if(julyday === 1){
    verse.innerHTML = "Der Gott, der sprach: Aus Finsternis leuchte Licht, ist es, der in unsere Herzen geleuchtet hat.";
    headline_texte.innerHTML = "Tohuwabohu!";
    texte.innerHTML = "Tohuwabohu. Dabei denken wir an chaotische Zustände, zum Beispiel um den Zustand eines Büros oder Kinderzimmers zu beschreiben. Aufräumen und Ordnung machen sind dann angesagt.<br>Ursprünglich stammt dieses Wort aus dem Hebräischen und ist der Bibel entnommen. „Im Anfang schuf Gott die Himmel und die Erde” – so beginnt der Schöpfungsbericht. Und gleich im Anschluss heißt es, dass die Erde „wüst und leer” (tohuwabohu) war.<br>Aber so ließ Gott die Erde nicht. An sieben Tagen schuf er eine wunderbare Erde für die Menschen. In seiner Allmacht brauchte er jeweils nur zu sprechen – und dann wurde es so, wie er befohlen hatte. Das Ergebnis sehen wir heute – alles zeugt von Schönheit und Ordnung.<br>​​​​​​​Gott sieht in unseren Herzen ein Tohuwabohu. Doch er will etwas Neues schaffen: „Wenn jemand in Christus ist, da ist eine neue Schöpfung; das Alte ist vergangen, siehe, Neues ist geworden“ (2. Korinther 5,17).";
}
if(julyday === 2){
    verse.innerHTML = "Was nützt es einem Menschen, wenn er die ganze Welt gewinnt und seine Seele einbüßt?";
    headline_texte.innerHTML = "Wer wird Millionär?";
    texte.innerHTML = "Seit 25 Jahren konfrontiert Günther Jauch seine Kandidaten mit Fragen aus verschiedenen Bereichen des menschlichen Wissens. Dabei sind es Kandidaten wie du und ich, die sich in seiner Show auf den „heißen Stuhl“ setzen: Männer und Frauen, Jüngere und Ältere, unterschiedliche Charaktere. Wir finden uns selbst wieder und fiebern mit. Doch so ungleich die Kandidaten auch sind, alle verfolgen dasselbe Ziel: eine möglichst große Summe gewinnen, bestenfalls die ganze Million.<br>Materieller Reichtum und Popularität scheint für viele ein erstrebenswertes Ziel zu sein, so dass der Erfolg der Show nicht abbricht. Doch was hätte man mit einer Million Euro „gewonnen”? Jedenfalls kein glückliches Leben, und körperliche Fitness kann man sich nur bedingt „kaufen”.<br>Jesus Christus ist arm geworden, damit wir durch seine Armut reich würden – reich in Bezug auf Gott. Er will uns ewiges Leben schenken, damit wir nicht eines Tages bettelarm vor Gott stehen und unsere Seele einbüßen.";
}
if(julyday === 3){
    verse.innerHTML = "Das Alte ist vergangen, siehe, Neues ist geworden.";
    headline_texte.innerHTML = "Eine zweite Chance?";
    texte.innerHTML = "Auf einer Klassenfahrt kam ich einmal mit einem Klassenkameraden ins Gespräch. Er war immer sehr verschlossen und redete wenig. Doch plötzlich sagte er mir: „Ich hoffe, dass ich noch einmal wiedergeboren werde auf diese Erde, denn ich lebe dieses Leben viel zu egoistisch.“ Er meinte wohl nicht, als irgendein Tier wiedergeboren zu werden, sondern wieder als ein Mensch. Obwohl wir damals erst in der 7. Klasse waren, sehnte er sich bereits nach einer zweiten Chance. <br>Hast du das auch schon mal gedacht? Die Bibel enttäuscht diese Hoffnung. Und doch gibt sie eine Hoffnung, die weit besser ist: Wir dürfen schon jetzt in diesem Leben neu anfangen. Nutze deine „zweite Chance”, indem du dich an Jesus Christus wendest. Wenn du ihn darum bittest, räumt er mit deinem alten, egoistischen Leben auf, schenkt dir Vergebung und neues Leben, das im Himmel seine ewige Heimat hat. Mehr kann uns niemand geben!";
}
if(julyday === 4){
    verse.innerHTML = "Die Augen des Herrn durchlaufen die ganze Erde …";
    headline_texte.innerHTML = "Ich sehe was, was du nicht siehst!";
    texte.innerHTML = "Als Kinder haben wir oft „Ich sehe was, was du nicht siehst“ gespielt. Ein einfaches Ratespiel, bei dem man anhand einer Farbe raten muss, was der andere sieht. „Ich sehe was, was du nicht siehst“ – das trifft in gewissem Sinn auch auf Gott und uns zu. Gott sieht alles, was auf der Erde passiert! Er sieht sogar unsere Gedanken. Er sieht mehr als wir, kennt uns besser als wir uns selbst. <br>Manche zucken bei diesem Gedanken zusammen. König David dagegen war äußerst dankbar, dass Gott alles weiß. Deshalb betete er: „Erforsche mich, Gott, und erkenne mein Herz, prüfe mich und erkenne meine Gedanken. Sieh, ob ein gottloser Weg mich verführt, und leite mich auf ewigem Weg” (Psalm 139,23.24). <br>​​​​​​​Wer mit Gott versöhnt ist, für den hat das Bibelwort des Tages eine schöne Fortsetzung: „Denn die Augen des Herrn durchlaufen die ganze Erde, um sich mächtig zu erweisen an denen, deren Herz ungeteilt auf ihn gerichtet ist.”";
}
if(julyday === 5){
    verse.innerHTML = "Jesus antwortete: ... Ich bin dazu geboren und dazu in die Welt gekommen, dass ich der Wahrheit Zeugnis gebe. Jeder, der aus der Wahrheit ist, hört meine Stimme.";
    headline_texte.innerHTML = "Lied & lebendig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Lied.";
}
if(julyday === 6){
    verse.innerHTML = "Niemals hat ein Mensch so geredet wie dieser Mensch.";
    headline_texte.innerHTML = "Wie reagierst du?";
    texte.innerHTML = "Jesus soll so schnell wie möglich von der Bildfläche verschwinden. Er ist den religiösen Führern Israels äußerst unangenehm, denn seine Worte schlagen bei ihnen ein wie Granaten: Ihre Heuchelei wird schonungslos aufgedeckt. Ihr religiöses System droht wie ein Kartenhaus zusammenzufallen. Für sie steht fest: Dieser Mann muss getötet werden. Aber auf keinen Fall wollen sie sich selbst die Finger schmutzig machen. Sie beauftragen ihre Diener, Jesus festzunehmen (Johannes 7,32). <br>Als die Diener von ihrem Auftrag zurückkehren, jedoch ohne Jesus, werden sie zur Rede gestellt. Ihre Antwort: „Niemals hat ein Mensch so geredet wie dieser Mensch.“ Nein, so etwas haben sie noch nie gehört. Sie merken: Jesus spricht Worte der Gnade und zugleich in göttlicher Vollmacht. Ihn können sie unmöglich festnehmen. <br>​​​​​​​Was lösen die Worte Jesu in der Bibel bei dir aus? Bewunderung, Zustimmung und Annahme oder eher Ablehnung und Ärger?";
}
if(julyday === 7){
    verse.innerHTML = "Gott widersteht den Hochmütigen, den Demütigen aber gibt er Gnade.";
    headline_texte.innerHTML = "Gerade & heraus";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Video.";
}
if(julyday === 8){
    verse.innerHTML = "Soll nicht das Ohr die Worte prüfen, wie der Gaumen für sich die Speise kostet?";
    headline_texte.innerHTML = "Erst prüfen – dann urteilen";
    texte.innerHTML = "Pastor Wilhelm Busch (1897–1966) war viele Jahre Jugendpastor im Weigle-Haus in Essen. Er erzählt, dass er einmal einen Mann kennenlernte, der von Gott und Glauben nichts wissen wollte. Eines Tages aber meinte dieser, wenn er auch sicher wäre, dass das Christentum Humbug wäre, so müsste er es doch fairerweise einmal prüfen. Was er da tun solle? Wilhelm Busch gab ihm ein Neues Testament und bat ihn, es einfach einmal vorurteilsfrei zu lesen. <br>Drei Monate später war der Mann wieder da und sagte: „Dieses Buch hat mich oft geärgert, dass ich es am liebsten weggeworfen hätte. Dann hat es mich beunruhigt, wie mich noch nie etwas beunruhigt hat. Aber es hat mich auch getröstet, wie mich noch nie etwas getröstet hat. Ab jetzt soll dieses Buch mein Lebensbuch werden.“ <br>​​​​​​​Es gibt Menschen, die urteilen über die Bibel – und haben sie noch nie gelesen. Das ist unfair. Ob sie vielleicht vor etwas Angst haben? – Hast du diesem Buch schon einmal erlaubt, zu dir zu reden?";
}
if(julyday === 9){
    verse.innerHTML = "Der Name des Herrn ist ein starker Turm; der Gerechte läuft dahin und ist in Sicherheit.";
    headline_texte.innerHTML = "Türmen gehen";
    texte.innerHTML = "Wenn Gefangene ausbrechen und das Weite suchen, sprechen wir heute vom „türmen“. Möglicherweise kommt diese Redewendung daher, dass sich die Gefängnisse in früheren Zeiten häufig in einem Turm einer Burganlage befunden haben. <br>Im Mittelalter hatte der Begriff „türmen“ jedoch noch eine andere Bedeutung. Der Bergfried, der höchste Turm einer Festung, diente besonders als Schutzturm. Wenn Feinde eine Burg angriffen, flüchteten sich die Bewohner in diesen Turm – man türmte vor dem Feind. Hinter den dicken Mauern des Turmes war man in Sicherheit <br>In der Bibel wird Gott mit einem solchen Schutzturm verglichen: „Du bist mir eine Zuflucht gewesen, ein starker Turm, vor dem Feind“ (Psalm 61,4), stellte David fest, nachdem Gott ihn in vielen Gefahren beschützt hatte. Gott ist derselbe geblieben – auch heute kann ich zu ihm türmen.";
}
if(julyday === 10){
    verse.innerHTML = "Glaube an den Herrn Jesus, und du wirst errettet werden.";
    headline_texte.innerHTML = "Von Autos und Christen";
    texte.innerHTML = "„Wer glaubt, ein Christ zu sein, weil er die Kirche besucht, irrt sich. Man wird ja auch nicht zum Auto, wenn man in eine Garage geht.“ (Albert Schweitzer)<br>Wahrscheinlich war dir die Sache mit dem Auto und der Garage auch schon klar, bevor du das Zitat gelesen hast.<br>Doch tatsächlich glauben immer noch viele Menschen, dass sie Christen sind, weil sie christlich leben. Was auch immer sie unter „christlich” verstehen ...<br>Die Bibel, das Wort Gottes, macht uns klar, wer ein echter Christ ist:<br>Erstens müssen wir uns eingestehen, dass wir Sünder sind und Rettung brauchen. Zweitens glauben wir an den Herrn Jesus Christus – an seinen Sühnetod und seine leibliche Auferstehung. Drittens erleben wir eine innere Veränderung: Wir empfangen neues, ewiges Leben und haben neue Interessen und eine neue Lebensausrichtung. Ab jetzt dreht sich alles um Jesus Christus und um meine persönliche Beziehung zu ihm.";
}
if(julyday === 11){
    verse.innerHTML = "Der Herr des Friedens gebe euch den Frieden allezeit auf alle Weise!";
    headline_texte.innerHTML = "Namen Gottes im Alten Testament – Jahwe-Shalom";
    texte.innerHTML = "Israelitisches Hügelland, ca. 1300 vor Christus. Jahr für Jahr kommen bewaffnete Truppen aus dem verfeindeten Nachbarvolk Midian und rauben die Ernteerträge – eine Strafe Gottes für das falsche Verhalten Israels. Vor diesem Hintergrund begegnet ein Engel Gottes einem Mann namens Gideon, der erstmal überfordert ist, als der Engel ihm sagt: „Der Herr ist mit dir, du tapferer Held!”. <br>Gideon wendet ein, dass es um ihn herum überhaupt nicht nach Gottes Beistand aussieht. Eher hat er den Eindruck, dass Gott sein Volk verlassen habe. Doch Gott hat einen großen Plan – er will das Elend in Israel beenden. Als der Engel dann Feuer vom Himmel fallen lässt, um zu beweisen, dass er im Auftrag Gottes zu Gideon gesprochen hat, bekommt Gideon Angst. Doch Gott ruft ihm die Worte „Friede dir!“ zu. Daraufhin baut Gideon einen Altar mit dem schönen Namen: JahweShalom (das bedeutet „Gott ist Frieden“). <br>Dieser Gott des Friedens ist heute noch derselbe!";
}
if(julyday === 12){
    verse.innerHTML = "Der Herr selbst nahm unsere Schwachheiten und trug unsere Krankheiten.";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – unermüdlicher Einsatz";
    texte.innerHTML = "Kapernaum. Jesus ist bei Petrus zu Hause. Besorgt wird er angesprochen, denn Petrus’ Schwiegermutter hat hohes Fieber. Jesus fasst ihre Hand und hilft ihr auf – sofort verlässt sie das Fieber. <br>Das ist nur einer von vielen Einsätzen des Herrn an diesem langen und vollen Arbeitstag. Nun wird es dunkel. Doch in dem Haus, wo Jesus sich befindet, wird es nicht ruhig. Im Gegenteil: Die Menschen im Dorf kommen und bringen ihre Kranken und Besessenen. Für Jesus ist kein Feierabend in Sicht. Barmherzig nimmt er sich ihrer an und hat Zeit für jeden. Dabei zeigt er tiefes Mitgefühl und ist innerlich berührt, wenn er heilt. So wie Hunderte Jahre vorher der Prophet Jesaja schon über Jesus geschrieben hat, trägt er die Schwachheiten und Krankheiten anderer <br>Die Nacht wird kurz. Als es noch dunkel ist, steht er auf, um zu beten, denn auch der nächste Tag wird ein Arbeitstag, an dem er sich wieder unermüdlich für die Menschen einsetzt.";
}
if(julyday === 13){
    verse.innerHTML = "Gott aber sei Dank, der uns den Sieg gibt durch unseren Herrn Jesus Christus!";
    headline_texte.innerHTML = "Heute vor genau 10 Jahren";
    texte.innerHTML = "Kaum zu glauben, dass es schon so lange her ist, aber am 13.07.2014 gewann Deutschland die Fußball-Weltmeisterschaft. Allein die Erwähnung weckt bei vielen die Erinnerung an das nervenzehrende Finale – bis Mario Götze Deutschland in der Verlängerung endlich zum Sieg schießt. <br>Abpfiff. Ein Feuerwerk der Emotionen geht los, Menschen liegen sich in den Armen. Tage und Wochen danach gute Stimmung; egal, ob man selbst überhaupt schon mal gegen einen Ball getreten hat – „WIR sind Weltmeister!“ <br>Heute bleibt nur noch eine blasse Erinnerung an den Erfolg von damals. Weder im Alltag noch bei wichtigen Lebens-Entscheidungen hilft dieser Sieg irgendjemandem weiter. Er verändert nichts. <br>Ein krasser Kontrast dagegen ist der Sieg, den Jesus Christus vor ca. 2000 Jahren durch seinen Tod und seine Auferstehung über Sünde, Tod und Teufel errungen hat. Ein Sieg, der bis heute Bedeutung hat. Ein Sieg, den Gott jedem anrechnet, der Jesus im Glauben annimmt. Ein Sieg, der alles verändert!";
}
if(julyday === 14){
    verse.innerHTML = "Wenn du durchs Wasser gehst, ich bin bei dir, und durch Ströme, sie werden dich nicht überfluten; wenn du durchs Feuer gehst, wirst du nicht versengt werden, und die Flamme wird dich nicht verbrennen.";
    headline_texte.innerHTML = "Wo ist Gott im Leid?";
    texte.innerHTML = "Wir saßen im sonnigen Colico am Comer See, als uns heute vor zwei Jahren die Nachricht erreichte, dass unser kleines Heimatdorf in NRW von einem schrecklichen Hochwasser geflutet worden war. Das Leben mancher unserer Freunde und Nachbarn wurde von einem Tag auf den anderen komplett erschüttert. Wie durch ein Wunder wurde unser eigenes Haus verschont. <br>In solchen Situationen kommt schnell die sogenannte Theodizee-Frage auf, die Menschen immer wieder beschäftigt: Wo ist Gott im Leid, wenn er doch allmächtig und gütig ist? Wo ist er, wenn Menschen ihre Existenz oder sogar Angehörige verlieren? Wo ist er, wenn Naturkatastrophen, Pandemien oder Kriege für Verzweiflung sorgen? <br>Als Christ habe ich darauf keine Patent-Antwort. Manches „Warum“ bleibt auch bei mir zurück. Aber eins habe ich erlebt: Gott lässt mich nie fallen. Gerade in der größten Not ist er bei mir und ich erfahre ihn noch viel intensiver als an „sonnigen” Tagen.";
}
if(julyday === 15){
    verse.innerHTML = "Alle Schrift ist von Gott eingegeben und nützlich zur Lehre, zur Überführung, zur Zurechtweisung, zur Unterweisung in der Gerechtigkeit.";
    headline_texte.innerHTML = "N wie Neues Testament";
    texte.innerHTML = "Gängige Abkürzung: NT<br>- zweiter Teil der Bibel, besteht aus 27 Büchern<br>- kann in vier Teile gegliedert werden:<br>a) Die vier Evangelien berichten über das Leben von Jesus Christus auf der Erde.<br>b) Die Apostelgeschichte berichtet von den ersten Jahren der Christenheit und der Verbreitung des Evangeliums im Mittelmeerraum.<br>c) Die Briefe enthalten Gottes Gedanken über das Leben als Christ und über die christliche Gemeinde.<br>d) Die Offenbarung ist ein prophetisches Buch; sie kündigt das Wiederkommen Jesu und das damit verbundene Gericht über diese Welt an.<br>- Das NT macht etwa 25% des Umfangs der Bibel aus.<br>- Es wurde ursprünglich in Altgriechisch verfasst.<br>​​​​​​​- Hauptaussage des NT: Jesus Christus ist der im Alten Testament angekündigte Messias, ist der Retter der Welt und das Haupt seiner Gemeinde.";
}
if(julyday === 16){
    verse.innerHTML = "Eine Frau, die zwölf Jahre mit einem Blutfluss behaftet war und vieles erlitten hatte … kam, als sie von Jesus gehört hatte … und rührte sein Kleid an … und sie merkte, dass sie von der Plage geheilt war.";
    headline_texte.innerHTML = "Welch ein Tag!";
    texte.innerHTML = "Zwölf Jahre dieselbe Krankheit, zahlreiche Ärzte aufgesucht, ein kleines Vermögen für Behandlungen und Medikamente ausgegeben – und doch keine Besserung in Sicht! Ein Leben lang durch selbstverschuldete Fehler und eigenes Versagen ein schlechtes Gewissen und kaum Lebensfreude, unzählige Male versucht, es besser hinzukriegen, in Ratgeber und Yoga-Kurse investiert – und doch keine Besserung in Sicht ...?! <br>An einen Tag konnte sich die Frau aus dem heutigen Tagesvers sicher ihr Leben lang bestens erinnern: Der Tag, an dem sie Jesus begegnete und durch den Kontakt mit ihm von ihrer Krankheit geheilt worden war. <br>Der Tag, an dem du mit Jesus in Kontakt kommst, ihm die „Krankheit” deines Lebens nennst und erfährst, dass er dich von Schuld befreit und dir ein neues Leben gibt – an diesen Tag wirst du dich dein Leben lang gerne erinnern!";
}
if(julyday === 17){
    verse.innerHTML = "Der Tor spricht in seinem Herzen: Es ist kein Gott!";
    headline_texte.innerHTML = "Atheismus, gefährliches Halbwissen";
    texte.innerHTML = "Man könnte sagen, dass der Atheist ein zutiefst gläubiger Mensch ist. Wie bitte, ein Gläubiger? Naja, ein Atheist glaubt immerhin an die Nicht-Existenz Gottes. Jetzt die Frage: Stützt sich dieser „Glaube” auf ein belastbares Fundament? Wie wahrscheinlich ist zum Beispiel die Nicht-Existenz eines Gottes angesichts eines unendlichen Universums? Zugegeben, auch ein Christ kann nicht den Gegenbeweis, nämlich den der Existenz Gottes erbringen, aber er hat eine Reihe von Indizien, die eine klare Sprache reden: Neben der Wahrheit der Bibel und dem menschlichen Gewissen, das zwischen Gut und Böse unterscheidet, beweist Gott nicht zuletzt durch die Schöpfung seine ewige Kraft und Göttlichkeit (vgl. Römer 1,19.20). Der deutsche Physiker und Nobelpreisträger Werner Heisenberg sagte schon vor fast 100 Jahren: „Der erste Trunk aus dem Becher der Naturwissenschaften macht atheistisch; aber auf dem Grund des Bechers wartet Gott.";
}
if(julyday === 18){
    verse.innerHTML = "Während er aber auf dem Richterstuhl saß, sandte seine Frau zu ihm und ließ ihm sagen: Habe du nichts zu schaffen mit jenem Gerechten; denn viel habe ich heute im Traum gelitten um seinetwillen.";
    headline_texte.innerHTML = "Seltsame Zeugen (2) – Herrscher";
    texte.innerHTML = "Als Jesus aufgefordert wird, sich gegen die falschen Anklagen der religiösen Oberschicht der Juden zu verteidigen, schweigt er. Die weltlichen Machthaber, die Jesus von Nazareth beurteilen sollen, sind ziemlich ratlos. Der amtierende Vierfürst von Galiläa, Herodes Antipas, kommt nicht weiter, verspottet ihn und bekleidet ihn mit einem weißen Gewand (Lukas 23,7- 12), was so viel heißt wie „nicht ernst zu nehmen, aber harmlos“. Pilatus bezeugt mehrfach: Ich finde keine Schuld an ihm (Johannes 18,38; 19,6). Pilatus‘ Frau schickt ihm eine warnende Botschaft: Pilatus soll sich an dem unschuldigen Angeklagten nicht schuldig machen (Matthäus 27,19).<br>Die religiöse Oberschicht der Juden schäumt vor Hass. Und die Menge der Menschen in Jerusalem lässt sich so aufhetzen, dass sie Jesu Verurteilung fordern. Keinem von ihnen hat Jesus jemals etwas zuleide getan. Und keiner von ihnen kann irgendwie neutral bleiben. Auch du heute übrigens nicht!";
}
if(julyday === 19){
    verse.innerHTML = "Fürchte dich nicht; glaube nur.";
    headline_texte.innerHTML = "Nur durch Glauben";
    texte.innerHTML = "„Nur“ – ein kleines Wörtchen, aber je nach Kontext von entscheidender Bedeutung. Wenn du zum Beispiel durch die Berge fährst und zu einem bestimmten Ort möchtest, dann geht das oft „nur“ über einen Pass. Eine Alternative gibt es nicht. Martin Luther hat eine ähnliche Erfahrung auf der Suche nach dem lebendigen Gott gemacht. Er strengte sich an, tat gute Werke, aber nichts brachte ihm den ersehnten Frieden mit Gott. Als Luther nach vielen inneren Kämpfen in der Bibel las, dass der Gerechte aus Glauben leben wird, begriff er, was das Mittel ist, um errettet zu werden: Der Glaube an den Herrn Jesus, seinen Tod und seine Auferstehung – „nur“ darauf kommt es an. <br>In Galater 2,16 wird bestätigt, dass der Mensch nicht durch gute Werke, das Halten der 10 Gebote oder sonstigen Anstrengungen gerecht vor Gott sein wird, sondern „nur durch den Glauben an Jesus Christus“.";
}
if(julyday === 20){
    verse.innerHTML = "Um unserer Übertretungen willen war er verwundet, um unserer Ungerechtigkeiten willen zerschlagen. Die Strafe zu unserem Frieden lag auf ihm, und durch seine Striemen ist uns Heilung geworden.";
    headline_texte.innerHTML = "Lesen & staunen";
    texte.innerHTML = "An dieser Stelle ist eigentlich eine Buchempfehlung.";
}
if(julyday === 21){
    verse.innerHTML = "Wir sind versetzt in das Reich des Sohnes seiner Liebe!";
    headline_texte.innerHTML = "Wer ist denn dieser … Jesus? (9)";
    texte.innerHTML = "Sich mit diesem Jesus zu befassen, ist echt unerschöpflich. Gottes Wort, die Bibel, ist voll von dieser wunderbaren Person. Unser Tagesvers spricht von einer Vater-Sohn-Beziehung. Eine Beziehung, die von Liebe geprägt ist. Gott liebt diesen Jesus, er ist der Sohn seiner Liebe – vor Erschaffung der Welt, heute und in Ewigkeit. <br>Als Jesus hier auf der Erde war, gab es zwei besondere Momente, wo Gott ausdrücklich mitteilte, dass er seinen Sohn liebt: als Jesus sich taufen ließ und als er mit drei Jüngern auf dem Berg war. Jedes Mal war zu hören: „Dieser ist mein geliebter Sohn, an dem ich Wohlgefallen gefunden habe” (Matthäus 3,17; 17,5). <br>Jesus, der Sohn Gottes, wusste sich immer von seinem himmlischen Vater geliebt. Und als er am Kreuz sein Leben ließ, gab er seinem Vater einen weiteren Anlass, ihn zu lieben (vgl. Johannes 10,17). Denn damit ging der Plan Gottes in Erfüllung: erlöste Menschen als seine Kinder zu lieben.";
}
if(julyday === 22){
    verse.innerHTML = "Jesus spricht: Ich gebe ihnen ewiges Leben, und sie gehen nicht verloren in Ewigkeit, und niemand wird sie aus meiner Hand rauben.";
    headline_texte.innerHTML = "Hier kommt keiner lebend raus";
    texte.innerHTML = "Ein kleiner Junge sitzt in der Nähe einer Kirchentür. Aufmerksam beobachtet er, was dort vorgeht. Ein Brautpaar tritt aus dem Eingang, gefolgt von einer fröhlichen Hochzeitsgesellschaft. Schon kurze Zeit darauf eine Beerdigung. Schwarz gekleidete Menschen folgen einem mit Blumen geschmückten Sarg. Der kleine Junge stellt tiefsinnig fest: „Hier kommt keiner lebend raus!“<br>Im ersten Moment möchte man grinsen, doch das Grinsen gefriert schnell im Gesicht. Es ist ja wahr, aus diesem Leben kommt keiner lebend heraus! Daran ändern weder Jugendwahn noch engagierte Forschung, weder Kryoschlaf noch Apparatemedizin etwas. Der – im Übrigen zweifelhafte – Traum von der Unsterblichkeit ist so fern wie eh und je. Darum ist es so unendlich wichtig, für das Leben nach diesem Leben vorzusorgen. Denn im Gegensatz zum irdischen Leben ist es tatsächlich ewig. Du hast die Wahl zwischen ewiger Finsternis und Gottesferne und ewigem Leben bei Gott im Licht!";
}
if(julyday === 23){
    verse.innerHTML = "Der Herr ist mein Hirte, mir wird nichts mangeln.";
    headline_texte.innerHTML = "Der Herr – mein Hirte?";
    texte.innerHTML = "Die Bibel benutzt das Bild eines Hirten und seiner Herde, um uns etwas Schönes zu zeigen: Ein Hirte kümmert sich 24/7 um seine Schafe und kennt jedes Einzelne ganz genau. Seine Aufgabe ist es, sicherzustellen, dass es den Schafen gut geht und sie ausreichend Nahrung und Wasser bekommen. Damit das funktioniert, müssen die Tiere die Stimme des Hirten kennen, ihm vertrauen und gehorchen. Hirte und Schaf haben eine vertraute Beziehung. <br>Und in solch einer Beziehung darfst du auch mit Gott leben: Du kannst ihn in der Bibel kennenlernen, seine Stimme hören und die Erfahrung machen, dass er sich um dich kümmert und dafür sorgt, dass es dir gutgeht. Du darfst ihm bedingungslos vertrauen. <br>König David aus dem Alten Testament konnte mit Überzeugung sagen: <br>„Der Herr ist mein Hirte, mir wird nichts fehlen.“";
}
if(julyday === 24){
    verse.innerHTML = "Nicht mehr lebe ich, sondern Christus lebt in mir.";
    headline_texte.innerHTML = "Was macht den Unterschied?";
    texte.innerHTML = "Viele Nicht-Christen leben in kaputten Beziehungen. Christen auch. Nicht-Christen sind oft süchtig nach Geld, Likes, Pornos etc. Christen auch. Nicht-Christen posten Hate-Kommentare. Christen auch. <br>Es kommt nicht darauf an, ob auf deinem Etikett „Christ“ oder „Nicht-Christ“ steht. Christen sind im Schnitt kein bisschen besser als der Rest. Sie haben dieselben Macken. Hängen in denselben Süchten fest. Praktizieren dieselben Sünden. <br>Klar gibt es auch noch anständige Christen (genauso wie es anständige Nicht-Christen gibt). Vielleicht nennst du dich „Christ” und lebst anständig; vielleicht beeindruckst du die Leute deiner Gemeinde mit einem krassen Gesangstalent oder den besten Zimtschnecken weit und breit. Aber das ist nicht das Entscheidende für einen Christen. Ein echter Christ weiß, dass Jesus Christus in seinem Herzen lebt. Und das zeigt sich dann auch in seinem Verhalten: Er ist zwar nicht tadellos, meidet aber alles Böse und lebt für Christus.";
}
if(julyday === 25){
    verse.innerHTML = "Innerlich bewegt streckte Jesus seine Hand aus, rührte ihn an und sprach: Ich will; werde gereinigt!";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Gereinigt";
    texte.innerHTML = "Ein Mann geht auf Jesus zu. Ihn plagt seit langem eine furchtbare Krankheit. Er hat Aussatz (Lepra) – und das im fortgeschrittenen Stadium. Diese Krankheit ist hochansteckend und er verbringt sein Leben in sozialer Isolation. Niemandem darf er sich nähern, ohne warnend zu rufen: „Unrein, unrein!“ Chancen auf Heilung gibt es nicht. Oder vielleicht doch? <br>Er hat von Jesus und seinen wunderbaren Heilungen gehört. Jetzt fasst er sich ein Herz: Trotz seiner ansteckenden Krankheit geht er zu ihm hin. Wie wird Jesus reagieren? Einen Schritt zurückgehen? Ihn wegschicken? <br>Der Kranke fällt vor Jesus auf die Knie und sagt: „Wenn du willst, kannst du mich reinigen.“ Jesus ist bewegt. Dann geschieht das Unglaubliche: Jesus fasst ihn an! Ihn, den hochansteckend Kranken! Dann sagt er: „Ich will; werde gereinigt!“ Die Krankheit verschwindet sofort und für den ehemals unheilbar kranken Menschen beginnt ein neues Leben.";
}
if(julyday === 26){
    verse.innerHTML = "Alles hat Gott schön gemacht zu seiner Zeit; auch hat er die Ewigkeit in ihr Herz gelegt, ohne dass der Mensch das Werk, das Gott gewirkt hat, von Anfang bis Ende zu erfassen vermag.";
    headline_texte.innerHTML = "You only live once!";
    texte.innerHTML = "Dein Leben ist einmalig. Du kannst es nur einmal leben. Und es ist kurz. Was machst du daraus? <br>Vielleicht hast du großartige Lebenspläne, träumst von Reisen, einer glänzenden Karriere, der großen Liebe. Womöglich kämpfst du für Toleranz und Weltfrieden oder für die Zukunft unseres Planeten. Vielleicht ist es auch nur der Moment, der für dich zählt: Einfach Spaß haben und das Leben genießen ... <br>Kannst du also mit deinem Leben machen, was du willst? Das hängt davon ab, wo es herkommt. Wenn du nur ein Abfallprodukt des Urknalls wärest, ein unbedeutendes Nichts in einem unbedeutenden Universum – dann wäre dein Leben sinnfrei. <br>Aber spürst du es nicht? Tief in dir ist ein Durst nach mehr. Eine Sehnsucht nach Sinn. Eine leise Ahnung, dass das, was du siehst und fühlst, nur ein kleiner Ausschnitt einer viel größeren Wirklichkeit ist. Du bist ein Original Gottes – gewollt und liebevoll designt. Warum und wozu? Am besten, du fragst ihn selbst! Die Bibel hilft dir weiter ...";
}
if(julyday === 27){
    verse.innerHTML = "Hierin ist die Liebe: nicht dass wir Gott geliebt haben, sondern dass er uns geliebt hat und seinen Sohn gesandt hat als Sühnung für unsere Sünden.";
    headline_texte.innerHTML = "Lass Gottes Liebe dich erfüllen";
    texte.innerHTML = "Ein letzter Klick auf Instagram. Wow, dieses Selfie ist echt bombastisch. Und so viele Likes! Kein Wunder bei diesem hinreißenden Lächeln und der genialen Bildbearbeitung. Zufrieden sinkst du ins Bett. <br>Am nächsten Tag holt dich die Realität ein. Ein Rüffel, ein Missgeschick, dazu diese ätzenden perfekten Leute, die schöner, schlauer und beliebter sind als du. Miese Unzufriedenheit macht sich breit. Likes und Komplimente stillen den Liebeshunger nicht. Ist keiner da, der dir geben kann, was dir fehlt? Ist Selbstliebe eine Alternative? Nein, denn allein kriegst du deine liebeshungrige Seele niemals satt. <br>Die Alternative dazu haben Menschen vor 2000 Jahren gekreuzigt: Jesus Christus – Gottes Liebe in Person. Hätte er sich selbst geliebt, wäre er im Himmel geblieben. Doch er liebte sich nicht selbst – er liebte dich. Er ist diesen schrecklichen Tod gestorben, weil er dich von deinen Sünden retten will. Sein Opfer ist der größte Liebesbeweis, den Gott dir machen kann. Gottes Liebe – das ist es, was du brauchst!";
}
if(julyday === 28){
    verse.innerHTML = "Der Sohn des Menschen ist nicht gekommen, um bedient zu werden, sondern um zu dienen und sein Leben zu geben als Lösegeld für viele!";
    headline_texte.innerHTML = "Wer ist denn dieser … Jesus? (10)";
    texte.innerHTML = "In welcher Würde haben wir diesen Jesus nicht schon in dieser Serie gesehen: als Sohn Gottes, als Schöpfer, als Messias ... <br>Der Bibelvers heute scheint das Gegenteil von Würde auszusagen: Jesus ist Diener. Er lebte hier nicht als ein reicher König. Er ließ sich auch nicht bedienen. Er war der „Diener aller“ (vgl. Markus 9,35). Er war sich nicht zu schade, seinen Jüngern einzeln die Füße zu waschen, wie es im Orient Sitte war. Er half Menschen, wo immer es nötig und „dran“ war, und zwar oft gerade denen, die am Rand der Gesellschaft unterwegs waren. <br>Hätte es ihm als Sohn Gottes nicht zugestanden, bedient zu werden? Doch! Er hätte auch die Macht gehabt, seinen mühsamen Dienst abzukürzen und zurück in den Himmel zu gehen. Aber er wollte nicht. Der Höhepunkt seines Dienstes war, dass er sein Leben als Lösegeld für viele Menschen gab. Niedriger kann kein Dienst sein, aber auch nicht herrlicher. Was für eine Würde strahlt dieser Jesus aus!";
}
if(julyday === 29){
    verse.innerHTML = "Das Wort Gottes ist lebendig und kräftig … und dringt durch, bis es scheidet Seele und Geist, auch Mark und Bein, und ist ein Richter der Gedanken und Sinne des Herzens.";
    headline_texte.innerHTML = "Durch Mark und Bein";
    texte.innerHTML = "Ob Schreck, Schmerz oder Ton, der „durch Mark und Bein“ geht – immer ist das unangenehm, meist sogar unerträglich. Die Redensart „durch Mark und Bein” stammt aus dem Tagesvers nach der Lutherübersetzung. <br>Wie kann das Wort Gottes, die Bibel, durch „Mark und Bein“ gehen? Wenn du die Bibel liest und darüber nachdenkst, merkst du, wie es ans Eingemachte geht: Du erkennst dein Inneres, deine Beweggründe, deine Einstellungen, deine Lebensziele. Es geht nicht darum, dich zu verletzen, sondern dir zu helfen! <br>Genauso ist es bei einer ärztlichen Untersuchung. Nur wenn man den Beschwerden auf den Grund geht, kann einem geholfen werden. Schönreden oder um den heißen Brei reden, hilft nicht weiter. <br>Beim Bibellesen untersucht Gott dich sozusagen. Ihm geht es aber zuallererst um dein Inneres, um deine unsterbliche Seele. Auch wenn seine Diagnose dir „durch Mark und Bein geht“ vertraue ihm und tu was er dir sagt!";
}
if(julyday === 30){
    verse.innerHTML = "In allem bedrängt, aber nicht eingeengt; keinen Ausweg sehend, aber nicht ohne Ausweg.";
    headline_texte.innerHTML = "Licht am Ende des Tunnels";
    texte.innerHTML = "Krise, Krise und nochmal Krise. Weltweit, in Europa, in Deutschland, in deinem und meinen Privatleben. Immer wieder kommen wir in Situationen – oder stecken drin fest –, in denen wir uns nach dem sprichwörtlichen „Licht am Ende des Tunnels“ sehnen. <br>Auch der Apostel Paulus kannte solche dunklen Zeiten der Ratlosigkeit. Er wusste, wie es sich anfühlt, wenn man einfach nicht mehr weiterweiß, wenn kein Licht am Ende des Tunnels in Sicht ist. <br>Das Statement im Tagesvers zeigt jedoch, dass der leidgeprüfte Paulus zwar manchmal ratlos, aber nicht perspektivlos war. Er wusste, dass über dem Tunnel der allmächtige Gott steht, dem er vertrauen konnte: Wenn Gott ihn in eine beengende, vermeintlich ausweglose Situation hineingebracht hatte, dann würde er ihn auch wieder herausführen. So hatte Paulus gewissermaßen ständig das Licht am Ende des Tunnels vor Augen, auch wenn er nicht wusste, wie weit es bis dahin noch war.";
}
if(julyday === 31){
    verse.innerHTML = "Jesus Christus gab sich selbst als Lösegeld für alle.";
    headline_texte.innerHTML = "Wie werde ich meine Schuld los?";
    texte.innerHTML = "0%-Finanzierungen, Ratenkäufe, Rückwärtssparen – Schulden machen ist heute einfacher denn je. Ob mit oder ohne Gegenwert, egal, jetzt wollen wir uns den Wunsch erfüllen. <br>Dabei sind Schulden – wie leicht sie einem auch gemacht werden – eine Last. Man muss sie zurückzahlen und das oft länger als gewünscht. <br>Mit der nicht-finanziellen Lebensschuld verhält es sich ähnlich. Allerdings mit dem belastenden Unterschied, dass man diese Schuld nicht zurückzahlen kann. Sie kann unheimlich drückend sein. Man häuft sie auf, man versucht, sie zu vergessen, aber irgendwann ist sie plötzlich wieder präsent. Was würde man nicht alles geben, um sie irgendwie loszuwerden! <br>Du brauchst gar nichts zu geben – keine Spenden, keine guten Taten, nichts! Jesus Christus hat bereits für dich bezahlt und will dich schuldenfrei machen. Allerdings musst du ihm deine Schuld aufrichtig bekennen und das Lösegeld annehmen.";
}

// August
if(month === 8){
    janauryday = false;
    februaryday = false;
    marchday = false;
    aprilday = false;
    mayday = false;
    juneday = false;
    julyday = false;
    augustday = true;
    septemberday = false;
    octoberday = false;
    novemberday = false;
    decemberday = false;

    augustday = julyday+day;

    console.log(augustday);
}
if(augustday === 214){
    verse.innerHTML = "Du bist ein Gott, der mich sieht.";
    headline_texte.innerHTML = "Ansehen";
    texte.innerHTML = "Auch wenn es nicht jedem vergönnt ist - hoch angesehen zu werden, mögen wir. Deshalb bewundern wir Promis und folgen Influencern. <br>Für Jesus zählte kein Ansehen der Person: weder Stellung, Job noch Name. Er begegnete jedem Menschen mit den besten Absichten, niemand wurde von ihm gefeiert und niemand gedisst. Für den hochgestellten Geistlichen namens Nikodemus hatte er ein Wort, das ihn auf den Boden der Tatsachen brachte und zugleich zum geistlichen Durchbruch verhalf. Der Frau, die am Rand der Gesellschaft lebte und ihr Glück in fünf Ehen gesucht hatte, stillte er ihren Lebensdurst. <br>Mit derselben Liebe begegnet Jesus Christus auch dir. Er schaut heute vom Himmel auf die Menschen. Er ist ein Gott, der dich sieht und dem du wichtig bist! Er liebt dich unabhängig von deinem Ansehen bei Menschen. Er will dein Glück!";
}
if(augustday === 215){
    verse.innerHTML = "Und seid dankbar.";
    headline_texte.innerHTML = "Lied & lebendig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Lied.";
}
if(augustday === 216){
    verse.innerHTML = "Der König sprach zu den Dienern: Bindet ihm Füße und Hände und werft ihn hinaus in die äußerste Finsternis: Dort wird das Weinen und das Zähneknirschen sein.";
    headline_texte.innerHTML = "Himmel? Oder Hölle?";
    texte.innerHTML = "Manche Menschen halten den Himmel für langweilig, andere, vielleicht auch dieselben, erwarten in der Hölle Party, Spaß und Gesellschaft. Alles das ist falsch. <br>Die Bibel teilt uns mit, dass es im Himmel herrlich ist, während die Hölle schrecklicher ist als der schlimmste Platz, den man sich denken kann. <br>Der Himmel ist der Wohnort Gottes. Da ist Leben, Frieden und Freude. In der Hölle dagegen wird absolute Einsamkeit sein. Dort wird Weinen und Zähneknirschen sein: über verpasste Gelegenheiten, aufgeschobene Entscheidungen und Gleichgültigkeit. Ein Ort der Strafe – und das ewig, ohne jede Chance auf eine Änderung. <br>Die Entscheidung, wo ich die Ewigkeit verbringe, habe ich nur hier im Leben. Danach ist es zu spät, ewig zu spät. Deshalb: Heute, wenn du Gottes Stimme hörst, verhärte bitte dein Herz nicht (Hebräer 4,7)! Sonst könnte es für dich zu spät sein.";
}
if(augustday === 217){
    verse.innerHTML = "Da fragte Jesus sie wieder: Wen sucht ihr? Sie aber sprachen: Jesus, den Nazaräer. Jesus antwortete: Ich habe euch gesagt, dass ich es bin; wenn ihr nun mich sucht, so lasst diese gehen!";
    headline_texte.innerHTML = "Jesus, mein Stellvertreter";
    texte.innerHTML = "Jesus Christus ist mit seinen Jüngern im Garten Gethsemane: Es ist die Nacht vor dem Tag der Kreuzigung und die Soldaten sind gekommen, um ihn festzunehmen. Er fragt sie, wen sie suchen. Auf ihre Antwort: „Jesus, den Nazaräer”, sagt er: „Ich bin es.” Da weichen sie zurück und fallen zu Boden. <br>Jesus fragt sie in zweites Mal: „Wen sucht ihr?”, und wieder antworten sie: „Jesus, den Nazaräer.” Diesmal fügt Jesus seiner Antwort: „Ich bin es”, ein bemerkenswertes Wort hinzu: „Wenn ihr nun mich sucht, so lasst diese [die Jünger] gehen!“ <br>​​​​​​​Damit stellt Jesus sich schützend vor seine Jünger. Er ist bereit sich festnehmen zu lassen und dann am Kreuz zu sterben. Aber seine Jünger sollen nicht angetastet werden. Was für eine aufopfernde Liebe zeigt Jesus gegenüber seinen Jüngern! Weil er in die Bresche springt, können sie gehen. Auch für mich trifft das zu: Weil Jesus starb, bin ich erlöst.";
}
if(augustday === 218){
    verse.innerHTML = "Gott hat uns nicht einen Geist der Furchtsamkeit gegeben, sondern der Kraft und der Liebe und der Besonnenheit.";
    headline_texte.innerHTML = "Besonnenheit";
    texte.innerHTML = "Besonnenheit ist ein Wort, das laut Duden nicht besonders häufig im allgemeinen Sprachgebrauch ist. Als Synonyme werden angeführt: Überlegtheit, Umsicht, Bedachtheit, darüber hinaus auch Disziplin, Selbstbeherrschung.<br>Besonnenheit ist eine Eigenschaft, die einen Menschen kennzeichnet, der mit Gott lebt; ein Christ ist von sich aus nicht unbedingt weise und besonnen, weiß aber um die Tatsache, die im Tagesvers ausgedrückt ist: Gott gibt seinen Leuten einen Geist der Besonnenheit – gegen hilfloses und kopfloses Agieren, um schwierige Fragen oder Problemstellungen weise abwägen zu können, statt sämtlichen Fake News und jeder Desinformation schutzlos aufzusitzen.<br><br>Wenn aber jemand von euch Weisheit mangelt, so erbitte er sie von Gott, der allen willig gibt und nichts vorwirft, und sie wird ihm gegeben werden.<br><br>Jakobus 1,5";
}
if(augustday === 219){
    verse.innerHTML = "Da sprach Gott zu Mose: „Ich bin, der ich bin.“ Und er sprach: So sollst du zu den Kindern Israel sagen: „Ich bin“ hat mich zu euch gesandt.";
    headline_texte.innerHTML = "Der Ewige";
    texte.innerHTML = "Wer ist Gott? Wie ist Gott? Wie kann man ihn nennen oder beschreiben? Gott selbst gibt auf diese Fragen die Antwort: „Ich bin, der ich bin.“ Respekt! In dieser Aussage steckt Erhabenheit. <br>Gott sagt es nicht ungeduldig und genervt, so wie Eltern ihren Kindern manchmal auf ihre unzähligen Warum-Fragen antworten: „Es ist, wie es ist; du verstehst es sowieso nicht.“ Nein, hier enthüllt er etwas von seinem Wesen: Er war immer, existiert jetzt und wird immer sein. Er ist das Leben und die Kraft, die hinter allem steht. Er ist ewig. Wenn um uns herum alles variabel und relativ wird – Gott bleibt konstant und absolut. Gott ist treu, auf ihn ist Verlass. <br>​​​​​​​„Du, Herr, hast im Anfang die Erde gegründet, und die Himmel sind Werke deiner Hände. Sie werden untergehen, du aber bleibst; und sie alle werden veralten wie ein Gewand, und wie einen Mantel wirst du sie zusammenrollen, und sie werden verwandelt werden. Du aber bist derselbe, und deine Jahre werden nicht vergehen” (Hebräer 1,10-12).";
}
if(augustday === 220){
    verse.innerHTML = "Ihr gingt in der Irre wie Schafe, aber ihr seid jetzt zurückgekehrt zu dem Hirten und Aufseher eurer Seelen.";
    headline_texte.innerHTML = "Heilung für die Seele";
    texte.innerHTML = "Ablehnung, Schmerz, Verzweiflung, Enttäuschung, mangelhaftes Selbstwertgefühl – Gefühle, die wir wahrscheinlich alle kennen. Verletzungen, die wir hinnehmen mussten. Folgen, an denen mancher von uns vielleicht heute noch zu knabbern hat. Im Ergebnis oft ein Selbstmitleid, das jede übrig gebliebene Energie ersticken will.<br>Doch Jesus Christus, der im heutigen Bibelvers als „Aufseher unserer Seelen“ bezeichnet wird, kann selbst schwerste Wunden heilen. Es spielt keine Rolle, wer uns verwundet hat oder wann. Wenn wir zu Jesus kommen und bei ihm Hilfe suchen, dann werden wir erleben, dass er uns Erleichterung und Frieden schenkt. Die „Therapie” basiert allerdings nicht auf der Suche nach den Schuldigen außerhalb von uns. Wir müssen schon bei uns selbst anfangen: Ich irrte umher. Nur so kann der Hirte unsere Seelen „heilen” und mit einem Blick ausstatten, der manches vergessen und uns die Dinge sehen lässt, die echte Lebensenergie geben, weil sie von Gott kommen und in Ewigkeit bleiben.";
}
if(augustday === 221){
    verse.innerHTML = "Denkt in eurem Herzen nach ... und seid still!";
    headline_texte.innerHTML = "Sound of Silence";
    texte.innerHTML = "Samstags, 15:30 Uhr. Kurz vor Anpfiff. Die Fußballspieler versammeln sich gemeinsam im Kreis. Von jetzt auf gleich sind 80.000 Menschen, die bei Bretzel und Bratwurst beste Laune haben, ruhig. Es gibt eine Schweigeminute. Ein Erdbeben in der Türkei hat viele Menschenopfer gefordert, derer nun gedacht werden soll. Absolute Stille. Die Sekunden vergehen und je länger die Stille dauert, desto unwohler fühlen sich die Beteiligten. Denken wirklich alle an die Opfer oder wird nur ausgehalten, bis man endlich wieder laut sein darf? Seit Kurzem wird statt Schweigen ein gemeinsames Applaudieren geduldet, um die Stille der Minute nicht aushalten zu müssen.<br>Kennst du noch stille Zeiten? Ruhe zum Nachdenken? Im Smartphone-Zeitalter fällt das enorm schwer. Hörst du lieber Musik oder guckst dir eine Serie an, um die Stille nicht ertragen zu müssen? Trau dich, lass Stille zu und denk nach: Was zählt im Leben wirklich? Und wo geht die Reise hin?";
}
if(augustday === 222){
    verse.innerHTML = "Damit ihr aber wisst, dass der Sohn des Menschen Gewalt hat, auf der Erde Sünden zu vergeben";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Vergebung";
    texte.innerHTML = "Jesus predigt in einem Haus. Durch unzählige Zuhörer ist das Haus schon brechend voll, als vier Freunde versuchen, einen Gelähmten zu ihm zu bringen. Es gibt kein Durchkommen! Was nun?<br>Die vier Freunde denken nicht ans Aufgeben. Sie gehen auf das Dach des Hauses und brechen es auf. Alles schaut nach oben. Was ist da los? Durch die Öffnung lassen sie den Gelähmten auf einer Trage direkt vor Jesus zu Boden. Jesus sieht den Mann an und sagt: „Deine Sünden sind vergeben.“ Einige Zuhörer denken empört: „Wer kann Sünden vergeben als nur einer, Gott?“ Jesus kennt ihre Gedanken und stellt eine Frage: „Was ist leichter zu sagen? Deine Sünden sind vergeben, oder: Steh auf und geh umher?“<br>Um zu zeigen, dass er tatsächlich die Macht hat, Sünden zu vergeben, sagt er zu dem Gelähmten: „Steh auf, nimm dein Bett und geh in dein Haus.“ Das Wunder geschieht. Der Gelähmte steht auf und geht. Jesus zeigt, dass er Gottes Sohn ist – gekommen, um Menschen die Sünden zu vergeben und sie zu retten.";
}
if(augustday === 223){
    verse.innerHTML = "Lehre uns zählen unsere Tage, damit wir ein weises Herz erlangen!";
    headline_texte.innerHTML = "Wettlauf gegen die Zeit";
    texte.innerHTML = "Eine Fußballmannschaft, die kurz vor Abpfiff knapp zurückliegt, wirft sich noch mal mächtig ins Zeug, um wenigstens ein Unentschieden herauszuholen. Es beginnt ein Wettlauf gegen die Zeit. <br>Rettungsmannschaften, die im Erdbebengebiet nach Verschütteten suchen, befinden sich ebenfalls im Wettlauf gegen die Zeit, weil die Opfer unter den Trümmern ums Überleben kämpfen. <br>Jedes Menschenleben ist letztlich ein Wettlauf gegen die Zeit – nicht nur, weil man statistisch gesehen insgesamt ca. 80 Jahre zur Verfügung hat, sondern weil das Leben schon gleich zu Ende sein kann. <br>In dieser Zeit muss man Gott finden, sonst ist es zu spät. Deshalb heißt es in den Sprüchen des weisen Salomo: „Wer mich findet, hat das Leben gefunden und Wohlgefallen erlangt von dem HERRN. Wer mich aber verfehlt, tut seiner Seele Gewalt an” (Kap. 8,35.36). <br>Ein Wettlauf gegen die Zeit ist das Gegenteil davon, die Sache mit Gott auf die lange Bank zu schieben.";
}
if(augustday === 224){
    verse.innerHTML = "Jesus Christus ist vor allen, und alle Dinge bestehen durch ihn.";
    headline_texte.innerHTML = "Gerade & heraus";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Video.";
}
if(augustday === 225){
    verse.innerHTML = "Ich werde euch ein neues Herz geben und einen neuen Geist in euer Inneres geben.";
    headline_texte.innerHTML = "Besser als Concealer";
    texte.innerHTML = "Montagmorgen. Schlaftrunken schlurft Gina ins Bad – und ist schlagartig hellwach, als ihr aus dem Spiegel zwei Pandaaugen entgegenstarren. Hektisch wird die Make-up-Schublade durchgekramt. Unter der Foundation wollen die Augenringe noch nicht verschwinden. Nicht verzagen, Concealer auftragen! Noch ein bisschen Blush und Mascara – endlich kann Gina wieder lächeln.<br>Eine ganze Beautyindustrie lebt von unserem Hang, Macken zu verstecken. „Der Mensch sieht auf das Äußere“, sagt schon die Bibel, „aber der HERR sieht auf das Herz“ (1. Samuel 16,7). Letzteres verdrängt man gern. Peinlich, wenn Gott alle fiesen Gedanken oder unsere dreckigen Fantasien mitkriegen würde. Welcher „Abdeckstift“ hält vor Gottes Blick stand? Freundliches Auftreten vielleicht? Dritte-Welt-Spenden? Oder ehrenamtliches Engagement in der Kirche? Auf den Gute-Taten-Trick fällt Gott ganz bestimmt nicht rein. Hier muss etwas Größeres passieren als Fehlerkaschierung: Ein neues Herz muss her, ein sauberes, ein gutes.";
}
if(augustday === 226){
    verse.innerHTML = "Bei all diesem sündigte Hiob nicht und schrieb Gott nichts Ungereimtes zu.";
    headline_texte.innerHTML = "Trotz Leid – Gott ehren?";
    texte.innerHTML = "Hiob – ein Mann aus der Bibel, der als tiefgläubig und fromm beschrieben wird. Vom Bösen hielt er sich fern, wie man es heute von einem authentischen Christen erwarten würde. <br>Hiob gehörte zu den Reichen: 10 Kinder, mehr als 11.000 Tiere und jede Menge Angestellte <br>Plötzlich ein schwerer Schicksalsschlag: Hiob verlor alles, wirklich alles: seine Kinder durch ein Unglück und seine Tiere durch einen feindlichen Überfall. <br>„Wie kann Gott das zulassen?”, fragt man heute vielfach. „Nein, mit Gott möchte ich nichts zu tun haben.” Und wie reagierte Hiob?” Bei all diesem sündigte Hiob nicht und schrieb Gott nichts Ungereimtes zu” (siehe Tagesvers). <br>Es dauerte nicht lange, da wurde Hiob schwer krank. Er hatte Geschwüre – so schlimm, dass sogar seine Freunde ihn nicht wiedererkannten. Die Empfehlung seiner Frau: „Sage dich los von Gott und stirb!” Hiob entgegnete: „Wir sollten das Gute von Gott annehmen, und das Böse sollten wir nicht auch annehmen? Bei all diesem sündigte Hiob nicht mit seinen Lippen” (Hiob 2,9.10).";
}
if(augustday === 227){
    verse.innerHTML = "Meine Wege habe ich erzählt, und du hast mich erhört; lehre mich deine Satzungen!";
    headline_texte.innerHTML = "Bibellesen oder Beten?";
    texte.innerHTML = "Im 19. Jahrhundert wurde dem bekannten englischen Evangelisten Charles Haddon Spurgeon einmal folgende Frage gestellt: „Was ist wichtiger, Bibellesen oder Beten?“ Ohne lange zu zögern, antwortete der erfahrene Prediger mit einer Gegenfrage: „Was ist wichtiger, Einatmen oder Ausatmen?“<br>Wir Menschen sind von Gott so angelegt, dass wir beides brauchen. Dasselbe gilt für das Glaubensleben: Durch die Bibel lassen wir Gott zu uns sprechen, und wenn wir Beten, sprechen wir zu ihm.<br>Doch die Bibel ist so dick. Wo soll ich da anfangen sie zu lesen? Du musst nicht unbedingt vorne anfangen. Nimm dir zuerst das Evangelium von Markus vor. Es hat nur 16 Kapitel und gibt dir einen Überblick über das vollkommene Leben von Jesus.<br>Aber ich weiß nicht, wie ich beten soll. Du brauchst kein Gebetsbuch. Sprich mit ihm, ehrlich, offen und ehrfürchtig. Er hört!";
}
if(augustday === 228){
    verse.innerHTML = "Jesus sprach aber zu allen: Wenn jemand mir nachkommen will, so verleugne er sich selbst und nehme täglich sein Kreuz auf und folge mir nach.";
    headline_texte.innerHTML = "Mensch & mutig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Einblick in das Leben eines Christen.";
}
if(augustday === 229){
    verse.innerHTML = "Das Herz dieses Volkes ist dick geworden … ihre Augen haben sie geschlossen, damit sie nicht etwa mit den Augen sehen und sich bekehren.";
    headline_texte.innerHTML = "Ich glaube nur an das, was ich sehe";
    texte.innerHTML = "Wenn man sich mit Menschen über den Glauben unterhält, dann hört man immer mal wieder: „Ich glaube nur an das, was ich sehe.“ <br>Glauben wir das wirklich? Wie ist es zum Beispiel mit dem Wind? Oder mit dem Strom? <br>Matthias Claudius hat es seinerzeit treffend formuliert: <br>Seht ihr den Mond dort stehen? <br>Er ist nur halb zu sehen <br>und ist doch rund und schön. <br>So sind wohl manche Sachen, <br>die wir getrost belachen, <br>weil unsere Augen sie nicht sehn. <br>Auch Gott kann man nicht sehen. Aber mit bloßem Auge ist sowohl seine ewige Kraft zu erkennen als auch seine Göttlichkeit, die seit Erschaffung der Welt in dem Gemachten wahrgenommen werden kann (Römer 1,20). <br>Kann es sein, dass wir nur das glauben, was wir sehen wollen?";
}
if(augustday === 230){
    verse.innerHTML = "Das Endergebnis des Ganzen lasst uns hören: Fürchte Gott und halte seine Gebote; denn das ist der ganze Mensch.";
    headline_texte.innerHTML = "Lesen & staunen";
    texte.innerHTML = "An dieser Stelle ist eigentlich eine Buchempfehlung.";
}
if(augustday === 231){
    verse.innerHTML = "Der Hohn hat mein Herz gebrochen, und ich bin ganz elend; und ich habe auf Mitleid gewartet, und da war keins, und auf Tröster, und ich habe keine gefunden.";
    headline_texte.innerHTML = "Seltsame Zeugen (3) – Ohne Mitleid";
    texte.innerHTML = "Die aufgehetzte Menge johlt ihre Zustimmung: Jesus soll gekreuzigt werden! Unheimlich, diese böse Dynamik in einer kopflosen Masse, in der kein Einziger den allerleisesten Grund für eine solche Forderung hat. <br>Pilatus beugt sich dem Druck der Hetzer und der Aufgehetzten: Jesus von Nazareth wird gefoltert und gekreuzigt. <br>Die Zuschauer haben kein Mitleid, gar keins. Sie spotten. Alle. Die Ankläger, die Masse, sogar die mit Jesus gekreuzigten Verbrecher. „Steig herab vom Kreuz, dann wollen wir an dich glauben! Bist du Gottes Sohn, so beweise es!“ <br>Eine wahrhaft teuflische Versuchung! Denn Jesus, der Herr, der Schöpfer, der Sohn Gottes, könnte in jedem einzelnen Moment die grauenvolle „Mission Kreuz“ abbrechen. Es liegt in seiner Hand. <br>Doch er tut es nicht! Um Gottes Ehre willen und zu unserer Rettung, auch zu deiner!";
}
if(augustday === 232){
    verse.innerHTML = "Die Hoffnung, die wir als einen sicheren und festen Anker der Seele haben.";
    headline_texte.innerHTML = "Was schreibt ein Atheist?";
    texte.innerHTML = "Stell dir vor, der Freund eines Atheisten hat gerade die Diagnose erhalten, todkrank zu sein. Der Atheist ist erschrocken und will ihm eine Nachricht schicken. Was könnte er ihm schreiben? „Keine Sorge, wenn du stirbst, ist doch eh alles aus“? „Nimm es nicht so schwer, du hattest doch ein tolles Leben!“? „Viele waren schon krank und sind gestorben“? „Das Sterben ist nicht schlimm, du wirst einfach in deine Atome zerfallen“?<br>Wie sinn- und hoffnungslos ist ein Leben ohne Gott! Wie reich und getröstet dagegen das Leben der Gläubigen! Sie wissen, dass das Schönste noch kommt: für immer bei Jesus Christus im Himmel zu sein.<br>Unser Herr Jesus Christus und Gott, unser Vater, der uns geliebt und uns ewigen Trost und gute Hoffnung gegeben hat durch die Gnade.<br>Nach 2. Thessalonicher 2,16";
}
if(augustday === 233){
    verse.innerHTML = "Alle Schrift ist von Gott eingegeben und nützlich zur Lehre, zur Überführung, zur Zurechtweisung, zur Unterweisung in der Gerechtigkeit …";
    headline_texte.innerHTML = "Die Bibel ist Gottes Wort";
    texte.innerHTML = "Die Bibel ist ein besonderes Buch. Obwohl dieses Buch aus 66 einzelnen Büchern besteht und mindestens 40 Schreiber über einen Zeitraum von ca. 1500 Jahren an seiner Entstehung mitwirkten, ist es wie aus einem Guss geschrieben; kein Buch der Weltgeschichte wurde so oft gelesen, übersetzt, verkauft oder gedruckt. <br>Die Bibel ist Gottes Botschaft an uns Menschen. Dabei ist die Bibel von Gott inspiriert. „Inspiriert“ bedeutet so viel wie „eingehaucht“. Gott benutzte die Schreiber der Bibel über viele Jahrhunderte hinweg, um seine Worte aufschreiben zu lassen. Jedes einzelne Wort wurde von Gott eingegeben (man nennt das auch „Verbalinspiration”) und doch spiegelt jedes einzelne Buch der Bibel den Charakter und die Umstände des jeweiligen Schreibers wider, den Gott benutzt hat. <br>Die Bibel enthält nicht nur Worte Gottes, sondern sie ist Gottes Wort. Weil Gott selbst der Autor ist, ist die Bibel unfehlbar und besitzt absolute Autorität.";
}
if(augustday === 234){
    verse.innerHTML = "Jesus spricht: Ich bin der Weg und die Wahrheit und das Leben.";
    headline_texte.innerHTML = "Ich bin die Wahrheit";
    texte.innerHTML = "Der Anspruch Jesu „Ich bin die Wahrheit!“ ist einzigartig. Er unterscheidet sich grundlegend von allen anderen „Wahrheitsmodellen”. <br>Er behauptet nicht nur: <br>„Ich sage die Wahrheit“ – wie ein Prophet; oder <br>„Ich entfalte die Wahrheit“ – wie ein Lehrer; oder <br>„Ich vertrete die Wahrheit“ – wie ein Märtyrer. <br>Nein! Jesus beansprucht für sich selbst: „Ich bin die Wahrheit”, bin sie in meiner Person. Im christlichen Glauben geht es also nicht um ein Programm, eine Lehre oder ein neues Menschenbild. Nein, im Zentrum steht eine Person: Jesus Christus. In ihm ist die Wahrheit Gottes in Person zu uns Menschen gekommen. Deshalb können wir in Jesus die Wahrheit über Gott und Menschen erkennen. <br>Diese Person sagt aber auch: „Ich bin der Weg“ und „ich bin das Leben”. In ihm finden wir also alles, was für unseren Weg zu Gott brauchen!";
}
if(augustday === 235){
    verse.innerHTML = "Alle haben gesündigt und erreichen nicht die Herrlichkeit Gottes und werden umsonst gerechtfertigt durch seine Gnade, durch die Erlösung, die in Christus Jesus ist.";
    headline_texte.innerHTML = "Gefühl und Wirklichkeit";
    texte.innerHTML = "In meiner Wetter-App werden zwei unterschiedliche Temperaturen angegeben: die gefühlte Temperatur und die tatsächliche. Die Angaben für heute: „Die Temperatur fühlt sich aktuell an wie -4°, tatsächlich sind es aber 0°“. Aha, es gibt also einen Unterschied zwischen gefühlter und tatsächlicher Wirklichkeit. Im Leben scheint es mir auch so eine Rubrik „gefühlt“ zu geben. Da könnte es heißen: Dein Leben fühlt sich aktuell richtig gut an, aber ist es auch wirklich gut, was ich mache? <br>Da lob ich mir das Barometer „Bibel”. Hier kann ich meine Gefühlswelt abgleichen und sehen, was wirklich stimmt. Und tatsächlich, sie macht deutlich: Wer ohne Gott lebt, geht verloren. Klingt wie eine Unwetterwarnung, aber ich weiß wenigstens, wo ich dran bin. <br>Und die Prognose für mich? Jeder Glaubende, der die Erlösung in Christus Jesus für sich annimmt, wird freigesprochen. Das fühlt sich nicht nur gut an – das ist richtig gut!";
}
if(augustday === 236){
    verse.innerHTML = "Wenn nun der Sohn euch frei macht, werdet ihr wirklich frei sein.";
    headline_texte.innerHTML = "Endlich frei?";
    texte.innerHTML = "Als Menschen streben wir von Jugend an nach Freiheit und Unabhängigkeit im Leben – ein selbstbestimmtes Leben ist unser Ideal. <br>Jesus hingegen sagt, dass wahre Freiheit nur in ihm zu finden ist. Er sagt auch, dass Sünde und Schuld uns binden. Wir sind nicht frei, wenn wir Schlechtes tun, das wir nicht lassen können. Alkohol, Sex und Drogen können uns ungeheuer fest im Griff haben. Auch Ängste können uns die Freiheit rauben, weil wir falsch über Gott, über uns selbst oder über andere denken. Das sind nur ein paar Beispiele für freiheitsraubende Zwänge. <br>Doch Jesus kam in die Welt, um „Gefangenen Befreiung auszurufen und Zerschlagene in Freiheit hinzusenden” (Lukas 4,18). Dafür starb er sogar am Kreuz. <br>Wer die Befreiung angenommen hat, lässt sich von Gott und seinem Wort leiten und sein Leben von ihm gestalten. Ja, das bindet uns an ihn. Aber diese Bindung ist die größte Freiheit, die Menschen erleben können.";
}
if(augustday === 237){
    verse.innerHTML = "Jesus Christus spricht: Ich bin nicht gekommen, Gerechte zu rufen, sondern Sünder.";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Zöllner und Sünder";
    texte.innerHTML = "Jesus kommt an einem Zollhaus vorbei. Dort sitzt Levi und geht seiner Arbeit nach. Er ist Jude, steht aber im Dienst der römischen Besatzungsmacht und treibt deren Steuern ein. Kein Wunder, dass seine Landsleute ihn verachten. Jesus spricht ihn an: „Folge mir nach!“ Levi steht auf. Dieser Jesus zieht ihn so an, dass er alles stehen und liegen lässt und ihm folgt. Jesus wird sein neuer Herr und zugleich sein Vorbild. Levi macht Jesus ein großes Mahl, und weil er möchte, dass auch seine ehemaligen Arbeitskollegen ihn kennenlernen, sind auch viele Zöllner dabei. <br>Da regt sich Widerstand: Die religiöse Elite kann nicht fassen, dass Jesus und seine Jünger mit „Zöllnern und Sündern“ essen. Sie selbst würden das niemals tun. Doch Jesus ist anders. Er sagt dazu: „Nicht die Gesunden brauchen einen Arzt, sondern die Kranken; ich bin nicht gekommen, Gerechte zu rufen, sondern Sünder zur Buße.“ Es ist seine Liebe, die diesen verachteten Zöllnern und Sündern begegnet. Für sie gibt es mehr Hoffnung als für die selbstgerechten Pharisäer.";
}
if(augustday === 238){
    verse.innerHTML = "Jesus sprach zu ihnen: Geht hin in die ganze Welt und predigt der ganzen Schöpfung das Evangelium. Wer da glaubt und getauft wird, wird errettet werden; wer aber nicht glaubt, wird verdammt werden.";
    headline_texte.innerHTML = "Live & farbig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Livestream.";
}
if(augustday === 239){
    verse.innerHTML = "Woher kommen Kriege und woher Streitigkeiten unter euch? Nicht daher: aus euren Begierden, die in euren Gliedern streiten?";
    headline_texte.innerHTML = "Dem Frieden nachjagen";
    texte.innerHTML = "Im Jahr 2022 gab es ca. 40 ausgewachsene Kriege und weitere 170 sogenannte gewaltsame Krisen. Über 100 Millionen Menschen waren auf der Flucht. Frieden? Unvorstellbar! Dabei hat Jesus Christus uns gelehrt, dass wir Frieden miteinander haben und unsere Feinde lieben sollen. <br>Was bedeutet „Frieden“ eigentlich? Frieden bedeutet nicht nur, dass es keine Kriege oder Konflikte gibt. Es geht in erster Linie um unser Inneres. Jeder Konflikt hat den Ursprung letztlich dort, wo der Sitz unserer Begierden ist – so nennt es die Bibel in unserem Tagesvers. Wenn unser Herz mit dem Gott des Friedens in Einklang ist, wenn wir Frieden mit Gott haben, ist für die Lust auf Streit in unserem Inneren kein Platz mehr. <br>Wenn wir in der Nachfolge Jesu unterwegs sind, sind wir aufgerufen, Frieden zu stiften. „Suche Frieden und jage ihm nach”, sagt der Apostel Petrus (1. Petrus 3,11). Im Hinblick auf die Menschen, die uns täglich umgeben, ist das eine wichtige Aufforderung!";
}
if(augustday === 240){
    verse.innerHTML = "Wem wollt ihr Gott vergleichen?";
    headline_texte.innerHTML = "Gottesbilder";
    texte.innerHTML = "Mit einer Portion Ironie nennt Jesaja zwei Antwortmöglichkeiten auf die Frage: „Wem wollt ihr Gott vergleichen?“<br>1. Der Luxus-Gott: „Hat der Künstler das Bild gegossen, so überzieht es der Schmelzer mit Gold und schweißt silberne Ketten daran“ (Jesaja 40,19).<br>2. Der Arme-Leute-Gott: „Wer arm ist, sodass er nicht viel opfern kann, der wählt ein Holz, das nicht fault; er sucht sich einen geschickten Künstler, um ein Bild herzustellen, das nicht wankt“ (V. 20).<br>Ganz im Ernst macht Jesaja an gleicher Stelle klar, dass Gott kein kreativ-totes Kunstwerk ist, sondern von unermesslicher Größe. Er fragt:<br>​​​​​​​Größe. Er fragt: „Wer hat die Wasser gemessen mit seiner hohlen Hand und die Himmel abgegrenzt mit der Spanne und hat den Staub der Erde in ein Maß gefasst und die Berge mit der Waage gewogen und die Hügel mit Waagschalen?“ (V. 12). Gottes Größe ist wirklich unfassbar!";
}
if(augustday === 241){
    verse.innerHTML = "Wir müssen alle vor dem Richterstuhl des Christus offenbar werden, damit jeder empfange, was er in dem Leib getan hat, nach dem er gehandelt hat, es sei Gutes oder Böses.";
    headline_texte.innerHTML = "31er (Einunddreißiger)";
    texte.innerHTML = "Einundreißiger!“ Schon einmal gehört? Die Bezeichnung spielt auf §31 des deutschen Betäubungsmittelgesetzes an. Er sieht vor, dass die Strafe für einen Täter gemildert wird, wenn er mit den Richtern kooperiert und zum Beispiel weitere Täter nennt. Er wird dann von anderen als Verräter oder eben „31er“ abgestempelt. ​​​​​​​Wenn unser Leben hier auf der Erde zu Ende ist, werden wir im Gerichtssaal vor Jesus Christus erscheinen. Wir werden auf unser Leben mit einer Menge von Straftaten zurückblicken. Sicher würden uns Menschen aus unserem Umfeld einfallen, die genauso so böse wie wir gehandelt haben – oder sogar noch schlimmer. Doch das wird dann keine Rolle spielen. Paragraph 31 wird nicht funktionieren. Keine Chance auf Strafmilderung durch Kooperation und Verrat. Gott ist ein gerechter Richter. Keine Sünde wird ignoriert. Es gibt nur eine einzige Lösung: Freispruch durch Jesus Christus selbst. Wer ihn heute als Retter kennt, wird ihn nie als Richter erleben.";
}
if(augustday === 242){
    verse.innerHTML = "Der Gerechte wird aus Glauben leben.";
    headline_texte.innerHTML = "Entdeckung in der Nacht";
    texte.innerHTML = "Der junge Augustinermönch traute seinen Augen nicht! Wieder las er bis in die Nacht im Klosterturm in der Bibel. Doch diesmal war er auf einen Satz gestoßen, der sein Leben für immer verändern sollte. „Kann das wirklich wahr sein?“, murmelte er leise vor sich hin. <br>Seit Jahren quälte den jungen Mönch der Gedanke an seine eigene Lebensschuld. Doch er spürte, dass er nicht genug gute Werke vollbringen konnte, um dem Strafgericht Gottes zu entgehen. Nun las er im schwachen Kerzenlicht: „Der Gerechte wird aus Glauben leben.“ Er wusste, dass es um das ewige Leben bei Gott ging, das er sich so sehr wünschte. Es sind also nicht die guten Werke, durch die man das Heil bekommt, sondern durch Glauben an den Retter Jesus Christus. Jetzt fing er an zu begreifen, worin die Gerechtigkeit Gottes besteht: Gott spricht jeden Menschen frei, der glaubt, dass Gott seinen Sohn für fremde Schuld sterben ließ. – Das war der Durchbruch im Leben dieses Mönchs mit Namen Martin Luther.";
}
if(augustday === 243){
    verse.innerHTML = "Mose baute dem Herrn einen Altar und gab ihm den Namen: „Der Herr ist mein Banner!“";
    headline_texte.innerHTML = "Namen Gottes im Alten Testament – Jahwe-Nissi";
    texte.innerHTML = "Das Volk Israel ist in der Wüste unterwegs, nachdem Gott sie kurz zuvor aus der Sklaverei im Land Ägypten befreit hatte. <br>Nach relativ kurzer Zeit wird das Volk in unwirtlichem Gelände von Feinden angegriffen. Während Mose mit dem Stab Gottes auf einen nahe gelegenen Hügel steigt, führt Josua, Moses Diener, die Soldaten des Volkes Israel im Gefecht an. <br>Im Blick auf diese „hybride Kampfführung” wird ein interessantes Detail berichtet: Solange Mose seine Arme hochhält, hat Israel im Kampf die Oberhand; sobald er sie sinken lässt, werden die Feinde wieder stark. Schließlich werden die Feinde mit Gottes Hilfe besiegt und Mose baut einen Altar mit dem Namen: Jahwe-Nissi („der HERR ist mein Banner!“). <br>Auch im Leben von Christen gibt es immer wieder Anfeindungen und Probleme. Doch in Jesus, dem lebenden Herrn, haben wir eine wunderbare Hilfe – „oben” im Himmel und bei uns. Gern stellen wir uns unter seine Flagge.";
}
if(augustday === 244){
    verse.innerHTML = "Wer mich findet, hat das Leben gefunden und Wohlgefallen erlangt von dem HERRN.";
    headline_texte.innerHTML = "Das wahre Leben finden";
    texte.innerHTML = "Endlich! Der heiß ersehnte Urlaub. Den ganzen Stress der Arbeit vergessen und einfach nur entspannen. Ist das ein wunderbares Leben! Wenn es doch immer so sein könnte … <br>Nach zwei wunderbaren Wochen kommst du aus dem Urlaub zurück und könntest gleich noch mal los. Bald schon wird der nächste Urlaub geplant oder wenigstens ein verlängertes Wochenende … <br>Alles wird versucht, um glücklich zu sein, aber selbst der genialste Urlaub stillt unsere Sehnsucht nach Frieden, Glück und Erfüllung nicht auf Dauer. Es ist wie beim Trinken an einem heißen Sommertag: Das Wasser stillt den Durst für kurze Zeit, aber der Durst kommt schnell wieder. <br>In der Bibel stellt sich Jesus Christus als „das Leben” vor (Johannes 14,6) und er zeigt, dass es darauf ankommt, eine Beziehung zu ihm zu haben. Er ist auf die Erde gekommen, um unseren Lebensdurst für immer zu stillen. Wer ihn findet, hat das Leben gefunden.";
}

// September
if(month === 9){
    janauryday = false;
    februaryday = false;
    marchday = false;
    aprilday = false;
    mayday = false;
    juneday = false;
    julyday = false;
    augustday = false;
    septemberday = true;
    octoberday = false;
    novemberday = false;
    decemberday = false;

    septemberday = augustday+day;

    console.log(septemberday);
}
if(septemberday === 245){
    verse.innerHTML = "Er sprach zu Jesus: Gedenke meiner, Herr, wenn du in deinem Reich kommst! Und Jesus sprach zu ihm: Wahrlich, ich sage dir: Heute wirst du mit mir im Paradies sein.";
    headline_texte.innerHTML = "Seltsame Zeugen (4) – Johannes, die Frauen, der Verurteilte";
    texte.innerHTML = "Vorbei die Tage, als Jesus von hilfesuchenden Menschenmengen geradezu verfolgt wird. Von denen, die von ihm profitiert haben, ist niemand mehr da. Überhaupt niemand? Doch halt, da stehen die Frauen, die Jesus von Galiläa aus auf seinen Reisen begleitet haben. Darunter auch Maria, die Mutter Jesu und Maria aus Magdala. Und ein Einziger von den Jüngern: Johannes, vermutlich der Jüngste von ihnen. Sie harren aus, sie halten aus. Ertragen irgendwie das Unerträgliche, das sie mitansehen müssen. Ein kleiner Trost für Jesus? Ganz bestimmt. <br>Da meldet sich der eine Verurteilte, der mit Jesus hingerichtet wird, zu Wort. Eben noch hat er mit gespottet, doch jetzt weist er die Spötter zurecht. „Herr“, sagt er zu Jesus. „Herr, denke an mich.“ Dieser Mann hat irgendwie einen Blick für die herrliche Wirklichkeit hinter dieser äußerlich völlig trostlosen Szene bekommen. Das Versprechen, das er von Jesus bekommt, ist wundervoll.";
}
if(septemberday === 246){
    verse.innerHTML = "Eng ist die Pforte und schmal der Weg, der zum Leben führt, und wenige sind, die ihn finden.";
    headline_texte.innerHTML = "Der Zug zum Tor";
    texte.innerHTML = "Sepp Herberger war Bundestrainer der Fußball-Nationalmannschaft (von 1950–1964). <br>Einem seiner Spieler schrieb er: „Ich vermisse in Ihrem Spiel den zielstrebigen Zug zum Tor und den Torschuss. Immer und immer wieder muss ich Ihnen sagen, dass zum erstklassigen Spieler und zum erstklassigen Spiel eben auch der abschließende Torschuss gehört!“ Er beendete seinen Brief mit den Worten: „Hier muss vieles besser werden“. <br>Auch viele Menschen lassen den „Zug zum Tor“ vermissen: Manche leben erstklassig, andere lassen sich durchs Leben treiben, und wieder andere haben es schwer. Eins haben sie gemeinsam: Sie vergessen das Ziel ihres Lebens, „sie treffen nicht“ (in der Sprache der Fußballer), um dann wirklich etwas in den Händen zu haben. Um etwas Bleibendes mitzunehmen. <br>Du vielleicht auch? „Wer an den Sohn glaubt, hat ewiges Leben“ (Johannes 3,36). Das kann sich sehen lassen. Und das bleibt.";
}
if(septemberday === 247){
    verse.innerHTML = "Wem wollt ihr Gott vergleichen? Er ist der Schöpfer der Enden der Erde; … unergründlich ist sein Verstand. ";
    headline_texte.innerHTML = "Unergründlich";
    texte.innerHTML = "Im sichtbaren Universum gibt es laut einer Hochrechnung von Forschern ca. 70 Trilliarden Sterne (eine 70 mit 21 Nullen). Schätzungsweise gibt es auf unserem Planeten ca. 15 Millionen Tierarten – von denen aber bislang nur etwa 1,8 Millionen Millionen bekannt und wissenschaftlich beschrieben sind. Gott ruft jeden der unzähligen Sterne mit Namen (Jesaja 40,26) und er kennt jede noch so kleine Insektenart im Amazonas-Regenwald ganz genau, weil er der Schöpfer ist. <br>Gott selbst ist für unsere menschlichen Augen zwar unsichtbar, aber sein unergründlicher Verstand lässt sich in der Schöpfung bewundern – im Makro- wie im Mikrokosmos. Das zeigt auch ein anderer Bibelvers sehr deutlich: <br>Das Unsichtbare von ihm (Gott) wird geschaut, sowohl seine ewige Kraft als auch seine Göttlichkeit, die von Erschaffung der Welt an in dem Gemachten wahrgenommen werden – damit sie (die Menschen) ohne Entschuldigung seien (Römer 1,20).";
}
if(septemberday === 248){
    verse.innerHTML = "Die nun sein Wort aufnahmen, wurden getauft. Sie verharrten aber in der Lehre der Apostel und in der Gemeinschaft, im Brechen des Brotes und in den Gebeten.";
    headline_texte.innerHTML = "Die Glaubensfamilie – Gemeinde Gottes";
    texte.innerHTML = "Das Leben als Christ ist keine Soloveranstaltung. Christen sind keine Einzelgänger, sondern gehen gemeinsam durchs Leben. Christen gehören zusammen und bilden eine große Familie. <br>Die ersten Christen in Jerusalem trafen sich regelmäßig, um ihre Zeit miteinander zu teilen, zu beten, das Abendmahl zu halten und Gottes Wort zu hören. Als sich das Christentum weiter ausbreitete, entstanden an vielen Orten Gemeinden: in Ephesus (Türkei), Korinth (Griechenland), Rom (Italien) und noch weit darüber hinaus. Überall lebten die Gläubigen miteinander und trafen sich zu den Gottesdiensten. Das ist bis heute so. <br>Bist du auf der Suche nach Gemeinschaft mit Christen? Dann bitte den Herrn Jesus, dir zu zeigen, wo Christen sind, die sich an die Lehre der Apostel in den Briefen des Neuen Testaments halten. Denn darauf basieren die drei weiteren Bestandteile des Gemeindelebens: Gemeinschaft, Abendmahl und Gebete. – Gemeinde Gottes zu erleben ist ein großer Segen!";
}
if(septemberday === 249){
    verse.innerHTML = "Pilatus wollte der Volksmenge einen Gefallen tun, er ließ ihnen Barabbas frei und überlieferte Jesus, nachdem er ihn hatte geißeln lassen, damit er gekreuzigt würde.";
    headline_texte.innerHTML = "Die Hände in Unschuld waschen";
    texte.innerHTML = "Eine bizarre Situation: Jesus auf der einen Seite – „der Gerechte“, wie Pilatus ihn nennt. Auf der anderen Seite Pilatus, der Ungerechte, der sich als Richter an dem Fall Jesus nicht die Finger schmutzig machen will. Also wäscht er sich nach dem Verhör vor allen die Hände und teilt mit: „Ich bin schuldlos an dem Blut dieses Gerechten“ (Matthäus 27,24). <br>Wirklich Pilatus? Wieso lässt du dann den Gerechten auspeitschen? Wieso machst du mehrfach deutlich, dass du keine Schuld an Jesus findest und lässt ihn trotzdem kreuzigen? Du bist weder schuldlos noch bist du deine Schuld los. Du wusstest genau, dass man Jesus aus Neid angeklagt hatte. Du hattest die Juden doch durchschaut. Deine Frau hat dich noch gewarnt, nichts zu schaffen zu haben mit jenem Gerechten. An deinen Fingern klebt Blut – da kannst du sie noch so oft waschen. <br>​​​​​​​Wir sind nicht besser als Pilatus. Wir haben uns an Gott schuldig gemacht, weil wir seine Gebote übertreten haben. Da hilft nur ein aufrichtiges Bekenntnis.";
}
if(septemberday === 250){
    verse.innerHTML = "Meine Stärke und mein Gesang ist Jah, denn er ist mir zur Rettung geworden; dieser ist mein Gott, und ich will ihn verherrlichen, meines Vaters Gott, und ich will ihn erheben.";
    headline_texte.innerHTML = "Lied & lebendig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Lied.";
}
if(septemberday === 251){
    verse.innerHTML = "Rufe zu mir, und ich will dir antworten und will dir große und unerreichbare Dinge kundtun, die du nicht weißt.";
    headline_texte.innerHTML = "Keine Antwort in Vegas";
    texte.innerHTML = "1999. Der Schauspieler David Strickland zieht durch die Stripclubs in der Spielerstadt Las Vegas. Tagelang ist er auf Partys aufzufinden. Bis zum 22. März. In dem Motel Oasis wird Strickland tot aufgefunden. Er hat sich erhängt. Warum das nach einer scheinbar erlebnisreichen Suche nach dem Glück?<br>In einem Abschiedsbrief eines anderen Selbstmörders in Las Vegas findet sich der vielsagende Satz: „Hier gibt es keine Antworten!“ Und tatsächlich: In einem Leben ohne Gott gibt es auf viele Fragen keine Antworten. Die wirklich großen Fragen bleiben unbeantwortet, zum Beispiel:<br>• Woher komme ich?<br>• Wohin gehe ich?<br>• Wofür lebe ich?<br>• Warum gibt es Leid in dieser Welt?<br>• Warum wird Macht missbraucht?<br>• Woher kommt der Moralbegriff?<br>​​​​​​​Gott gibt Antworten, vor allem durch die Bibel. Deshalb wende dich an ihn und er wird dir antworten!";
}
if(septemberday === 252){
    verse.innerHTML = "Durch die Gnade seid ihr errettet, mittels des Glaubens; und das nicht aus euch, Gottes Gabe ist es; nicht aus Werken, damit niemand sich rühme.";
    headline_texte.innerHTML = "Gerade & heraus";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Video.";
}
if(septemberday === 253){
    verse.innerHTML = "Willst du gesund werden?";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Gesund";
    texte.innerHTML = "„Willst du gesund werden?“ Jesus schaut eine Person an, die seit 38 Jahren schwer krank ist. Mit vielen anderen Kranken liegt sie an einem Teich in Jerusalem. Von Zeit zu Zeit bewegt ein Engel das Wasser dort. Und wem es gelingt, als Erstes ins Wasser zu kommen, wird geheilt. Deshalb lautet die Antwort des Kranken: „Herr, ich habe keinen Menschen, dass er mich, wenn das Wasser bewegt worden ist, in den Teich wirft.“ Andere sind immer schneller als er. <br>„Willst du gesund werden?” Die Frage bleibt offen, weil der Kranke noch nicht realisiert, wer ihn gefragt hat. Jesus sieht ihn erneut an und sagt zu ihm: „Steh auf, nimm dein Bett auf und geh umher!“ Doch jetzt hören wir keine ausweichende Antwort. Jetzt begreift der Kranke, dass er geheilt worden ist. Er glaubt der Aufforderung Jesu und steht auf, nimmt sein Bett und läuft herum. <br>​​​​​​​Jesus tritt auch in unser Leben, will etwas verändern, will einen Neuanfang schenken. Trauen wir es ihm zu, selbst wenn die Lage hoffnungslos aussieht?";
}
if(septemberday === 254){
    verse.innerHTML = "Heute, wenn ihr seine Stimme hört, verhärtet eure Herzen nicht.";
    headline_texte.innerHTML = "Zu spät";
    texte.innerHTML = "Am Flughafen: Ein Paar kommt zu spät zum Boarding. Doch das Gate ist schon geschlossen. Die beiden diskutieren lange mit der Flughafenangestellten, doch vergebens. „Ich habe Sie doch dreimal aufgerufen, warum sind Sie denn nicht gekommen?“ Die beiden haben seelenruhig in der Abflughalle gesessen und die Durchsage leider nicht wahrgenommen. Drei Durchsagen, drei Chancen – nun ist das Gate geschlossen. Das sichtlich enttäuschte Paar realisiert langsam: „Das Flugzeug wird ohne uns starten.” – Zu spät!<br>Ein solches „Zu spät!“ ist ärgerlich, aber zu verkraften. Wenn es allerdings darum geht, unsere Sache mit Gott zu regeln, wäre ein „Zu spät!” fatal. Solange das Zeitfenster dafür noch offen ist, muss man handeln. Spätestens beim Tod wird es geschlossen: „Und ebenso wie es den Menschen gesetzt ist, einmal zu sterben, danach aber das Gericht …“ (Hebräer 9,27). Sorge dafür, dass du niemals von Gott hören musst: „Zu spät“.";
}
if(septemberday === 255){
    verse.innerHTML = "Wer auf sein Herz vertraut, der ist ein Tor (ein Narr oder Dummkopf).";
    headline_texte.innerHTML = "Folge deinem Herzen";
    texte.innerHTML = "Stell dir vor, du wirst mitten in der Wüste ausgesetzt. Ohne Smartphone, Karte und Kompass. Nur mit dem Ratschlag: Folge deinem Herzen, dann findest du den richtigen Weg! Wäre das nicht absurd? – Es wäre Mord! Du würdest hoffnungslos zugrunde gehen. <br>Aber ergeht es dir bei deiner Lebensplanung nicht ähnlich? Auf Ratschläge von Älteren oder sonstigen Spießern zu hören, ist out. Die Devise lautet: Vertrau auf dein Gefühl! Glaub an dich! Geh deinen Weg, egal was andere denken. <br>Aber Hand aufs Herz: Suchen wir nicht alle nach Orientierung, nach Vorbildern, nach Inspiration? Nach jemand, der uns sagt, wo es langgeht? <br>Aber Hand aufs Herz: Suchen wir nicht alle nach Orientierung, nach Vorbildern, nach Inspiration? Nach jemand, der uns sagt, wo es langgeht? <br>Folge nicht deinem Herzen, sondern ihm!";
}
if(septemberday === 256){
    verse.innerHTML = "Kein Geschöpf ist vor ihm unsichtbar, sondern alles ist bloß und aufgedeckt vor den Augen dessen, mit dem wir es zu tun haben.";
    headline_texte.innerHTML = "Maskerade";
    texte.innerHTML = "Menschen tragen vielfach Masken. Nicht nur zu Fasching oder Karneval verstecken wir uns hinter dem, was wir gerade darstellen wollen. Im Job, bei unseren Freunden und sogar in der Familie spielen wir unsere Rollen und versuchen manchmal zu verbergen, was wirklich in uns vorgeht. <br>Einem können und müssen wir allerdings nichts vormachen: Gott. Er durchschaut uns. Er sieht durch jede Maskerade direkt in unser Herz. Unangenehm? Wenn wir uns schuldig fühlen – ja. Wenn wir uns ihm ganz öffnen – nein. Dann sagen wir ihm alles, was uns belastet und klammern nichts aus. Denn er meint es nur gut mit uns, will uns vergeben, annehmen und glücklich machen. <br>Gottes durchdringende Augen sind zugleich liebende Augen!";
}
if(septemberday === 257){
    verse.innerHTML = "Christus selbst hat unsere Sünden an seinem Leib auf dem Holz getragen, damit wir, den Sünden abgestorben, der Gerechtigkeit leben, durch dessen Wunden ihr heil geworden seid.";
    headline_texte.innerHTML = "The sacrificial leaf";
    texte.innerHTML = "Die Mangrove ist ein Baum, der an tropischen und subtropischen Küstenlinien oder Flussmündungen wächst. Mit ihren stelzenartigen Wurzeln steht sie mitten im Salzwasser, das schädlich für das Biosystem von Pflanzen ist. Trotzdem überlebt dieser Baum – aber wie macht er das?! <br>Die Mangrove hat ein einzigartiges, eingebautes Filtersystem. Wie der Mechanismus genau funktioniert, ist noch nicht ganz geklärt, aber dieser Baum schafft es, dass das Salz nur in eins der vielen Blätter geleitet wird. Dieses immer gelber werdende Blatt sammelt das Salz, stirbt schließlich ab und fällt zu Boden. Ein Blatt stirbt, damit der Baum überleben kann. Diese Blätter nennt man passenderweise „sacrificial leaf“ (sacrifice = Opfer; leaf = Blatt). <br>​​​​​​​Dieses Phänomen erinnert einen Christen an unseren Herrn Jesus Christus, der sich stellvertretend am Kreuz für unsere Schuld und Sünden aufgeopfert hat, um uns ewiges Leben zu schenken. Faszinierend, wie der große Gott sich selbst in der Schöpfung vorstellt.";
}
if(septemberday === 258){
    verse.innerHTML = "Soll das ein Fasten sein, an dem ich Gefallen habe, … wenn ein Mensch seinen Kopf hängen lässt wie Schilf?... Wollt ihr das ein Fasten nennen und einen Tag, an dem der Herr Wohlgefallen hat?";
    headline_texte.innerHTML = "Den Kopf nicht hängen lassen";
    texte.innerHTML = "„Lass den Kopf nicht hängen!”, mit diesen Worten versuchen wir jemand aufzumuntern und benutzen eine Redensart aus der Bibel. Geprägt wurde sie vom Propheten Jesaja, der im 8. Jahrhundert vor Christus lebte und von Gott den Auftrag bekam: „Erhebe deine Stimme wie eine Posaune und tu meinem Volk seine Übertretung kund!” <br>Das tat Jesaja. Ohne Umschweife, klar und herausfordernd. Er zeigte den Israeliten ihre hohle religiöse Fassade auf. Zu der gehörte, dass sie fasteten und den Kopf hängen ließen, als ob sie besonders fromme Leute wären. In Wirklichkeit beuteten sie ihre Angestellten aus, lebten in Zank und Streit und ballten die Faust in der Tasche. <br>Das Schlimme daran: Ihre Heuchelei verhinderte, dass sie das Richtige taten: entschieden gegen das Böse aufstehen, den Opfern von Gewalt helfen, Notleidenden helfen und Obdachlosen ein Dach über dem Kopf anbieten. – Klingt das nicht 2.700 Jahre später immer noch topaktuell?";
}
if(septemberday === 259){
    verse.innerHTML = "Ebenso spotteten auch die Hohenpriester samt den Schriftgelehrten untereinander und sprachen: Andere hat er gerettet, sich selbst kann er nicht retten.";
    headline_texte.innerHTML = "Sich selbst retten?";
    texte.innerHTML = "Jesus hängt am Kreuz vor den Toren der Stadt Jerusalem; zahlreiche Leute laufen an der Hinrichtungsstätte vorbei. Zeigen sie Mitgefühl? Nein, sie verspotten ihn! Auch die führenden Theologen der Stadt mischen sich unter die Spötter. „Andere hat er gerettet“, sagen sie und bestätigen damit ungewollt die Echtheit seiner vielen Wunder. „Sich selbst kann er nicht retten“, behaupten sie voller Verachtung und Spott im Anschluss.<br>Konnte Jesus wirklich nicht vom Kreuz herabsteigen und seine eigenen Wunden heilen? Er ist doch Gottes Sohn, der alles kann!<br>Seine Allmacht hatte Jesus durch Wunder und Zeichen bereits vielfach unter Beweis gestellt – hier am Kreuz zeigt er insbesondere seine unfassbar große Liebe zu dir und zu mir. Er musste sterben, um andere zu retten. Deshalb konnte er sich nicht selbst retten. – Danke Herr, dass du mein Retter geworden bist!";
}
if(septemberday === 260){
    verse.innerHTML = "Und so besitzen wir das prophetische Wort umso fester, auf das zu achten ihr wohltut, als auf eine Lampe, die an einem dunklen Ort leuchtet.";
    headline_texte.innerHTML = "Mit dem Fernglas sieht man weiter";
    texte.innerHTML = "Als die Titanic am 14. April 1912 durch die kalte, dunkle Nacht pflügte, hatten die beiden Matrosen im Ausguck kein Fernglas. Warum? Weil der Fernrohrschrank verschlossen war. Der Matrose, der den Schlüssel dazu besaß, hatte in Liverpool das Schiff verlassen, weil er gefeuert worden war <br>So mussten die beiden Matrosen mit bloßem Auge und im kalten Fahrtwind in der stockfinsteren Neumondnacht das Meer nach Hindernissen absuchen. Es gab keinen Suchscheinwerfer, keinen zusätzlichen Ausguck am Schiffsbug und in der spiegelglatten See keine Wellen, die sich an einem Hindernis gebrochen hätten. <br>Plötzlich tauchte aus dem Nichts ein schwacher Schatten vor dem Sternenhimmel auf. Ein Eisberg! Er besiegelte die Katastrophe der Titanic. <br>​​​​​​​Die Bibel ist wie ein Fernglas. Sie lässt dich über deine Zukunft nicht im Unklaren. Lies sie! Sie warnt – aber sie weist dich auch auf die Rettung hin!";
}
if(septemberday === 261){
    verse.innerHTML = "Gott wird jede Träne von ihren Augen abwischen, und der Tod wird nicht mehr sein noch Trauer noch Geschrei noch Schmerz wird mehr sein; denn das Erste ist vergangen.";
    headline_texte.innerHTML = "Wie ist der Himmel?";
    texte.innerHTML = "Wenn man über das Leben nach dem Tod nachdenkt, kommt man früher oder später zu der Frage, wie man sich den Himmel vorstellen muss. Der Tagesvers gibt uns einen Eindruck, der aber längst nicht vollständig ist: Tränen, Tod, Trauer, Geschrei und Schmerz werden dort nicht sein. Wenn wir uns diese Dinge einmal aus unserer heutigen Welt wegdenken, entstände schon ein schönes Bild, oder? <br>Aber das wäre noch viel zu wenig. Die Bibel verwendet verschiedene Begriffe, um die Schönheit des Himmels zu beschreiben, zum Beispiel: Ruhe, Freude, Liebe, ewiges Leben, Paradies, Herrlichkeit. <br>Der entscheidende Punkt ist, dass im Himmel Gott wohnt, alles hundertprozentig zu ihm passt und alle Bewohner des Himmels ihn verehren. Also nicht der Mensch steht im Mittelpunkt, sondern Gott, der Schöpfer und Erlöser. <br>Wer sich zu den Berufenen Gottes zählt, freut sich auf den Himmel: wunschlos glücklich zu sein – für ewig!";
}
if(septemberday === 262){
    verse.innerHTML = "Dieser ist mein geliebter Sohn, an dem ich Wohlgefallen gefunden habe.";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Unauffällig";
    texte.innerHTML = "Volksauflauf. Hunderte Menschen sind an den See Genezareth gekommen, um Jesus zu hören und geheilt zu werden. Ein Boot wird bereitgestellt. So kann Jesus dieser Menschenmasse entgehen, denn sie stürmen auf ihn ein, um ihn zu berühren. An diesem Tag heilt er viele Menschen. Doch er bittet sie, ihn nicht bekannt zu machen. Er will von niemanden gehypt werden. Ganz im Gegenteil – er handelt ganz im Sinn der Prophezeiung aus dem Buch Jesaja, wo Gott bereits 600 Jahre zuvor über ihn sagt: „Siehe, mein Knecht, den ich erwählt habe, mein Geliebter, an dem meine Seele Wohlgefallen gefunden hat; ich werde meinen Geist auf ihn legen ... Er wird nicht streiten noch schreien, noch wird jemand seine Stimme auf den Straßen hören.“ <br>So macht Jesus keinen Hype um sich selbst, sucht keine Likes, sondern tut in unaufdringlicher Weise das, was Gott ihm aufgetragen hat. Zu dessen Freude und zum Nutzen der Menschen.";
}
if(septemberday === 263){
    verse.innerHTML = "Hierin ist die Liebe: nicht dass wir Gott geliebt haben, sondern dass er uns geliebt und seinen Sohn gesandt hat als Sühnung für unsere Sünden.";
    headline_texte.innerHTML = "Echte Liebe";
    texte.innerHTML = "Du tust alles, damit Gott dich liebt?<br><br>falsch!<br><br>Gott hat alles für dich getan,<br>weil er dich liebt!<br><br>Gott liebt dich nicht, weil du so liebenswert bist, sondern weil es seinem Charakter entspricht zu lieben. „Gott ist Liebe“ (1. Johannes 4,8)<br><br>Du kannst nichts tun, um dir Gottes Liebe zu verdienen. Es ist sein Geschenk an dich.<br>„Gott aber erweist seine Liebe zu uns darin, dass Christus, da wir noch Sünder waren, für uns gestorben ist“ (Römer 5,8).";
}
if(septemberday === 264){
    verse.innerHTML = "Die Türhüterin spricht zu Petrus: Bist nicht auch du einer von den Jüngern dieses Menschen? Er antwortet: Ich bin es nicht.";
    headline_texte.innerHTML = "Notlüge";
    texte.innerHTML = "In der Familie, im Berufsleben oder in der Politik gehört die Unwahrheit – konkreter ausgedrückt: die Lüge – zum Standardrepertoire, wenn es darum geht, den eigenen Kopf aus der Schlinge zu ziehen. Sehr gern verwendet man in solchen Fällen auch den Begriff der Notlüge – klingt so schön harmlos.<br>Auch Petrus, der Jünger Jesu, wollte seinen Kopf aus der Schlinge ziehen. Als er „entdeckt” wurde, hatte er Angst, das gleiche zu erleben wie Jesus: verhaftet und misshandelt zu werden. Deshalb stritt er ab, zu Jesus zu gehören.<br>Wenn es um Leib und Leben geht, haben wir viel Verständnis für eine Notlüge, oder? Aber was wird Jesus empfunden haben, als Petrus ihn verleugnete? Dieser hatte ihn doch drei Jahre lang auf Schritt und Tritt begleitet!<br>Die Bibel, Gottes Wort, kennt beim Thema „Lügen“ keine Grauzone. Die halbe Wahrheit ist eine ganze Lüge. Und was wird aus Notlügen? Sagen wir es so: Die Not vergeht, die Lüge bleibt!";
}
if(septemberday === 265){
    verse.innerHTML = "Ich bin der gute Hirte; der gute Hirte lässt sein Leben für die Schafe.";
    headline_texte.innerHTML = "Lesen & staunen";
    texte.innerHTML = "An dieser Stelle ist eigentlich eine Buchempfehlung.";
}
if(septemberday === 266){
    verse.innerHTML = "Den ersten Bericht habe ich [Lukas] verfasst, o Theophilus, von allem, was Jesus anfing, sowohl zu tun als auch zu lehren.";
    headline_texte.innerHTML = "Flavius Josephus";
    texte.innerHTML = "„Dieser Jesus vollbrachte nämlich ganz unglaubliche Taten und war der Lehrer aller Menschen.“ – Liest sich wie die Fortsetzung unseres heutigen Tagesverses, oder? Das Zitat stammt jedoch nicht aus der Bibel, sondern vom römisch-jüdischen Historiker Flavius Josephus. Wie viele andere Historiker beschreibt er das Leben dieses Jesus von Nazareth. <br>Von kaum einer anderen historischen Person ist die Existenz so gut belegt, wie von Jesus, dem Sohn Gottes. Der Römer Tacitus zum Beispiel beschreibt das schreckliche Ende dieses Jesus: „Der Urheber des Namens „Christen’ ist Christus, der unter der Regierung des Tiberius von Pontius Pilatus hingerichtet worden war.“ Offensichtlich hat die Person Jesu die Historiker total fasziniert. Sie „mussten” für die Nachwelt detailliert festhalten, was sie gehört oder gesehen hatten. <br>Bist auch du von Jesus beeindruckt? In der Bibel, dem Wort Gottes, findest du viel mehr über ihn als bei jedem Historiker. Einfach empfehlenswert!";
}
if(septemberday === 267){
    verse.innerHTML = "So erkenne denn heute und nimm zu Herzen, dass der Herr der Gott ist im Himmel oben und auf der Erde unten, keiner sonst.";
    headline_texte.innerHTML = "Beziehung gesucht";
    texte.innerHTML = "Hast du auch schon einmal von „dem da oben gesprochen? Es klingt dann so, als ob Gott weit weg wäre und sich nicht um uns Menschen kümmern würde. Dass ihm egal wäre, was auf der Erde passiert. Er ist da oben – und wir sind hier unten. Und der eine interessiert sich nicht für den anderen. Doch das stimmt nicht. Gott ist sehr wohl an mir und meinem Leben interessiert. Er ist nicht nur da oben – sondern auch hier unten. Er will eine persönliche Beziehung zu mir aufnehmen. Doch wie kann ich ihm begegnen? Gott hört mich, wenn ich zu ihm spreche. Und er will mir auch seine Gedanken mitteilen. Dafür hat er sein Wort, die Bibel gegeben. Aber die Bibel liest sich nicht wie eine Zeitung. Ich muss es auf eine Beziehung anlegen und offen dafür sein, was Gott mir zeigen will. Deshalb auch das aufrichtige Gebet (ohne Gebetsbuch). So lerne ich Gott immer besser kennen. Wenn ich es ernst meine, lohnt es sich auf jeden Fall!";
}
if(septemberday === 268){
    verse.innerHTML = "Dein Wort ist Wahrheit.";
    headline_texte.innerHTML = "Live & farbig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Livestream.";
}
if(septemberday === 269){
    verse.innerHTML = "Dann wirst du auf deinem Weg Erfolg haben, und dann wird es dir gelingen. Habe ich dir nicht geboten: Sei stark und mutig?";
    headline_texte.innerHTML = "Von Erfolg gekrönt …";
    texte.innerHTML = "… nennt man ein Projekt, das erfolgreich abgeschlossen wird. Auch die Bibel kennt was von Erfolg. Im heutigen Tagesvers geht es um ein riesiges Projekt: Josua, der Anführer des Volkes Israel, soll es über den Jordan nach Kanaan führen. Die Herausforderung: Kanaan ist von gegnerischen Völkern bewohnt, die schwere Sünden begehen. Deshalb sollen sie Schritt für Schritt erobert werden. In dieser Situation spricht Gott ganz persönlich Josua Mut zu. Er sagt zu ihm: „Ich werde dich nicht versäumen und dich nicht verlassen. Sei stark und mutig” (Josua 1,5). Keine Ahnung, vor welcher Herausforderung du stehst. Aber einen besseren Weg zum Erfolg gibt es nicht: Vertraue auf Gott und nimm ihn beim Wort, das du in der Bibel nachlesen kannst! Dann wird dein Projekt „von Erfolg gekrönt sein”, weil du weißt: Ich habe Gott auf meiner Seite. Seine Anerkennung ist mir viel wichtiger als die Bewunderung meiner Mitmenschen.";
}
if(septemberday === 270){
    verse.innerHTML = "Das Leben ist für mich Christus, und das Sterben Gewinn. (Paulus)";
    headline_texte.innerHTML = "Verlust oder Gewinn?";
    texte.innerHTML = "Das Sterben ist Gewinn? Wie kann das sein? Ist es nicht der größte Verlust? Ich verliere mein Leben hier auf der Erde und kann nichts von dem mitnehmen, wofür ich vorher gelebt habe: Familie, Freunde, Besitz, Ansehen, Einfluss, Schönheit, Urlaube ... Alles vorbei. <br>Bevor der Apostel Paulus zum Glauben an Jesus Christus kam, war er ein ehrgeiziger jüdischer Theologe. Er war klug, gebildet und erfolgreich. <br>Doch als er Jesus Christus kennenlernte, war er so erfüllt von ihm, seinem Retter und Herrn, dass er sein ganzes Leben auf ihn ausrichtete und ihm diente. Er wusste: Wenn ich hier die Augen schließe, werde ich bei Christus im Himmel sein. Dort ist es weit besser. Es übertrifft alles, was mir das Leben hier an Freude und Erfüllung bieten kann. <br>Aus dieser Perspektive betrachtet ist das Sterben Gewinn. Alles, was der Glaubende hier mit dem Tod verliert, ist ungleich weniger als was er im Paradies dazugewinnt. Das Schönste kommt eben noch.";
}
if(septemberday === 271){
    verse.innerHTML = "Gepriesen sei der Gott und Vater unseres Herrn Jesus Christus, der Vater der Erbarmungen und Gott allen Trostes, der uns tröstet in all unserer Bedrängnis.";
    headline_texte.innerHTML = "Trost";
    texte.innerHTML = "Trost – der Ausdruck kommt aus dem Althochdeutschen und ist verwandt mit dem Wortstamm treu. Das ergibt Sinn, denn wirksam trösten kann uns nur, wer wirklich treu an unserer Seite ist. Trösten bedeutet schließlich mehr als ein „Kopf hoch, wird schon wieder“ oder ein monoton gemurmeltes „mein Beileid“.<br>Trösten, das bedeutet Festigkeit und seelischen Halt geben, Ermutigung und Zuspruch im Leid.<br>Gott wird in der Bibel Vater der Erbarmungen und Gott allen Trostes genannt, das bedeutet:<br>• Gott ist der absolute Experte für Mitgefühl und Trost.<br>• Allein der Trost, den Gott spendet, reicht wirklich bis in die Tiefe des Leids hinab.<br>• Wen Gott tröstet, der ist getröstet!<br><br>Siehe, um Trost war mir sehr bange. Du aber hast dich meiner Seele herzlich angenommen<br>Jesaja 38,17, Luther-Übersetzung";
}
if(septemberday === 272){
    verse.innerHTML = "Aber ich nehme keine Rücksicht auf mein Leben.";
    headline_texte.innerHTML = "Keine Rücksicht";
    texte.innerHTML = "Er liegt blutig und schmutzig am Boden. Die Kleider sind zerrissen. Schwere Prellungen und Wunden am Kopf und am ganzen Körper. Er bewegt sich nicht mehr. Wütend hat man Steine aufgehoben und ihn so lange beworfen, bis man ihn tot glaubte. Dann hat man seinen leblosen Körper aus der Stadt geschleift und ihn hier draußen in den Dreck geschmissen.<br>Jetzt umringen ihn ein paar Freunde. Plötzlich geschieht etwas völlig Unerwartetes. Der Totgeglaubte bewegt sich! Er steht wieder auf. Paulus lebt! Große Freude! Er blickt sich um und geht ohne zu zögern in genau die Stadt hinein, aus der er gerade herausgeschleift wurde.<br>Einen Tag später zieht er weiter und verkündigt der nächsten Stadt das Evangelium. Die gute Botschaft ist ihm wichtiger als sein Leben. Es ist die Botschaft von Jesu Tod und Auferstehung. Er selbst hat es erlebt – das Evangelium ist Gottes Kraft zur Rettung für jeden, der glaubt. Er fühlt sich gedrängt, es weiterzusagen und nimmt dafür vieles in Kauf. Kannst du Paulus verstehen?";
}
if(septemberday === 273){
    verse.innerHTML = "Ich bin gekommen, damit sie Leben haben und es in Überfluss haben.";
    headline_texte.innerHTML = "Live & farbig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Livestream.";
}
if(septemberday === 274){
    verse.innerHTML = "Als aber Jesus sie sah, rief er sie zu sich und sprach zu ihr: Frau, du bist befreit von deiner Schwäche! Und er legte ihr die Hände auf, und sogleich richtete sie sich auf und verherrlichte Gott.";
    headline_texte.innerHTML = "Änderung der Perspektive";
    texte.innerHTML = "Die Frau, um die es in dem heutigen Bibelwort geht, hatte 18 Jahre unter ihrer Schwachheit gelitten. Sie war zusammengekrümmt und ganz unfähig, sich aufzurichten. Ob sie noch Hoffnung hatte, jemals geheilt zu werden? <br>Spiegelt ihre Situation nicht das wider, was sich manchmal innerlich bei uns abspielt? Wenn Trauer oder Sorgen da sind, dann ist unser Blick gesenkt und alles dunkel. Wir schauen auf uns selbst, sind deprimiert und schaffen es nicht, uns aufzurichten. Die Perspektive auf unser Leben ist sehr eingeschränkt. <br>Jesus sah die Not der Frau und rief sie zu sich. Zuerst ein Wort, dann eine Berührung: Sofort richtete sie sich auf und gab Gott Ehre. <br>Heute lebt Jesus im Himmel. Dennoch kann und will er uns befreien von allem, was uns nach unten zieht und uns hindert, auf Gott zu schauen und glücklich zu sein.";
}

// Oktober
if(month === 10){
    janauryday = false;
    februaryday = false;
    marchday = false;
    aprilday = false;
    mayday = false;
    juneday = false;
    julyday = false;
    augustday = false;
    septemberday = false;
    octoberday = true;
    novemberday = false;
    decemberday = false;

    octoberday = septemberday+day;

    console.log(octoberday);
}
if(octoberday === 275){
    verse.innerHTML = "Jesus sprach zu dem Hauptmann: Geh hin, dir geschehe, wie du geglaubt hast.";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Glauben";
    texte.innerHTML = "Ein römischer Hauptmann kommt zu Jesus. Er hat ein großes Problem: Einer seiner Diener wird von einer fiesen Krankheit gequält. Jesus sagt zu ihm: „Ich will kommen und ihn heilen.“ Der Hauptmann lehnt ab: „Ich bin nicht wert, dass du unter mein Dach trittst“, ist seine Antwort. Er denkt sehr gering von sich selbst, aber sehr hoch von Jesus: Wenn Jesus nur ein Wort aus der Ferne sprechen würde, wäre sein Diener gleich gesund. Zum Vergleich nennt er seine eigene Autorität: Wenn er anderen Befehle erteilt, werden diese gleich befolgt.<br>Jesus wundert sich über den großen Glauben des Hauptmanns. Dieser Römer traut ihm mehr zu als seine Landsleute. Deshalb sagt er: „Selbst nicht in Israel habe ich so großen Glauben gefunden.“ Dann wendet er sich wieder dem Hauptmann zu: „Geh hin, dir geschehe, wie du geglaubt hast.“<br>So heilt Jesus den Diener des Hauptmanns durch ein Wort, ohne ihn gesehen zu haben und belohnt den Glauben eines Menschen, der ihm alles zutraut.";
}
if(octoberday === 276){
    verse.innerHTML = "Wenn wir unsere Sünden bekennen so ist Gott treu und gerecht dass er uns die Sünden vergibt.";
    headline_texte.innerHTML = "Bitte keine unbequemen Themen!";
    texte.innerHTML = "Miese Stimmung? Nicht mit mir. Immer positiv denken, immer schön lächeln. Klingt nach einer chilligen Lebenseinstellung – oder? Kritisch wird’s nur, wenn gute Stimmung zum obersten Gesetz wird. Wenn keine unbequemen Themen, keine Kritik mehr zugelassen ist. Doch eins ist sicher: Gott hält sich nicht an unsere Regeln. In der Bibel sagt er klipp und klar, was Sache ist.<br>Wer ist Gott für dich? Eine anonyme höhere Macht? Wie sieht deine Beziehung zu ihm aus? Distanz statt Vertrautheit, Funkstille statt Kommunikation?<br>Wie kommt das? Ganz einfach: Gott ist heilig – du nicht. Deine Gedanken, dein Lebensstil, das passt nicht zu Gott. Doch Gott ignoriert dein Problem nicht. Im Gegenteil, er will es lösen: Er war sich nicht zu schade, dafür selbst auf die Erde zu kommen – als Mensch! Von wegen anonyme Macht – in Jesus wurde Gott so sichtbar wie nie zuvor. Er ist ein Gott der Vergebung, gnädig und barmherzig, langsam zum Zorn und groß an Güte (Nehemia 9,17).";
}
if(octoberday === 277){
    verse.innerHTML = "Da verließen ihn die Jünger alle und flohen.";
    headline_texte.innerHTML = "Da verließen sie ihn";
    texte.innerHTML = "Diese Redewendung hat ihren Ursprung in der Bibel. Heute hört man sie, wenn jemand in einer Prüfung einen Blackout hat oder wenn ein Motor nach dem letzten Stottern endgültig aufgibt. Die alltägliche Bedeutung lautet also: Jetzt weiß er/sie nicht mehr weiter oder: Jetzt ist alles aus und vorbei.<br>Interessant ist der Kontext der Redewendung im Matthäusevangelium: Jesus wird in einer Nacht-und-Nebel-Aktion gefangen genommen. In diesem Moment verlassen ihn alle Jünger. Das erschüttert ihn zutiefst! Hat er sie nicht drei Jahre lang durch Palästina begleitet? Hat er nicht zahllose Mahlzeiten bei guter Tischgemeinschaft mit ihnen gehabt? Und sind seine eindrucksvollen Predigten und Wunder aus ihrem Gedächtnis verschwunden?<br>​​​​​​​Jetzt, wo es brenzlig wird, verlassen sie ihn – und Jesus geht den Weg allein zum Kreuz. Er hätte die Macht, sich aus dieser verlassenen und leidvollen Situation zu befreien. Doch geht er hin, um für das Versagen anderer am Kreuz zu büßen – auch für mich.";
}
if(octoberday === 278){
    verse.innerHTML = "Wiederum nun redete Jesus zu ihnen und sprach: Ich bin das Licht der Welt; wer mir nachfolgt, wird nicht in der Finsternis wandeln, sondern wird das Licht des Lebens haben";
    headline_texte.innerHTML = "Lied & lebendig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Lied.";
}
if(octoberday === 279){
    verse.innerHTML = "Weißt du es nicht? Oder hast du es nicht gehört? Ein ewiger Gott ist der Herr, der Schöpfer der Enden der Erde; er ermüdet nicht und ermattet nicht, unergründlich ist sein Verstand.";
    headline_texte.innerHTML = "Fliegen – Laufen – Gehen";
    texte.innerHTML = "Wem denn wollt ihr mich vergleichen, dem ich gleich wäre?“, fragt Gott im Jesaja-Kapitel unseres Tagesverses. „Blickt nach oben und seht“, fährt er fort und verweist auf den Sternenhimmel, „wer hat diese geschaffen? Er, der ihr Heer hervortreten lässt nach der Zahl, ruft sie alle mit Namen“. 70 Trilliarden Sterne soll es geben. Ungefähr. Keiner kann bis dahin zählen. Doch Gott kennt sie alle mit Namen. Wie unbegreiflich groß ist Gott! Kein Gottesbild kann ihn nachzeichnen. Wir sind auf seine eigene Offenbarung angewiesen – wie zum Beispiel in Jesaja 40. <br>Und ausgerechnet in diesem Kapitel über seine unfassbare Größe steht auch dieser Satz: „Die auf den Herrn harren, gewinnen neue Kraft: Sie heben die Schwingen empor wie die Adler; sie laufen und ermatten nicht, sie gehen und ermüden nicht“. Gott kümmert sich liebevoll um jeden, der auf ihn hofft und hat ein Auge auf den individuellen Rhythmus: Manche fliegen wie Adler durchs Leben, andere „gehen“ – er gibt Kraft. Vertraue auf Gottes Größe!";
}
if(octoberday === 280){
    verse.innerHTML = "Von der sechsten Stunde an kam eine Finsternis über das ganze Land bis zur neunten Stunde. Um die neunte Stunde aber schrie Jesus auf mit lauter Stimme und sagte: Eli, Eli, lama sabachtani?, das ist: Mein Gott, mein Gott, warum hast du mich verlassen?";
    headline_texte.innerHTML = "Seltsame Zeugen (5) – Dunkelheit";
    texte.innerHTML = "Drei Stunden Leiden und Spott für Jesus am Kreuz. Dann wird es mitten am Tag dunkel. Drei Stunden lang, so halten es die biblischen Berichterstatter Matthäus, Markus und Lukas fest. Es ist, als halte die Schöpfung selbst den Atem an, als stände die Zeit still, als der Schöpfer für die Schuld seiner rebellischen und doch so geliebten Geschöpfe gerichtet wird.<br>Dieses Gericht, das Gott an Jesus unsertwegen vollzieht, wird auch äußerlich allen Blicken und aller Vorstellung der Menschen entzogen. Bis heute! Doch wer es im Glauben für sich annimmt, ist gerettet!<br>Wer hat dich so geschlagen, mein Heil, und dich mit Plagen so übel zugericht?<br>Ich, ich und meine Sünden, die sich wie Körnlein finden des Sandes an dem Meer.<br>(Paul Gerhardt)";
}
if(octoberday === 281){
    verse.innerHTML = "Der Knabe wird frech auftreten gegen den Greis und der Verachtete gegen den Geehrten.";
    headline_texte.innerHTML = "Respekt – noch zeitgemäß?";
    texte.innerHTML = "Laut Wikipedia ist Respekt eine Form der Wertschätzung, Aufmerksamkeit und Ehrerbietung gegenüber einem anderen Lebewesen oder einer Institution. Leider gibt es immer mehr Leute, die Respekt als uncool, unnötig oder fast schon peinlich ansehen. Wie sonst erklärt sich die zunehmende Respektlosigkeit gegenüber Eltern, Lehrern, Polizisten, Rettungskräften, Politikern, Vorgesetzten, Verkehrsteilnehmern, Behörden usw.? Gegenseitiger Respekt ist ein uraltes biblisches Prinzip und das einzige Konzept für ein intaktes gesellschaftliches Leben – festgelegt von Gott z. B. in den 10 Geboten in 2. Mose 20.<br>Wer Gott liebt und sein Leben nach der Bibel ausrichtet, für den ist respektvoller Umgang mit anderen selbstverständlich. Oder um es mit den Worten der Bibel zu sagen:<br>„Gebt allen, was ihnen gebührt: die Steuer, dem die Steuer, den Zoll, dem der Zoll, die Furcht, dem die Furcht, die Ehre, dem die Ehre gebührt ”<br>Römer 13,7";
}
if(octoberday === 282){
    verse.innerHTML = "Wer irgend sein Leben erretten will, wird es verlieren; wer aber irgend sein Leben verliert um meinetwillen, der wird es erretten.";
    headline_texte.innerHTML = "Neustart";
    texte.innerHTML = "So ein Neustart mit Jesus ist eine radikale Sache. <br>Es fängt damit an, dass Gott in deinem Herzen eine Grundreinigung durchführt. Danach darfst du glücklich aufatmen: Alle deine Sünden sind vergeben! Aber dann geht es weiter: Gott will dir helfen, auch dein Leben aufzuräumen: Alltagsgewohnheiten, Freizeitaktivitäten, Beziehungen. Gibt’s noch irgendwelche Sachen, die dein Leben vermüllen? Dann weg damit. <br>Besonders belastend sind Schuldgefühle und kaputte Beziehungen. Fällt es dir schwer, Fehlverhalten zu bekennen oder anderen zu vergeben? Tu es trotzdem, mit Gottes Hilfe. Es ist total befreiend! <br>Niemandem fällt es leicht, loszulassen. Jesus Christus zu folgen kann bedeuten, dass wir Wünsche zurückstellen und vielleicht sogar jahrelange Träume begraben müssen. Doch er lässt sich nichts schenken. Wer für ihn verzichtet, wird schon in diesem Leben hundertfach empfangen und im Himmel das ewige Leben genießen. Wag es – es lohnt sich!";
}
if(octoberday === 283){
    verse.innerHTML = "Vertraut ewig auf den Herrn; denn in Jah, dem Herrn, ist ein Fels der Ewigkeiten.";
    headline_texte.innerHTML = "Ausgedient?";
    texte.innerHTML = "Er war erfolgreich, ohne Frage. Der erste von ihm rollte 1938 vom Band, der letzte 1978 in Europa und 1996 in Brasilien. Und am 30. Juli 2003 war dann auch in Mexiko Schluss. Von dem Symbol des deutschen Wirtschaftswunders wurden 21.529.464 Stück gebaut, dann hatte er ausgedient, der VW-Käfer<br>Manche halten auch die Botschaft der Bibel für ausgedient. Früher war Jesus Christus vielleicht mal wichtig – doch jetzt hat er ausgedient – in der Gesellschaft, im Leben der Menschen, bei dir.<br>Doch anders als der VW-Käfer ist das Evangelium ein echtes „Erfolgsmodell”, wird die Bibel immer noch übersetzt und verbreitet, wird Jesus Christus immer noch gepredigt, werden Menschen immer noch errettet. Sie lernen Jesus kennen, bekennen ihm ihre Schuld, vertrauen ihm, erfahren ihn und leben mit ihm. Und reden von ihm. Wie gut, dass er derselbe ist,<br>„ gestern und heute und in Ewigkeit “<br>Hebräer 13,8";
}
if(octoberday === 284){
    verse.innerHTML = "Was sollen wir tun, um die Werke Gottes zu wirken? Jesus antwortete und sprach zu ihnen: Dies ist das Werk Gottes, dass ihr an den glaubt, den er gesandt hat.";
    headline_texte.innerHTML = "Gute Werke";
    texte.innerHTML = "• Handlungen, die sich an der Bibel orientieren und damit Gottes Gedanken entsprechen,<br>• werden „aus Glauben” getan und sind der Beweis, dass Glaube vorhanden ist;<br>• zu unterscheiden von vermeintlich guten Werken: Handlungen, die zwar gut aussehen, aber für Gott „tot” sind, weil sie der eigenen Vorstellung entspringen;<br>• können keine „bösen Werke” kompensieren;<br>• bilden keine Eintrittskarte für den Himmel.";
}
if(octoberday === 285){
    verse.innerHTML = "Der Sohn des Menschen ist gekommen, zu suchen und zu erretten, was verloren ist.";
    headline_texte.innerHTML = "Gott hat mitgebohrt";
    texte.innerHTML = "„Gott hat mitgebohrt“ lautete die Schlagzeile eines Boulevardblatts am Tag nach der Rettung beim „Wunder von Lengede“. Was war passiert? <br>Am 24. Oktober 1963 versank die Eisenerz-Grube „Mathilde“ in Lengede unter einer Welle von Schlamm- und Wassermassen. Zu diesem Zeitpunkt befanden sich noch 129 Bergleute unter Tage. 11 von ihnen konnten sich in einen Hohlraum von 5m x 2m x 3m retten. Dort fand sie am 3. November eine Suchbohrung durch eine „glückliche Fügung“. <br>Eine erste Rettungsbohrung musste abgebrochen werden – die Eingeschlossenen hatten, ungeübt, Nord und Süd verwechselt. Eine zweite Bohrung erreichte sie. Der Innendurchmesser der Verrohrung maß 480 mm. Verpackt in der „Dahlbuschbombe“ konnten alle Bergleute gerettet werden. <br>Die Eingeschlossenen konnten sich selbst nicht retten – die Hilfe musste von oben kommen. Weil du und ich uns selbst nicht retten konnten, sandte Gott seinen Sohn. Sein Tod am Kreuz bahnte uns den Weg in die Freiheit. Das ist das Wunder von Golgatha!";
}
if(octoberday === 286){
    verse.innerHTML = "Der Herr ist mein Hirte, mir wird nichts mangeln.";
    headline_texte.innerHTML = "Namen Gottes im Alten Testament – Jahwe-Rohi";
    texte.innerHTML = "Psalm 23 ist wahrscheinlich der bekannteste Psalm in der Bibel. Selbst diejenigen, die mit dem christlichen Glauben nicht viel am Hut haben, werden den Tagesvers schon einmal gelesen oder gehört haben. Hier lässt sich der große Gott im Himmel, der Schöpfer des Universums ganz persönlich Jahwe-Rohi – der Herr, MEIN Hirte – nennen. Er kümmert sich ganz persönlich um jeden einzelnen Menschen. Er weiß immer, was gut für uns ist und will uns führen, weiden, Erfrischung und Ruhe schenken. <br>Was David in Psalm 23 bereits aus eigener Erfahrung über Gott schreiben konnte, bestätigt Jesus Christus selbst im Neuen Testament: „Ich bin der gute Hirte; der gute Hirte lässt sein Leben für die Schafe“ (Johannes 10,11). <br>So weit geht die Hirten-Liebe Gottes also: Er kommt als Mensch auf diese Erde, um sein Leben für uns zu lassen. Einen größeren Liebesbeweis kann es nicht geben – einen besseren Hirten ebenfalls nicht!";
}
if(octoberday === 287){
    verse.innerHTML = "Plötzlich umstrahlte ihn ein Licht aus dem Himmel; und er fiel auf die Erde und hörte eine Stimme, die zu ihm sprach: Saul, Saul, was verfolgst du mich? Er aber sprach: Wer bist du, Herr? Er aber sprach: Ich bin Jesus, den du verfolgst.";
    headline_texte.innerHTML = "Gerade & heraus";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Video.";
}
if(octoberday === 288){
    verse.innerHTML = "Wir werden ihn sehen, wie er ist.";
    headline_texte.innerHTML = "Endlich bei Jesus!";
    texte.innerHTML = "• Wenn wir eine schwere Zeit durchlebt haben, sagen wir am Ende: Endlich geschafft!<br>• Wenn wir eine Prüfung bestanden haben, sagen wir: Endlich vorbei!<br>• Doch kaum jemand wird sich auf sein Lebensende freuen und sagen: Endlich tot!<br>Für viele Menschen ist mit dem Tod alles aus und vorbei (was nicht stimmt!). Für diejenigen, die Jesus Christus folgen, aber nicht. Für sie fängt dann das Schönste erst an. Deshalb können sie dann sagen: Endlich bei Jesus!<br>Ein Christ freut sich darauf, den zu sehen, der für ihn gestorben ist, der seine Sündenschuld bezahlt und ihm ewiges Leben geschenkt hat. Er freut sich darauf, den zu sehen, der ihm den Himmel geöffnet hat. Er freut sich auf seinen Retter und Herrn, auf Jesus Christus in der Herrlichkeit.";
}
if(octoberday === 289){
    verse.innerHTML = "Durch Glauben verstehen wir, dass die Welten durch Gottes Wort bereitet worden sind, so dass das, was man sieht, nicht aus Erscheinendem geworden ist.";
    headline_texte.innerHTML = "Mensch & mutig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Einblick in das Leben eines Christen.";
}
if(octoberday === 290){
    verse.innerHTML = "Weine nicht!";
    headline_texte.innerHTML = "Aus dem Leben von Jesus – Trauer";
    texte.innerHTML = "Jesus nähert sich der Stadt Nain, als gerade ein Trauerzug den Ort verlässt. Sie tragen einen Toten heraus, gefolgt von seiner weinenden Mutter. Sie hat bereits ihren Mann beerdigen müssen und jetzt ist auch noch ihr einziger Sohn gestorben. Hoffnungslosigkeit, Verzweiflung und Trauer spiegeln sich in ihren verweinten Augen wider.<br>Von dem Leid der Frau tief bewegt, geht Jesus zu ihr. Er schaut sie an und sagt: „Weine nicht!“ Dann geht er zur Bahre und fasst sie an. Die Träger bleiben stehen. Es ist totenstill. Dann sagt Jesus zu dem toten Jungen: „Ich sage dir, steh auf!“ Das Unfassbare geschieht: Der Tote setzt sich auf und beginnt zu reden. Er lebt! Was für ein Wunder!<br>Jesus gibt einem Toten das Leben zurück und heilt damit unaufgefordert das zerbrochene Herz einer Mutter<br>​​​​​​​Die Menschen um ihn herum packt die Ehrfurcht: „Gott hat sein Volk besucht,“ geben sie staunend zu.";
}
if(octoberday === 291){
    verse.innerHTML = "Du sollst das Wort aus meinem Mund hören und sie in meinem Namen warnen.";
    headline_texte.innerHTML = "Frühwarnsysteme";
    texte.innerHTML = "Auf der ganzen Welt werden Frühwarnsysteme eingesetzt. Das Militär nutzt zum Beispiel luftgestützte Radarsysteme, damit Angriffe aus der Luft schnell erfasst werden. Städte und Kommunen setzen Pegelsensoren ein, um die Bevölkerung vor Hochwassergefahr zu warnen. Diese Systeme dienen in erster Linie dazu, Leben zu retten.<br>Im Gegensatz zu diesen technischen Hilfsmitteln sind Gottes Frühwarnsysteme zu 100% zuverlässig und seine Warnungen rechtzeitig. Er warnt uns allerdings nicht vor Naturkatastrophen oder Unglücken. Diese benutzt er sogar manchmal, um uns zu warnen. Noch deutlicher ist seine Warnung, wenn er durch die Bibel zu uns spricht. In jedem Fall will er verhindern, dass unsere Seele „ins Geschoss rennt”. Gott handelt aus Liebe und will uns retten. Schlage seine Warnung nicht in den Wind.<br>„Wenn sie aber nicht hören, so rennen sie ins Geschoss und verscheiden ohne Erkenntnis”<br>Hiob 33,18; 36,12";
}
if(octoberday === 292){
    verse.innerHTML = "Gott sprach zu Abraham: Nimm deinen Sohn, deinen einzigen, den du lieb hast, den Isaak, und zieh hin in das Land Morija und opfere ihn dort als Brandopfer auf einem der Berge, den ich dir sagen werde.";
    headline_texte.innerHTML = "Den eigenen Sohn nicht verschont";
    texte.innerHTML = "Er ist ein tief gläubiger Mann und ist fest davon überzeugt: Meinem Gott kann ich zu 100% vertrauen; er macht keinen Fehler'<br>In diesem Vertrauen macht sich Abraham auf die schwerste Reise seines Lebens. Er zieht mit seinem geliebten Sohn Isaak drei Tage zu dem Ort, den Gott ihm genannt hat. Dort soll er Isaak opfern. Und er ist tatsächlich bereit, es zu tun. Als er schließlich das Messer in die Hand nimmt, ruft ihm der Engel des Herrn zu: „Abraham, Abraham ... Strecke deine Hand nicht aus nach dem Knaben, und tu ihm gar nichts! Denn nun weiß ich, dass du Gott fürchtest und deinen Sohn, deinen einzigen, mir nicht vorenthalten hast” (1. Mose 22, 11.12).<br>In Römer 8,32 finden wir eine erstaunliche Parallele zu dieser Geschichte: Gott hat seinen eigenen Sohn nicht verschont, sondern ihn für uns alle hingegeben. Abraham war bereit, seinen Sohn zu opfern, brauchte es aber schließlich nicht zu tun. Gott hat es tatsächlich getan: Um uns zu erretten, musste Jesus, sein geliebter Sohn, sterben.";
}
if(octoberday === 293){
    verse.innerHTML = "Nachdem Gott vielfältig und auf vielerlei Weise ehemals zu den Vätern geredet hat in den Propheten, hat er am Ende dieser Tage zu uns geredet im Sohn.";
    headline_texte.innerHTML = "Lesen & staunen";
    texte.innerHTML = "An dieser Stelle ist eigentlich eine Buchempfehlung.";
}
if(octoberday === 294){
    verse.innerHTML = "Denn es hat ja Christus einmal für Sünden gelitten, der Gerechte für die Ungerechten, damit er uns zu Gott führe, getötet nach dem Fleisch, aber lebendig gemacht nach dem Geist.";
    headline_texte.innerHTML = "Unschuldig zum Tod verurteilt";
    texte.innerHTML = "Wann ist je jemand zum Tode verurteilt und hingerichtet worden, über den …<br>• … derjenige, der ihn an seine Feinde verriet, sagte: „Ich habe gesündigt, indem ich schuldloses Blut überliefert habe“ (Matthäus 27,4)?<br>• … derjenige, der das Todesurteil sprach, urteilte: „Ich finde keine Schuld an diesem Menschen” (Lukas 23,4) und von seiner Frau gewarnt worden war: „Habe du nichts zu schaffen mit jenem Gerechten” (Matthäus 27,19)?<br>• … derjenige, der mit ihm gekreuzigt wurde, feststellte: „Wir empfangen, was unsere Taten wert sind; dieser aber hat nichts Ungeziemendes getan (Lukas 23,41);<br>• … derjenige, der mit seinen Soldaten das Urteil vollstreckte, sagte: „Wahrhaftig, dieser Mensch war gerecht“ (Lukas 23,47)?";
}
if(octoberday === 295){
    verse.innerHTML = "Wenn ich anschaue deine Himmel, deiner Finger Werk, den Mond und die Sterne, die du bereitet hast: Was ist der Mensch, dass du seiner gedenkst?";
    headline_texte.innerHTML = "Jeder Mensch – äußerst wertvoll";
    texte.innerHTML = "Im Vergleich zu dem unermesslichen Weltraum erscheint der schwache sterbliche Mensch völlig unbedeutend. Was bewegt den großen Gott dazu, an uns zu denken und sich uns zuzuwenden? Die Antwort liegt in seinem Wesen begründet: Er ist Liebe. Und Liebe wird tätig. Liebe gibt. Liebe wünscht dem anderen das Beste und setzt sich dafür ein. <br>Das Beste, was Gott uns geben kann und will, ist eine vertraute Beziehung zu ihm selbst – und das für ewig. Doch weil wir Sünder sind und durch unser eigenwilliges Verhalten Gott beleidigt haben, kann er nicht ohne Weiteres eine Beziehung zu uns eingehen. Deshalb hat Gott sein Sohn Jesus Christus gesandt. Er wurde das Sühnopfer; ihn traf das Gerichtsurteil, das wir verdient hatten. <br>Gott hat alles getan, damit wir das Ziel erreichen, das er für uns gesteckt hat: die ewige Seligkeit. So viel sind wir ihm wert! Und was müssen wir tun? Bereuen, umkehren und glauben.";
}
if(octoberday === 296){
    verse.innerHTML = "Der Herr sprach in seinem Herzen: Nicht noch einmal will ich den Erdboden verfluchen wegen des Menschen.";
    headline_texte.innerHTML = "Nicht noch einmal!";
    texte.innerHTML = "Wie die heftige Wasserflut die ganze Erde zerstörte und eine einzige Familie in einem riesigen Schiff (Arche) überlebte – den Bericht muss man im Original gelesen haben (er steht im ersten Buch Mose, Kapitel 6–8). Die Flut war das gerechte Strafgericht Gottes, weil die Menschen der damaligen Zeit extrem böse waren. <br>Nach der Flut sagt Gott: „Nicht noch einmal … Warum das? Sind die Menschen nach der Flut besser geworden? Keinesfalls! Hat Gott vor der Bosheit kapituliert? Unvorstellbar – Gott ist heilig! Es war Noahs Brandopfer, das Gott veranlasst hat, keine Flut mehr über die Erde zu bringen. Und das hat er sogar mit einem Zeichen besiegelt: dem Regenbogen. <br>Gott kann das Böse der Menschen nach der Flut nicht ungestraft lassen. Aber durch den Sühnetod seines Sohnes Jesus Christus kann er jetzt den Menschen seine Gnade anbieten. So ist Gott – Er will uns retten! Er gibt jedem eine echte Chance. Nutzen wir sie, indem wir den Tod Jesu stellvertretend für uns annehmen.";
}
if(octoberday === 297){
    verse.innerHTML = "Christus Jesus, der in Gestalt Gottes war, achtete es nicht für einen Raub, Gott gleich zu sein, sondern er entäußerte sich selbst …, indem er in Gleichheit der Menschen geworden ist.";
    headline_texte.innerHTML = "Von ganz oben nach ganz unten";
    texte.innerHTML = "Jeder will nach oben: Sven will auf der Karriereleiter hoch hinaus; Judith will im Kreis der Freundinnen den Ton angeben; der Sohnemann will auf dem Schulhof der Beliebteste sein; und das Töchterchen träumt davon, ein berühmter Star zu sein. Alle wollen groß rauskommen. <br>Doch einer war ganz anders: Jesus Christus. Er kam vom Himmel auf die Erde; er war und ist Gott und wurde Mensch; für uns eine unvorstellbare Entäußerung; er war als Baby abhängig von der Liebe und Fürsorge seiner Mutter; und selbst als Erwachsener erniedrigte er sich – bis in den Tod. Warum? <br>Weil du ihm so wertvoll bist und er dich einmal bei sich haben will. Deshalb kam er, von ganz oben nach ganz unten. Um dich, der du unten bist, nach ganz oben zu ziehen, wo er jetzt wieder ist. <br>​​​​​​​Jesus betete: „Vater, ich will, dass die, die du mir gegeben hast, auch bei mir seien, wo ich bin.” (Johannes 17,24) – Gehörst du dazu?";
}
if(octoberday === 298){
    verse.innerHTML = "Ich will dich beraten, mein Auge auf dich richten.";
    headline_texte.innerHTML = "Da ist guter Rat teuer";
    texte.innerHTML = "Wenn „guter Rat teuer“ ist, stehen wir meistens vor einem unvorhergesehenen oder unlösbaren Problem. „Teuer“ bedeutet in einem solchen Fall, dass der passende Tipp für die Problemlösung nicht vorhanden und somit „unbezahlbar“ ist. <br>In anderer Hinsicht ist guter Rat auch teuer – nämlich immer dann, wenn sich Fachleute die Beratung von Firmen, Politikern oder Privatleuten fürstlich bezahlen lassen. Dann bleibt zu hoffen, dass eine solche Beratung sich auch bezahlt macht, also zu Lösungen und Erfolgen führt. <br>Gott macht denen, die mit ihm leben und ihm vertrauen, ein in der Tat unbezahlbar wertvolles „Beratungsangebot”: „Wenn aber jemand von euch Weisheit mangelt, so erbitte er sie von Gott, der allen einfach gibt und nichts vorwirft, und sie wird ihm gegeben werden“ (Jakobus 1,5). Allerdings kommen wir nicht umhin, die Bibel zu lesen: „Deine Zeugnisse sind auch meine Wonne, meine Ratgeber” (Psalm 119,24).";
}
if(octoberday === 299){
    verse.innerHTML = "Ich bin gekommen, damit sie Leben haben und es in Überfluss haben.";
    headline_texte.innerHTML = "Wovon bist du erfüllt?";
    texte.innerHTML = "Bist du zufrieden? Glücklich? Erfüllt? Liebst du dein Leben? Oder quälst du dich gerade durch … lustlos, unmotiviert, genervt? Wünschst du dir eine grundlegende Veränderung? Manchmal hört man Sätze wie: „So richtig glücklich bin ich erst, wenn ich den neuen Job habe.“ Oder: „Wenn ich im Auto sitze und in den Urlaub fahre, dann geht das Leben los“. Oder: „Wenn ich mal Kinder habe, dann bin ich glücklich.“ Alles nachvollziehbar. Aber ist es nicht eine Illusion, dass der Erfüllungsgrad in unserem Leben irgendwann vollständig erreicht ist? Ist es nicht so, dass mit jeder Wunscherfüllung gleich ein neuer Wunsch entsteht? <br>Der heutige Bibelvers ändert meinen Blickwinkel radikal: Weg von mir, hin zu Jesus Christus. Er ist gekommen, damit wir Leben haben und es in Überfluss haben. Das meint nicht ein Leben mit Geld und Luxus. Es geht um eine gelebte, vertrauensvolle Beziehung mit ihm und Gott, dem Vater. Sie macht glücklich und erfüllt. Jetzt und für immer.";
}
if(octoberday === 300){
    verse.innerHTML = "Das Gras ist verdorrt, die Blume ist abgefallen; aber das Wort unseres Gottes besteht in Ewigkeit.";
    headline_texte.innerHTML = "Haltbar bis in Ewigkeit";
    texte.innerHTML = "„I bims, ein Jugendwort des Jahres. Aber vong Trend her, werde ich kaum noch genutzt. – Smombie und Babo sind genauso wenig fly!“ <br>Wenn heute jemand mit Jugendwörtern der vorigen Jahre „um sich wirft“, ist es doch eher ziemlich cringe, oder? Wer damals swag hatte, war vor kurzem noch smash. Und während du diesen Zettel liest, gibt es schon einen neuen Ausdruck für jemanden, bei dem es läuft. Die Jugendwörter kommen und gehen. Und der Wandel der gesamten Jugendsprache ist so wyld, dass man kaum noch hinterherkommt. <br>Im heutigen Bibelvers wird diese Vergänglichkeit anhand der Natur veranschaulicht. Während Jahreszeiten (oder eben Jugendwörter) kommen und gehen, gibt es eine Konstante: das Wort Gottes. Es hat kein Verfallsdatum. Vor Tausenden Jahren hat es zu Menschen gesprochen. Heute spricht es zu dir und morgen wird es genauso hochaktuell sein.";
}
if(octoberday === 301){
    verse.innerHTML = "Das ganze Haus Israel wisse nun zuverlässig, dass Gott ihn sowohl zum Herrn als auch zum Christus gemacht hat, diesen Jesus, den ihr gekreuzigt habt.";
    headline_texte.innerHTML = "Live & farbig";
    texte.innerHTML = "An dieser Stelle ist eigentlich ein Livestream.";
}
if(octoberday === 302){
    verse.innerHTML = "... in der Hoffnung des ewigen Lebens, das Gott, der nicht lügen kann, vor ewigen Zeiten verheißen hat.";
    headline_texte.innerHTML = "Was Gott nicht kann";
    texte.innerHTML = "Menschen enttäuschen. Betrügen. Lügen. Der allmächtige Gott dagegen kann so etwas nicht. Was? Ein Gott, der etwas nicht kann?<br>Genau! Gott ist allmächtig, dabei aber absolut integer. Es ist ihm nicht möglich, gegen sein Wesen zu handeln. Damit ist er zutiefst vertrauenswürdig. Gibt es einen Menschen, von dem du das Gleiche sagen kannst? Wenn du so jemand an deiner Seite hast im Leben – wäre das nicht genial? Du könntest alles mit ihm besprechen. Ohne Angst, betrogen zu werden, mit absoluter Gewissheit, dass Gott immer zu dem steht, was er versprochen hat.<br>Wenn Gott also das ewige Leben verheißt, dann gibt er es auch. Aber wem? Allen Menschen? Nein, das kann er nicht tun. Gott kann keine einzige Sünde in seiner Gegenwart dulden, weil er zu heilig dafür ist (Habakuk 1,13). Nur derjenige, der eine innere Waschung und Erneuerung erlebt hat, wird Erbe des ewigen Lebens sein (Titus 3,3-7). Gott hat es versprochen und er kann nicht lügen!";
}
if(octoberday === 303){
    verse.innerHTML = "Deine Worte waren vorhanden, und ich habe sie gegessen, und deine Worte waren mir zur Wonne und zur Freude meines Herzens.";
    headline_texte.innerHTML = "Mit den besten Empfehlungen";
    texte.innerHTML = "George Washington (1732–1799), erster Präsident der Vereinigten Staaten von Amerika, bei seinem Amtseid: „So wahr mir Gott helfe”. Von ihm stammt auch dieses Zitat: „Ohne Gott und die Bibel ist es unmöglich, die Welt richtig zu regieren”. <br>John Quincy Adams (1735–1826), der zweite Präsident der USA: „Ich habe es mir schon vor vielen Jahren zur Gewohnheit gemacht, die Bibel einmal im Jahr durchzulesen“. <br>Abraham Lincoln (1809–1865), der 16. Präsident: „Ich glaube, dass die Bibel das beste Geschenk ist, das Gott den Menschen jemals gegeben hat. Alles Gute von dem Erlöser der Welt wird uns in diesem Buch mitgeteilt“. <br>Dwight D. Eisenhower (1890–1969), der 34. Präsident, fasste die Stellung der Bibel in einer Rede vor der amerikanischen Bibelgesellschaft wie folgt zusammen: „Die Bibel wurde durch die Jahrhunderte bestätigt. Unsere Gesellschaft ist auf ihren Worten aufgebaut“.";
}
if(octoberday === 304){
    verse.innerHTML = "Alle Flüsse laufen ins Meer, und das Meer wird nicht voll; an den Ort, wohin die Flüsse laufen, dorthin laufen sie immer wieder.";
    headline_texte.innerHTML = "Alle Wasser laufen ins Meer";
    texte.innerHTML = "Erkennst du in der Redensart den ersten Teil vom Tagesvers wieder? Geschrieben hat sie König Salomo und er zeichnet ein anschauliches Bild: Alle Flüsse fließen ins Meer. Über dem Meer verdunstet das Wasser und bildet Wolken. Diese regnen woanders ab. Die Tropfen sammeln sich zu Bächen und Flüssen, die ins Meer laufen – ein sich ständig wiederholender Kreislauf, den Salomo mit den Worten zusammenfasst: „Es gibt gar nichts Neues unter der Sonne” (Prediger 1,9). <br>Da stellt sich die Frage: Welchen Sinn hat mein Leben, wenn alles einer gewissen Gesetzmäßigkeit folgt? Der weise Salomo kam zum Ergebnis: Alles ist Nichtigkeit und ein Haschen nach Wind. <br>Aber ein sinnloses und leeres Leben entsteht nur dann, wenn man Gott und seine Absichten außer Acht lässt. Wer entdeckt hat, welchen Reichtum Gott für uns Menschen bereithält – Vergebung, Versöhnung, Frieden, Liebe, Hoffnung etc. – weiß, was ein erfülltes Leben mit Perspektive ist.";
}
if(octoberday === 305){
    verse.innerHTML = "Kämpfe den guten Kampf des Glaubens.";
    headline_texte.innerHTML = "Die vier Soli der Reformation";
    texte.innerHTML = "Der berühmte Reformator Martin Luther (1483–1546) kämpfte für die Wahrheit der Bibel. Das machen die berühmten vier „Soli“ deutlich:<br>1. Solus Christus: allein Christus<br>2. Sola scriptura: allein die Schrift<br>3. Sola gratia: allein die Gnade<br>4. Sola fide: allein der Glaube<br>Eine knackige Zusammenfassung dessen, was Martin Luther nach und nach verstanden hatte. Zu jedem der vier Punkte lässt sich eine Bibelstelle zuordnen:<br>1. Jesus [Christus] spricht zu Thomas: Ich bin der Weg und die Wahrheit und das Leben. Niemand kommt zum Vater als nur durch mich (Johannes 14,6).<br>​​​​​​​2. Dein [Gottes] Wort ist Wahrheit (Johannes 17,17).<br>3. Denn durch die Gnade seid ihr errettet (Epheser 2,8).<br>4. Der Gerechte aber wird aus Glauben leben (Römer 1,17).";
}


// November
if(month === 11){
    janauryday = false;
    februaryday = false;
    marchday = false;
    aprilday = false;
    mayday = false;
    juneday = false;
    julyday = false;
    augustday = false;
    septemberday = false;
    octoberday = false;
    novemberday = true;
    decemberday = false;

    novemberday = octoberday+day;

    console.log(novemberday);
}
if(novemberday === 306){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 307){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 308){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 309){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 310){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 311){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 312){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 313){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 314){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 315){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 316){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 317){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 318){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 319){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 320){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 321){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 322){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 323){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 324){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 325){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 326){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 327){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 328){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 329){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 330){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 331){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 332){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 333){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 334){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(novemberday === 335){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}

// Dezember
if(month === 12){
    janauryday = false;
    februaryday = false;
    marchday = false;
    aprilday = false;
    mayday = false;
    juneday = false;
    julyday = false;
    augustday = false;
    septemberday = false;
    octoberday = false;
    novemberday = false;
    decemberday = true;

    decemberday = novemberday+day;

    console.log(decemberday);
}
if(decemberday === 336){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 337){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 338){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 339){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 340){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 341){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 342){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 343){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 344){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 345){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 346){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 347){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 348){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 349){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 350){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 351){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 352){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 353){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 354){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 355){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 356){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 357){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 358){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 359){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 360){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 361){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 362){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 363){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 364){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 365){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}
if(decemberday === 366){
    verse.innerHTML = "";
    headline_texte.innerHTML = "";
    texte.innerHTML = "";
}


// Uhrzeit

var h = d.getHours();
var m = d.getMinutes();
var s = d.getSeconds();

if(h < 10){
    document.getElementById("hour").innerHTML = "0"+h;
}
if(h>=10){
    document.getElementById("hour").innerHTML = h;
}
if(m < 10){
    document.getElementById("minute").innerHTML = "0"+m;
}
if(m>=10){
    document.getElementById("minute").innerHTML = m;
}
document.getElementById("second").innerHTML = s;

function clock(){
    s++;
    if(s == 60){
        s = 0;
        m++;
    }
    if(m == 60){
        m = 0;
        h++;
    }
    if(h == 24){
        h = 0;
        window.location.reload(false);
    }

    if(m<10){
        document.getElementById("minute").innerHTML = "0"+m;
    }
    if(m>=10){
        document.getElementById("minute").innerHTML = m;
    }
    if(h<10){
    document.getElementById("hour").innerHTML = "0" + h;
    }
    if(h>=10){
        document.getElementById("hour").innerHTML = h;
    }
    document.getElementById("second").innerHTML = s;
}
setInterval(clock,1000);


// Tagesname
var dayname = d.getDay();

// console.log(dayname);

if(dayname == 0){
    document.getElementById("dayname").innerHTML = "Sonntag";
}
if(dayname == 1){
    document.getElementById("dayname").innerHTML = "Montag";
}
if(dayname == 2){
    document.getElementById("dayname").innerHTML = "Dienstag";
}
if(dayname == 3){
    document.getElementById("dayname").innerHTML = "Mittwoch";
}
if(dayname == 4){
    document.getElementById("dayname").innerHTML = "Donnerstag";
}
if(dayname == 5){
    document.getElementById("dayname").innerHTML = "Freitag";
}
if(dayname == 6){
    document.getElementById("dayname").innerHTML = "Samstag";
}



// Geburtstagscountdown

// Mit einem Array die Kalender schreiben
function test(day,month,name,color,id){
    return{day,month,name,color,id};
}


// Geburtstagskalender für die Spieleabendgruppe
let birthdayArray = [
    test("20","0","Sebi","#00a2ff",0),
    test("24","0","Oma","#6f00ff",1),
    test("5","8","Jim","#88c2e4",2),
    test("28","3","Phil","#97e488",3),
    test("13","7","Jakob","#d45353",4),
    test("30","2","Ben","#88c2e4",5),
    test("2","3","Louis","#8896B0",6),
    test("4","3","Jule","#9b7fdb",7),
    test("27","3","Boas","#97e488",8),
    test("24","10","Paul Simon","#ecac59",9),
    test("24","0","Lukas","#57473a",10),
    // test("30","9","Hannah",9),
    // test("30","9","Michel",10),
    // test("30","9","Anna-Madeleine",11),
    test("20","4","Caro",#c5087e,11),
    test("16","11","Lia","#fc9bfc",12),
    // test("30","9","Mimi",14),
    // test("30","9","Robert",15),
    test("16","1","Lynn","#31eebf",13),
];


// Geburtstagskalender für die Firma
// let birthdayArray = [
//     test("5","8","Jim","#88c2e4",0),
//     test("12","0","Gaby und Luis","#ff8f49",1),
//     test("17","0","Katja","#e788ff",2),
//     test("6","1","Maik","#7add84",3),
//     test("8","1","Petra und Aleks","#47e5bb",4),
//     test("14","1","Meikel","#6447e5",5),
//     test("19","1","Bernd R.","#ff4949",6),
//     test("7","2","Roman","#ff8f49",7),
//     test("21","2","Marc","#88c2e4",8),
//     test("4","3","Benni","#7add84",9),
//     test("6","3","Louis","#ff4949",10),
//     test("29","4","Arthur","#354564",11),
//     test("7","5","Connor","#175ad6",12),
//     test("14","5","Christian","#ff8f49",13),
//     test("19","5","JuLi","#7add84",14),
//     test("1","6","JuRi","#88c2e4",15),
//     test("4","6","Jan Niklas","#7d57f9",16),
//     test("20","6","Andrej","#d657f9",17),
//     test("5","7","Pierre","#b6d69c",18),
//     test("19","7","Toni","#9b9b9b",19),
//     test("30","7","Gerd","#876e29",20),
//     test("2","8","Bernd St und Janine","#ff4949",21),
//     test("4","8","Maurice","#354564",22),
//     test("3","9","Soumaya","#b47add",23),
//     test("5","9","Frank","#7add84",24),
//     test("2","10","Alex und Murat","#175ad6",25),
//     test("15","10","Ulrike","#7d57f9",26)
// ];

let arrayLength = birthdayArray.length;


function small(days,ID){
    return{days,ID};
}
let smallestDayArray = [];

// Forschleife für die Kalender
let birthdayCalenderMain = document.getElementById("birthdayMain");
let daysArray = [];

birthdayArray.forEach(element => {
    let calendarDay = element.day;
    let calendarMonth = element.month;
    let name = element.name;
    let monthName = "Fehler";

    // Abfragen
    // Bei weniger als 10 Null dran hängen
    if(calendarDay < 10){
        calendarDay = "0"+calendarDay;
    }
    // Die Namen der Monate
    switch(calendarMonth){
        case "0":
            monthName = "Januar";
        break;
        case "1":
            monthName = "Februar";
        break;
        case "2":
            monthName = "März";
        break;
        case "3":
            monthName = "April";
        break;
        case "4":
            monthName = "Mai";
        break;
        case "5":
            monthName = "Juni";
        break;
        case "6":
            monthName = "Juli";
        break;
        case "7":
            monthName = "August";
        break;
        case "8":
            monthName = "September";
        break;
        case "9":
            monthName = "Oktober";
        break;
        case "10":
            monthName = "November";
        break;
        case "11":
            monthName = "Dezember";
        break;
        default:
            console.log("Fehler");
        break;
    }

    let birthdayYear = d.getFullYear();
    let birthday = new Date(birthdayYear,calendarMonth,calendarDay);

    let differenz = birthday-d;
    
    // Die Namen der Wochentage
    let weekDay = birthday.getDay();
    switch(weekDay){
        case 0:
            weekDayName = "Sonntag";
        break;
        case 1:
            weekDayName = "Montag";
        break;
        case 2:
            weekDayName = "Dienstag";
        break;
        case 3:
            weekDayName = "Mittwoch";
        break;
        case 4:
            weekDayName = "Donnerstag";
        break;
        case 5:
            weekDayName = "Freitag";
        break;
        case 6:
            weekDayName = "Samstag";
        break;
        default:
            console.log("Fehler");
        break;
    }


    birthdayCalenderMain.innerHTML += `
        <div id="calendar" class="calendar">
            <figure>
                <img id="calendarBirthday" src="" alt="">
                <figcaption>
                    <h3>${calendarDay}, ${weekDayName}</h3>
                    <p>${monthName}</p>
                </figcaption>
            </figure>
            <div class="info">
                <h2>Geburtstag von <br>${name}</h2>
                <div id="birthdayCountdown" class="countdown">
                    <p class="days">4</p>
                    <p class="hours">2</p>
                    <p class="minutes">34</p>
                    <p class="seconds">14</p>
                </div>
            </div>
        </div>
    `;


    
    let birthdayName = name+" hat";
    if(birthdayName == "Jim"){
        birthdayName = "Du hast";
    }
    
    // Wenn ich schon Geburtstag hatte, dann es das nächste Jahr ausrechnen
    if(differenz <= 0 && differenz > -86400000){
        testung(element.id,birthdayName);
        document.getElementById("birthday").style.transform = "translateY(-3000px)";
        document.getElementById("birthday").style.transition = "20s";
    }else if(differenz < -86400000){
        console.log("Geburtstagsjahr soll erhöht werden");
        birthdayYear++;
        birthday = new Date(birthdayYear,0,2);
        differenz = birthday - d;
    }
    
    // Rechnung der Tage, Stunden, Minuten und Sekunden
    var days = Math.floor(differenz / (1000*60*60*24));
    var hours = Math.floor((differenz / (1000*60*60)) - (days * 24));
    var minutes = Math.floor((differenz/(1000*60)) - ((days * (24*60))+(hours * 60)));
    minutes = minutes + 1;
    var seconds = Math.floor((differenz/1000) - ((days * (24*60*60)) + (hours * (60*60)) + ((minutes * 60))-60));
    seconds = seconds + 1;

    
    // Nächster Geburtstag
    smallestDayArray.push(small(days,element.id));
    

    // Tage in Tage rein schreiben
    let currentDay = days;
    daysArray.push(currentDay);


    // Interval Funktion 
    function forInterval(){
        for(let i=0;i<arrayLength;i++){
            Hours = document.querySelectorAll(".hours")[i];
            Minutes = document.querySelectorAll(".minutes")[i];
            Seconds = document.querySelectorAll(".seconds")[i];
            if(seconds<10){
                Seconds.innerHTML = "0"+seconds;
            }else{
                Seconds.innerHTML = seconds;
            }
            if(minutes<10){
                Minutes.innerHTML = "0"+minutes;
            }else{
                Minutes.innerHTML = minutes;
            }
            if(hours<10){
                Hours.innerHTML = "0"+hours;
            }else{
                Hours.innerHTML = hours;
            }
        }
        birthdayCountdown();
    }
    setInterval(forInterval,1000);

    console.log("Tage: "+days);
    console.log("ID: "+element.id);
    
    function birthdayCountdown(){
        seconds--;
        if(seconds < 0){
            seconds=59;
            minutes--;
        }
        if(minutes < 0){
            minutes=59;
            hours--;
        }
        if(hours < 0){
            hours=23;
            days--;
        }
        if(days <= 0 && hours <= 0 && minutes <= 0 && seconds <= 0){
            seconds = 0;
            minutes = 0;
            hours = 0;
            days = 0;
        }
    }

});


// Kleinsten Tag herausfinden
let smallestDay = [];
smallestDayArray.forEach(element => {
    smallestDay.push(element.days);
});
console.log(smallestDay);

smallestDay = Math.min.apply(Math,smallestDay);
let smallID;

let whereDaySmall = smallestDayArray.find(element => element.days === smallestDay);
smallID = whereDaySmall.ID;

console.log(smallID);

let smallestDayName;
let birthdayNames = birthdayArray.find(element => element.id === smallID);
smallestDayName = birthdayNames.name;

smallestDay+=1;
if(smallestDay>1){
    smallestDay = "In "+smallestDay+" Tagen";
}else if(smallestDay == 1){
    smallestDay = "Morgen";
}else{
    smallestDay = "Heute";
}

document.getElementById("birthdayMassage").innerHTML = `Als nächstes hat ${smallestDayName} Geburtstag.`;
document.getElementById("birthdayTime").innerHTML = `Wann: <span>${smallestDay}<span>`;
if(smallestDay == "Heute"){
    document.getElementById("birthdayMassage").innerHTML = `Juhu! ${smallestDayName} hat Geburtstag!`;
}

// Die farbe der Personen hohlen
let smallestDayColor = birthdayArray.find(element => element.id === smallID);
smallestDayColor = smallestDayColor.color;

let colorOfSmallestDay = document.getElementsByClassName("birthdayColor");

Array.from(colorOfSmallestDay).forEach(element => { 
    element.style.setProperty("--color",smallestDayColor); 
});




// Bei Geburtstag eine Event starten
function testung(elementID,name){
    let calendar = document.querySelectorAll("#calendar")[elementID];
    let pCalendar = calendar.querySelectorAll(".info");
    pCalendar.forEach(element => {
        element.style.display = "none";
    });
    document.querySelectorAll("#calendar")[elementID].innerHTML += `<h1 class="birthdays">Juhu! ${name} Geburtstag</h1>`;
    document.querySelectorAll("#calendar")[elementID].classList.add("juhu");
}

let isVisible = false;
for(let i=0;i<arrayLength;i++){
    document.querySelectorAll(".days")[i].innerHTML = daysArray[i];

    if(daysArray[i] >= 14){
        document.querySelectorAll(".calendar")[i].style.display = "none";
    }else{
        document.querySelectorAll(".calendar")[i].style.display = "block";
    }

    let visibleCalendar = document.querySelectorAll(".calendar")[i].getAttribute("style");
    if(visibleCalendar == "display: block;"){
        isVisible = true;
    }
    document.querySelectorAll("#calendarBirthday")[i].setAttribute("src", `assets/images/other/kein_Foto.jpg`);
}

// Bilder bei der Spieleabendgruppe
// gibt noch keine


// Bilder bei der Firma
// document.querySelectorAll("#calendarBirthday")[1].setAttribute("src", `https://pms.invokable.gmbh/user/picture?id=U27&.jpg`);




if(isVisible){
    document.getElementById("noBirthday").style.display = "none";
}else{
    document.getElementById("noBirthday").style.display = "block";
}


// Scroll to Right
document.addEventListener('wheel', function(event) {
    if(event.deltaX < 0) {
        scrollleft();
    }else if(event.deltaX > 0) {
        scrollright();
    }
});

document.addEventListener("keydown", function(event){
    if(event.code == "ArrowLeft"){
        scrollleft();
    }else if(event.code == "ArrowRight"){
        scrollright();
    }
})

function scrollright(){
    let windowWidth = window.innerWidth * 2;
    window.document.documentElement.scrollLeft += windowWidth;
}
function scrollleft(){
    let windowWidth = window.innerWidth * 2;
    window.document.documentElement.scrollLeft -= windowWidth;
}
