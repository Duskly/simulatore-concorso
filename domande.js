const databaseDomande = [
    {
        text: "L'espressione 'organi di governo' contenuta nell'art. 36 del TUEL è riferita per le amministrazioni comunali, oltre alla Giunta a:",
        answers: ["Consiglio e Sindaco.", "Sindaco e Collegio dei revisori.", "Consiglio e Segretario comunale."],
        corretta: "Consiglio e Sindaco."
    },
    {
        text: "Il Sindaco svolge funzioni quale rappresentante della comunità locale (art. 50, Tuel) e funzioni quale ufficiale del Governo (art. 54, Tuel). Indicare quale funzione è svolta dal Sindaco quale rappresentante della comunità locale.",
        answers: ["Sovrintendere alla tenuta dei registri di stato civile e di popolazione.", "Sovrintendere allo svolgimento delle funzioni affidategli dalla legge in materia di pubblica sicurezza.", "Sovrintendere all'esecuzione degli atti."],
        corretta: "Sovrintendere all'esecuzione degli atti."
    },
    {
        text: "Specifica l'art. 107 del d.lgs. n. 267/2000, che è attribuita ai dirigenti:",
        answers: ["La tenuta dei registri di stato civile.", "L'approvazione del Regolamento di accesso agli atti amministrativi.", "La stipula dei contratti."],
        corretta: "La stipula dei contratti."
    },
    {
        text: "Quale organo di governo dell'amministrazione del Comune delibera le convenzioni tra i comuni e quelle tra i comuni e provincia e la costituzione e la modificazione di forme associative (Tuel, art. 42)?",
        answers: ["Organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio).", "Assessore delegato dal Sindaco.", "Organo esecutivo dell'amministrazione comunale (Giunta)."],
        corretta: "Organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio)."
    },
    {
        text: "A norma del disposto di cui al comma 7, art. 38 del Tuel le sedute del Consiglio e delle commissioni:",
        answers: ["Non sono pubbliche salvi i casi previsti dal regolamento del Consiglio.", "Sono pubbliche salvi i casi previsti dal regolamento del Consiglio.", "Sono pubbliche salvi i casi tassativamente indicati nello Statuto comunale."],
        corretta: "Sono pubbliche salvi i casi previsti dal regolamento del Consiglio."
    },
    {
        text: "Chi dispone lo scioglimento del Consiglio comunale quando non può essere assicurato il normale funzionamento degli organi e dei servizi per dimissioni e impedimento permanente del Sindaco (art. 141 Tuel)?",
        answers: ["Presidente della Repubblica.", "Presidente del Consiglio dei Ministri.", "Presidente della Regione."],
        corretta: "Presidente della Repubblica."
    },
    {
        text: "Ai sensi dell'art. 178, del d.lgs. n. 267/2000 (TUEL), le fasi di gestione delle entrate degli enti locali sono nell'ordine:",
        answers: ["Previsione, versamento e accertamento.", "Riscossione, previsione e versamento.", "Accertamento, riscossione e versamento."],
        corretta: "Accertamento, riscossione e versamento."
    },
    {
        text: "Ai sensi dell'art. 190, comma 1, del d.lgs. n. 267/2000 (TUEL), le somme impegnate e non pagate entro il termine dell'esercizio di riferimento costituiscono:",
        answers: ["Residui attivi.", "Residui passivi.", "Minori entrate."],
        corretta: "Residui passivi."
    },
    {
        text: "Quale delle seguenti affermazioni sulle caratteristiche del bilancio degli enti locali è conforme all'art. 164 del d.lgs. n. 267/2000?",
        answers: ["L'unità di voto del bilancio per l'entrata è la categoria.", "Il bilancio di previsione finanziario ha carattere autorizzatorio.", "L'unità di voto del bilancio per la spesa è il programma, articolato in tipologie."],
        corretta: "Il bilancio di previsione finanziario ha carattere autorizzatorio."
    },
    {
        text: "\"Il dipendente deve osservare la Costituzione, servendo la Nazione con disciplina ed onore e conformando la propria condotta ai principi di buon andamento e imparzialità dell'azione amministrativa. Il citato principio:",
        answers: ["Costituisce 'principio generale' solo se inserito nel Codice di comportamento che ciascuna amministrazione deve obbligatoriamente adottare.", "È espressamente contenuto tra i 'principi generali' nel Codice di comportamento dei dipendenti pubblici.", "Non è uno dei 'principi generali' previsto nel Codice di comportamento dei dipendenti pubblici."],
        corretta: "È espressamente contenuto tra i 'principi generali' nel Codice di comportamento dei dipendenti pubblici."
    },
    {
        text: "A norma di quanto prevede l'art. 34 del CCNL del comparto Funzioni locali, qualora la prestazione di lavoro giornaliera ecceda le sei ore:",
        answers: ["Il personale ha diritto a beneficiare di una pausa di dieci minuti per la consumazione del pasto.", "Il personale ha diritto a beneficiare di una pausa di almeno trenta minuti ai fini del recupero delle energie psicofisiche.", "Il personale ha diritto a beneficiare di una pausa di almeno dieci minuti ai fini del recupero delle energie psicofisiche."],
        corretta: "Il personale ha diritto a beneficiare di una pausa di almeno dieci minuti ai fini del recupero delle energie psicofisiche."
    },
    {
        text: "L'art. 1, co. 1, della l. n. 241/1990 stabilisce che l'azione amministrativa deve essere improntata ad alcuni principi, tra cui economicità, efficacia, imparzialità e pubblicità. Quale criterio impone l'obbligo di rendere noto il termine entro il quale deve concludersi il procedimento amministrativo?",
        answers: ["Efficienza.", "Pubblicità.", "Economicità."],
        corretta: "Pubblicità."
    },
    {
        text: "Gli elementi essenziali del provvedimento amministrativo:",
        answers: ["Sono necessari giuridicamente per dar vita all'atto.", "Possono essere discrezionalmente apposti dalla p.a. purché non alterino la natura e la funzione tipica dell'atto.", "Si sostanziano esclusivamente nell'agente e nel destinatario."],
        corretta: "Sono necessari giuridicamente per dar vita all'atto."
    },
    {
        text: "Con riferimento alle principali fasi del procedimento amministrativo si individui, per la fase istruttoria, l'affermazione corretta.",
        answers: ["Soggiace al principio di non aggravamento del procedimento.", "È la fase deliberativa del procedimento.", "Quanto a competenza spetta ordinariamente ad autorità diversa da quella cui compete l'adozione del provvedimento finale."],
        corretta: "Soggiace al principio di non aggravamento del procedimento."
    },
    {
        text: "La richiesta di accesso ai documenti amministrativi (art. 25, l. n. 241/1990):",
        answers: ["Deve essere avanzata esclusivamente all'organo di governo dell'amministrazione (nel caso di amministrazione comunale al Sindaco).", "Deve essere rivolta all'amministrazione che ha formato il documento o che lo detiene stabilmente.", "Deve essere avanzata esclusivamente al difensore civico competente per territorio."],
        corretta: "Deve essere rivolta all'amministrazione che ha formato il documento o che lo detiene stabilmente."
    },
    {
        text: "La legislazione vigente prevede tre tipologie di accesso (documentale, civico, generalizzato). Quale tipologia di accesso ha quale finalità quella di porre i soggetti interessati in grado di esercitare al meglio le facoltà partecipative e/o oppositive e difensive che l'ordinamento attribuisce loro a tutela delle posizioni giuridiche qualificate di cui sono titolari?",
        answers: ["Accesso documentale.", "Accesso civico.", "Accesso generalizzato."],
        corretta: "Accesso documentale."
    },
    {
        text: "A norma di quanto dispone il Codice dei contratti pubblici, in quale momento le stazioni appaltanti decretano o determinano di contrarre?",
        answers: ["Nessuna delle altre alternative di risposta è corretta; non sussiste obbligo per le stazioni appaltanti.", "Dopo l'avvio delle procedure di affidamento ma prima della stipula del contratto.", "Prima dell'avvio delle procedure di affidamento."],
        corretta: "Prima dell'avvio delle procedure di affidamento."
    },
    {
        text: "Il GDPR distingue tra 'dati che permettono l'identificazione diretta o indiretta', 'dati rientranti in particolari categorie', dati relativi a condanne penali e reati. I dati anagrafici e il codice fiscale sono:",
        answers: ["Dati rientranti in particolari categorie.", "Dati che permettono l'identificazione diretta.", "Dati che permettono l'identificazione indiretta."],
        corretta: "Dati che permettono l'identificazione diretta."
    },
    {
        text: "L'art. 5 del D.Lgs. n. 33/2013, dispone che il procedimento di accesso civico deve concludersi:",
        answers: ["Entro 30 giorni dalla presentazione dell'istanza.", "Con provvedimento non motivato.", "Entro 60 giorni dalla presentazione dell'istanza."],
        corretta: "Entro 30 giorni dalla presentazione dell'istanza."
    },
    {
        text: "Il processo educativo attraverso il quale si trasferiscono ai lavoratori ed agli altri soggetti del sistema di prevenzione e protezione aziendale conoscenze e procedure utili alla acquisizione di competenze per lo svolgimento in sicurezza dei rispettivi compiti in azienda e alla identificazione, alla riduzione e alla gestione dei rischi, per gli effetti delle disposizioni di cui al D.Lgs. n. 81/2008 è denominato:",
        answers: ["Norma tecnica.", "Formazione.", "Informazione."],
        corretta: "Formazione."
    },
    {
        text: "Quale dei seguenti delitti viene disciplinato nel Capo I, Titolo II Libro II del Codice Penale, relativo ai delitti dei pubblici ufficiali contro la Pubblica Amministrazione?",
        answers: ["Turbata libertà del procedimento di scelta del contraente.", "Peculato mediante profitto dell'errore altrui.", "Astensione dagli incanti."],
        corretta: "Peculato mediante profitto dell'errore altrui."
    },
   
    {
        text: "In un foglio di lavoro di MS Excel, quando si copia la cella C6 che contiene la formula =$C$4+C5 e la si inserisce nella cella D6, viene mostrata la formula?",
        answers: ["=C4+C5", "=D4+D5", "=$C$4+D5"],
        corretta: "=$C$4+D5"
    },
    {
        text: "In MS PowerPoint, quale dei seguenti comandi rapidi da tastiera può essere usato per aggiungere una nuova diapositiva?",
        answers: ["CTRL+V.", "CTRL+M.", "CTRL+N."],
        corretta: "CTRL+M."
    },
    {
        text: "VENTO sta a (BREVA + MISTRAL) come LEGNO sta a ....",
        answers: ["(PALISSANDRO + TUCUL).", "(PALISSANDRO + NUMISMATICA).", "(PALISSANDRO + TEK)."],
        corretta: "(PALISSANDRO + TEK)."
    },
    {
        text: "Il capo I del titolo III del TUEL è dedicato interamente agli organi di governo del Comune e della Provincia. Per l'amministrazione comunale uno di tali tre organi è rappresentato (art 36, comma 1):",
        answers: ["Dal Direttore generale.", "Dal Sindaco.", "Dal Segretario generale."],
        corretta: "Dal Sindaco."
    },
    {
        text: "Il Sindaco svolge funzioni quale rappresentante della comunità locale (art. 50, Tuel) e funzioni quale ufficiale del Governo (art. 54, Tuel). Indicare quale funzione è svolta dal Sindaco quale rappresentante della comunità locale.",
        answers: ["Convocare la Giunta.", "Sovrintendere alla tenuta dei registri di stato civile e di popolazione.", "Sovrintendere allo svolgimento delle funzioni affidategli dalla legge in materia di pubblica sicurezza."],
        corretta: "Convocare la Giunta."
    },
    {
        text: "Specifica l'art. 107 del d.lgs. n. 267/2000, che è attribuita ai dirigenti:",
        answers: ["L’approvazione del Regolamento di contabilità dell’amministrazione.", "La direzione degli uffici e dei servizi secondo i criteri e le norme dettati dagli Statuti e dai regolamenti.", "L'approvazione della Carta dei servizi dell'ente."],
        corretta: "La direzione degli uffici e dei servizi secondo i criteri e le norme dettati dagli Statuti e dai regolamenti."
    },
    {
        text: "Deliberare gli statuti comunali è una competenza che l'art. 6 del Tuel attribuisce:",
        answers: ["All'organo esecutivo dell'amministrazione comunale (Giunta).", "All'assessore delegato dal Sindaco.", "All'organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio)."],
        corretta: "All'organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio)."
    },
    {
        text: "A norma del disposto di cui al comma 8, art. 38, Tuel le dimissioni dalla carica di consigliere:",
        answers: ["Sono indirizzate al Consiglio.", "Possono essere accettate dalla Giunta.", "Sono indirizzate alla Giunta."],
        corretta: "Sono indirizzate al Consiglio."
    },
    {
        text: "Nomina del segretario (art. 99 Tuel ) - Revoca del segretario (art. 100 Tuel). Indicare l'affermazione corretta.",
        answers: ["È nominato dall'organo esecutivo dell'ente.", "Può essere revocato con provvedimento motivato del Sindaco.", "Dipende funzionalmente dalla Presidenza del Consiglio dei Ministri."],
        corretta: "Può essere revocato con provvedimento motivato del Sindaco."
    },
    {
        text: "Ai sensi dell'art. 181, comma 1, del d.lgs. n. 267/2000 (TUEL), prendendo in considerazione le fasi di gestione dell’entrata cui all'art. 178, il trasferimento delle somme riscosse nelle casse dell'ente è proprio:",
        answers: ["Del pagamento.", "Della liquidazione.", "Del versamento."],
        corretta: "Del versamento."
    },
    {
        text: "Ai sensi dell'art. 189, comma 1, del d.lgs. n. 267/2000 (TUEL), costituiscono residui attivi:",
        answers: ["Le somme accertate e non riscosse entro il termine dell'esercizio.", "Tutte le somme accertate nell'esercizio.", "Le somme impegnate e non pagate entro il termine dell'esercizio."],
        corretta: "Le somme accertate e non riscosse entro il termine dell'esercizio."
    },
    {
        text: "Ai sensi dell'art. 162, comma 3, del d.lgs. n. 267/2000 (TUEL), qual è l'unità temporale della gestione?",
        answers: ["L'anno finanziario, che inizia il 1° settembre e termina il 31 agosto dell'anno successivo.", "L'anno finanziario, che inizia il 1° gennaio e termina il 31 dicembre dello stesso anno.", "Il semestre finanziario."],
        corretta: "L'anno finanziario, che inizia il 1° gennaio e termina il 31 dicembre dello stesso anno."
    },
    {
        text: "\"Il dipendente deve agire in posizione di indipendenza e imparzialità, astenendosi in caso di conflitto di interessi\". Il citato principio:",
        answers: ["È espressamente contenuto tra i 'principi generali' nel Codice di comportamento dei dipendenti pubblici.", "Non è uno dei 'principi generali' previsto nel Codice di comportamento dei dipendenti pubblici.", "Costituisce 'principio generale' solo se inserito nel Codice di comportamento che ciascuna amministrazione deve obbligatoriamente adottare."],
        corretta: "È espressamente contenuto tra i 'principi generali' nel Codice di comportamento dei dipendenti pubblici."
    },
    {
        text: "A norma di quanto prevede l'art. 25 del CCNL del comparto Funzioni locali, decorso il periodo di prova senza che il rapporto di lavoro sia stato risolto, il dipendente si intende confermato in servizio con il riconoscimento dell'anzianità:",
        answers: ["Dal 60° giorno successivo a quello dell'inizio del periodo di prova.", "Dal giorno successivo al termine del periodo di prova.", "Dal giorno dell'assunzione."],
        corretta: "Dal giorno dell'assunzione."
    },
    {
        text: "L'art. 1, co. 1, della l. n. 241/1990 stabilisce che l'azione amministrativa deve essere improntata ad alcuni principi, tra cui economicità, efficacia e pubblicità. Il criterio di pubblicità:",
        answers: ["Impone l'obbligo di rendere noto il termine entro il quale deve concludersi il procedimento amministrativo.", "Indica il rapporto tra risultati ottenuti e obiettivi prestabiliti.", "È, precisamente, il raffronto tra le risorse impiegate per il perseguimento di un dato fine e il risultato ottenuto."],
        corretta: "Impone l'obbligo di rendere noto il termine entro il quale deve concludersi il procedimento amministrativo."
    },
    {
        text: "Con riferimento agli elementi del provvedimento amministrativo, l'oggetto:",
        answers: ["Può essere costituito solo da un comportamento o da un fatto ma non da un bene.", "Può anche non possedere il requisito della determinatezza, ma deve possedere quelli della possibilità e liceità.", "È la res su cui l'atto amministrativo incide."],
        corretta: "È la res su cui l'atto amministrativo incide."
    },
    {
        text: "La fase diretta ad introdurre l'interesse pubblico primario nonché gli interessi secondari di cui sono titolari i privati interessati all'oggetto del provvedimento da emanare è:",
        answers: ["La fase decisoria.", "La fase dell'iniziativa.", "La fase integrativa dell'efficacia."],
        corretta: "La fase dell'iniziativa."
    },
    {
        text: "Le locuzioni 'accesso documentale' e 'accesso civico' sono sinonimi?",
        answers: ["No, 'accesso documentale' è l'accesso ai documenti oggetto degli obblighi di pubblicazione (art. 5, co. 1 del d.lgs. 33/2013), mentre 'accesso civico' è l'accesso disciplinato della l. n. 241/1990.", "Si, sono sinonimi.", "No, 'accesso documentale' è l'accesso disciplinato della l. n. 241/1990, mentre 'accesso civico' è l'accesso ai documenti oggetto degli obblighi di pubblicazione."],
        corretta: "No, 'accesso documentale' è l'accesso disciplinato della l. n. 241/1990, mentre 'accesso civico' è l'accesso ai documenti oggetto degli obblighi di pubblicazione."
    },
    {
        text: "Ai sensi della L. 241/1990, art. 22, il diritto di accesso è esercitabile:",
        answers: ["Senza limite temporale.", "Fino a quando la pubblica amministrazione ha l'obbligo di detenere i documenti amministrativi ai quali si chiede di accedere.", "Fino a quando ciascuna pubblica amministrazione a suo insindacabile giudizio decide di consentirne l'accesso."],
        corretta: "Fino a quando la pubblica amministrazione ha l'obbligo di detenere i documenti amministrativi ai quali si chiede di accedere."
    },
    {
        text: "La procedura di stipula di un contratto ha inizio con la determina (o decreto) a contrattare. Tale atto:",
        answers: ["Deve riportare, tra l'altro, i criteri di selezione del contraente.", "Deve riportare solo gli elementi essenziali del futuro contratto.", "Non deve indicare i criteri di selezione delle offerte."],
        corretta: "Deve riportare, tra l'altro, i criteri di selezione del contraente."
    },
    {
        text: "Il titolare del trattamento può trattare dati personali che rivelino l'origine razziale o etnica di una persona fisica?",
        answers: ["Si, ma solo se il trattamento riguarda dati personali resi manifestamente pubblici dall'interessato.", "No, lo vieta espressamente l'art. 9 del GDPR, salvo che non ricorrono le condizioni di cui al par. 2.", "Si, indipendentemente dalla motivazione del trattamento."],
        corretta: "No, lo vieta espressamente l'art. 9 del GDPR, salvo che non ricorrono le condizioni di cui al par. 2."
    },
    {
        text: "A norma di quanto prevede l’art. 5, D.Lgs. n. 33/2013, entro quanti giorni dalla ricezione della comunicazione di accesso i controinteressati possono presentare una motivata opposizione, anche per via telematica, alla stessa richiesta di accesso?",
        answers: ["Sessanta giorni.", "Novanta giorni.", "Dieci giorni."],
        corretta: "Dieci giorni."
    },
    {
        text: "Il complesso della struttura organizzata dal datore di lavoro pubblico o privato, per gli effetti delle disposizioni di cui al D.Lgs. n. 81/2008 è denominato:",
        answers: ["Azienda.", "Prevenzione.", "Servizio di prevenzione e protezione dai rischi."],
        corretta: "Azienda."
    },
    {
        text: "Quale dei seguenti delitti viene disciplinato nel Capo I, Titolo II Libro II del Codice Penale, relativo ai delitti dei pubblici ufficiali contro la Pubblica Amministrazione?",
        answers: ["Frode nelle pubbliche forniture.", "Violenza o minaccia a un pubblico ufficiale.", "Rifiuto di atti d'ufficio. Omissione."],
        corretta: "Rifiuto di atti d'ufficio. Omissione."
    },

    {
        text: "In MS EXCEL, che combinazione di tasti devo digitare per iniziare una nuova riga nella stessa cella?",
        answers: ["Alt+INVIO.", "Ctrl+INVIO.", "Maiusc+INVIO."],
        corretta: "Alt+INVIO."
    },

    {
        text: "L'espressione 'organi di governo' contenuta nell'art. 36 del TUEL è riferita agli organi di indirizzo dell'ente locale, ovvero a Sindaco/Presidente della provincia, Giunta e ......:",
        answers: ["Segretario dell'ente.", "Consiglio.", "Collegio dei revisori."],
        corretta: "Consiglio."
    },
    {
        text: "Il Sindaco svolge funzioni quale rappresentante della comunità locale (art. 50, Tuel) e funzioni quale ufficiale del Governo (art. 54, Tuel). Indicare quale funzione è svolta dal Sindaco quale rappresentante della comunità locale.",
        answers: ["Adottare, con atto motivato, provvedimenti contingibili e urgenti al fine di prevenire e di eliminare gravi pericoli che minacciano la sicurezza urbana.", "Sovrintendere agli adempimenti in materia elettorale, di leva militare e di statistica.", "Adottare le ordinanze contingibili e urgenti in caso di emergenze di igiene pubblica a carattere esclusivamente locale."],
        corretta: "Adottare le ordinanze contingibili e urgenti in caso di emergenze di igiene pubblica a carattere esclusivamente locale."
    },
    {
        text: "Ai sensi dell'art. 107 del d.lgs. n. 267/2000, i dirigenti non sono competenti ad adottare:",
        answers: ["Gli atti di amministrazione e gestione del personale.", "Gli atti di gestione finanziaria.", "Il bilancio di previsione."],
        corretta: "Il bilancio di previsione."
    },
    {
        text: "Deliberare l'affidamento di attività o servizi mediante convenzione è una competenza che l'art. 42 del Tuel attribuisce:",
        answers: ["All'assessore delegato dal Sindaco.", "All'organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio).", "All'organo esecutivo dell'amministrazione comunale (Giunta)."],
        corretta: "All'organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio)."
    },
    {
        text: "Il Sindaco può revocare uno o più assessori (art. 46, co. 4, Tuel):",
        answers: ["Previo parere conforme del segretario generale.", "Previo parere conforme del Consiglio.", "Dandone motivata comunicazione al Consiglio."],
        corretta: "Dandone motivata comunicazione al Consiglio."
    },
    {
        text: "Il vicesegretario può sostituire il Segretario comunale?",
        answers: ["Sì, nei casi di vacanza, assenza o impedimento.", "No, ha solo funzioni di ausilio.", "Nei soli casi di impedimento permanente."],
        corretta: "Sì, nei casi di vacanza, assenza o impedimento."
    },
    {
        text: "Con riferimento alla gestione del bilancio (Titolo III, Parte II Tuel), l'art. 178 espone le fasi dell'entrata di cui, successive o simultanee che siano, l'accertamento:",
        answers: ["Costituisce la terza fase.", "Costituisce la prima fase.", "Costituisce l'ultima fase."],
        corretta: "Costituisce la prima fase."
    },
    {
        text: "Ai sensi dell'art. 190, co. 1, del d.lgs. n. 267/2000 (TUEL), costituiscono residui passivi:",
        answers: ["Le somme impegnate e non pagate entro il termine dell'esercizio.", "Le somme accertate e non riscosse entro il termine dell'esercizio.", "Tutte le somme accertate nell'esercizio."],
        corretta: "Le somme impegnate e non pagate entro il termine dell'esercizio."
    },
    {
        text: "Ai sensi dell'art. 165, comma 2 del d.lgs. n. 267/2000 (TUEL), la previsione di entrate del bilancio di previsione finanziario è ordinata in titoli secondo:",
        answers: ["La natura delle entrate, nell'ambito di ciascuna fonte di provenienza.", "La fonte di provenienza delle entrate.", "Le categorie."],
        corretta: "La fonte di provenienza delle entrate."
    },
    {
        text: "\"Il dipendente, deve astenersi da azioni arbitrarie che abbiano effetti negativi sui destinatari dell'azione amministrativa o che comportino discriminazioni basate su sesso, nazionalità, origine etnica, ecc. \". Il citato principio:",
        answers: ["Non è uno dei 'principi generali' previsto nel Codice di comportamento dei dipendenti pubblici.", "Costituisce 'principio generale' solo se inserito nel Codice di comportamento che ciascuna amministrazione deve obbligatoriamente adottare.", "È espressamente contenuto tra i 'principi generali' nel Codice di comportamento dei dipendenti pubblici."],
        corretta: "È espressamente contenuto tra i 'principi generali' nel Codice di comportamento dei dipendenti pubblici."
    },
    {
        text: "A norma di quanto prevede l'art. 38 del CCNL del comparto Funzioni locali, le ferie del dipendente sono monetizzabili?",
        answers: ["Si, su richiesta del dipendente o per disposizione dell’ente.", "No, non sono monetizzabili.", "Si, su richiesta del dipendente."],
        corretta: "No, non sono monetizzabili."
    },
    {
        text: "L'art. 1, co. 1, della l. n. 241/1990 stabilisce che l'azione amministrativa deve essere improntata ad alcuni principi, tra cui economicità, efficacia e pubblicità. Il criterio di economicità:",
        answers: ["È un’articolazione del principio costituzionale di buon andamento dell'azione amministrativa.", "Indica il rapporto tra risultati ottenuti e obiettivi prestabiliti.", "Impone l'obbligo di rendere noto il termine entro il quale deve concludersi il procedimento amministrativo."],
        corretta: "È un’articolazione del principio costituzionale di buon andamento dell'azione amministrativa."
    },
    {
        text: "Con riferimento agli elementi del provvedimento amministrativo, l'oggetto:",
        answers: ["È la situazione giuridicamente rilevante sulla quale l'assetto che si intende dare al rapporto è destinato a incidere unilateralmente.", "Può essere costituito solo da un comportamento o da un bene.", "Può anche non essere lecito, ma deve essere determinato e possibile."],
        corretta: "È la situazione giuridicamente rilevante sulla quale l'assetto che si intende dare al rapporto è destinato a incidere unilateralmente."
    },
    {
        text: "Per espressa previsione di cui al co. 1, art. 21 septies, l. n. 241/1990, il provvedimento che è viziato da difetto assoluto di attribuzione è:",
        answers: ["È illecito.", "È comunque valido a tutti gli effetti di legge.", "È nullo."],
        corretta: "È nullo."
    },
    {
        text: "Con quali modalità può esercitarsi il diritto di accesso ai documenti amministrativi, riconosciuto ai soggetti all'uopo legittimati dalla legge 7/8/1990, n. 241?",
        answers: ["Solo mediante esame.", "Mediante rilascio temporaneo dell'originale dei documenti stessi.", "Mediante esame ed estrazione di copia dei documenti stessi."],
        corretta: "Mediante esame ed estrazione di copia dei documenti stessi."
    },
    {
        text: "Le modalità di esercizio del diritto di accesso sono disciplinate dall’art. 25 della legge n. 241/1990 e dal relativo regolamento. La richiesta di accesso ai documenti:",
        answers: ["Deve essere motivata e indirizzata all’amministrazione che ha formato il documento o che lo detiene stabilmente; la richiesta deve essere comunicata ai controinteressati.", "Deve essere motivata e indirizzata all’amministrazione che ha formato il documento o che lo detiene stabilmente; la richiesta non deve essere comunicata ai controinteressati.", "Non necessita di motivazione, va indirizzata all’amministrazione che ha formato il documento o che lo detiene stabilmente; la richiesta deve essere comunicata ai controinteressati."],
        corretta: "Deve essere motivata e indirizzata all’amministrazione che ha formato il documento o che lo detiene stabilmente; la richiesta deve essere comunicata ai controinteressati."
    },
    {
        text: "In quale dei citati sistemi di scelta del contraente qualsiasi operatore economico può presentare una domanda di partecipazione in risposta ad un avviso di indizione di una gara fornendo le informazioni richieste dall’amministrazione aggiudicatrice ai fini della selezione qualitativa?",
        answers: ["Procedura ristretta.", "Procedura aperta.", "Nessuna delle altre risposte è corretta."],
        corretta: "Procedura ristretta."
    },
    {
        text: "A norma del disposto di cui all'art. art. 5, par. 2, GDPR il titolare del trattamento deve rispettare:",
        answers: ["Di rispettare almeno i principi di integrità e riservatezza.", "Di rispettare almeno il principio di liceità.", "Tutti i principi di cui al citato art."],
        corretta: "Tutti i principi di cui al citato art."
    },
    {
        text: "Le P.a. sono tenute a pubblicare i dati di cui al D.Lgs. n. 33/2013 nella sezione denominata:",
        answers: ["Integrità e trasparenza.", "Trasparenza, valutazione e merito.", "Amministrazione trasparente."],
        corretta: "Amministrazione trasparente."
    },
    {
        text: "La probabilità di raggiungimento del livello potenziale di danno nelle condizioni di impiego o di esposizione ad un determinato fattore o agente oppure alla loro combinazione, per gli effetti delle disposizioni di cui al D.Lgs. n. 81/2008 è denominata:",
        answers: ["Valutazione dei rischi.", "Pericolo.", "Rischio."],
        corretta: "Rischio."
    },
    {
        text: "Quale dei seguenti delitti viene disciplinato nel Capo I, Titolo II Libro II del Codice Penale, relativo ai delitti dei pubblici ufficiali contro la Pubblica Amministrazione?",
        answers: ["Usurpazione di funzioni pubbliche.", "Violazione di sigilli.", "Corruzione per un atto contrario ai doveri d'ufficio."],
        corretta: "Corruzione per un atto contrario ai doveri d'ufficio."
    },

    {
        text: "In un foglio di lavoro di MS Excel, quale tra i seguenti operatori deve essere utilizzato per il concatenamento di stringhe?",
        answers: ["$", "^", "&"],
        corretta: "&"
    },

    {
        text: "Completare la seguente proporzione: Y (suicidio) : X (se stessi) = Y (...?...) : X (...?...).",
        answers: ["Y (parricidio) : X (ascendente-discendente).", "Y (parricidio) : X (intero popolo).", "Y (parricidio) : X (intero potere politico)."],
        corretta: "Y (parricidio) : X (ascendente-discendente)."
    },

    {
        text: "Il capo I del titolo III del TUEL è dedicato interamente agli organi di governo del Comune e della Provincia. Per l'amministrazione comunale uno di tali tre organi è rappresentato (art 36, comma 1):",
        answers: ["Dalla Giunta.", "Dal Segretario generale.", "Dal Direttore generale."],
        corretta: "Dalla Giunta."
    },
    {
        text: "Il Sindaco svolge funzioni quale rappresentante della comunità locale (art. 50, Tuel) e funzioni quale ufficiale del Governo (art. 54, Tuel). Indicare quale funzione è svolta dal Sindaco quale rappresentante della comunità locale.",
        answers: ["Adottare le ordinanze contingibili e urgenti in caso di emergenze sanitarie a carattere esclusivamente locale.", "Sovrintendere agli adempimenti in materia elettorale.", "Sovrintendere allo svolgimento delle funzioni affidategli dalla legge in materia di polizia giudiziaria."],
        corretta: "Adottare le ordinanze contingibili e urgenti in caso di emergenze sanitarie a carattere esclusivamente locale."
    },
    {
        text: "Ai sensi dell'art. 107 del d.lgs. n. 267/2000, a chi spetta la direzione degli uffici e dei servizi?",
        answers: ["Ai dirigenti.", "Al Sindaco.", "Al Consiglio."],
        corretta: "Ai dirigenti."
    },
    {
        text: "Deliberare l'istituzione, compiti e norme sul funzionamento degli organismi di decentramento è una competenza che l'art. 42 del Tuel attribuisce:",
        answers: ["All'organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio).", "All'organo esecutivo dell'amministrazione comunale (Giunta).", "All'assessore delegato dal Sindaco."],
        corretta: "All'organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio)."
    },
    {
        text: "A norma del disposto di cui al comma 8, art. 38, Tuel le dimissioni dalla carica di consigliere:",
        answers: ["Necessitano di presa d'atto.", "Non necessitano di presa d'atto.", "Sono presentate al Prefetto."],
        corretta: "Non necessitano di presa d'atto."
    },
    {
        text: "Il Tuel prevede cause di scioglimento del Consiglio comunale?",
        answers: ["No, il Consiglio si scioglie automaticamente solo alla scadenza naturale del mandato (art. 141, Tuel).", "Si, il Consiglio può essere sciolto solo in caso di decesso del Sindaco (art. 141, Tuel).", "Si, il Tuel prevede cause di scioglimento del Consiglio tra cui comprende i gravi motivi di ordine pubblico (art. 141, Tuel)."],
        corretta: "Si, il Tuel prevede cause di scioglimento del Consiglio tra cui comprende i gravi motivi di ordine pubblico (art. 141, Tuel)."
    },
    {
        text: "Ai sensi dell'art. 179, comma 1, del d.lgs. n. 267/2000 (TUEL), prendendo in considerazione distintamente le fasi di gestione dell’entrata, la fissazione della scadenza del credito è propria:",
        answers: ["Della liquidazione.", "Della riscossione.", "Dell'accertamento."],
        corretta: "Dell'accertamento."
    },
    {
        text: "Ai sensi dell'art. 190, del d.lgs. n. 267/2000 (TUEL), il residuo passivo è costituito da:",
        answers: ["Somme accertate ma non pagate entro il termine dell’esercizio.", "Somme impegnate e non pagate entro il termine dell'esercizio.", "Somme né impegnate né pagate entro il termine dell’esercizio."],
        corretta: "Somme impegnate e non pagate entro il termine dell'esercizio."
    },
    {
        text: "Ai sensi dell'art. 175, comma 1, del d.lgs. n. 267/2000 (TUEL), nel corso dell'esercizio sono possibili variazioni al bilancio di previsione?",
        answers: ["Sì, solo nella parte prima, relativa alle entrate.", "No.", "Sì, sia nella parte prima, relativa alle entrate, che nella parte seconda, relativa alle spese."],
        corretta: "Sì, sia nella parte prima, relativa alle entrate, che nella parte seconda, relativa alle spese."
    },
    {
        text: "1) Il dipendente non usa a fini privati le informazioni di cui dispone per ragioni di ufficio. 2) La gestione di risorse pubbliche ai fini dello svolgimento delle attività amministrative deve seguire una logica di contenimento dei costi, che non pregiudichi la qualità dei risultati. Indicare quali/quale tra i precedenti sono 'principi generali' di cui all'art. 3, D.P.R. n. 62/2013.",
        answers: ["Entrambi sono 'principi generali' di cui all'art. 3.", "Entrambi non sono 'principi generali' di cui all'art. 3.", "Solo il n. 2) è un 'principio generale' di cui all'art. 3."],
        corretta: "Entrambi sono 'principi generali' di cui all'art. 3."
    },
    {
        text: "Per espressa previsione di cui l'art. 48 del CCNL del comparto Funzioni locali, il dipendente non in prova assente per malattia:",
        answers: ["Non ha diritto alla conservazione del posto.", "Ha diritto alla conservazione del posto per un periodo di diciotto mesi.", "Ha diritto alla conservazione del posto per un periodo di tre mesi."],
        corretta: "Ha diritto alla conservazione del posto per un periodo di diciotto mesi."
    },
    {
        text: "L'art. 1, co. 1, della l. n. 241/1990 stabilisce che l'azione amministrativa deve essere improntata ad alcuni principi, tra cui economicità, efficacia e pubblicità. Il criterio di pubblicità:",
        answers: ["Indica il rapporto tra risultati ottenuti e obiettivi prestabiliti.", "Prevede l'obbligo di consentire agli interessati l'accesso ai documenti amministrativi.", "È, precisamente, il raffronto tra le risorse impiegate per il perseguimento di un dato fine e il risultato ottenuto."],
        corretta: "Prevede l'obbligo di consentire agli interessati l'accesso ai documenti amministrativi."
    },
    {
        text: "Gli elementi essenziali del provvedimento amministrativo:",
        answers: ["Possono essere discrezionalmente apposti dalla p.a. purché non ledano le posizioni giuridiche dei destinatari.", "Sono elementi in mancanza dei quali il provvedimento non viene in vita.", "Si sostanziano esclusivamente nel soggetto e nella volontà dell'amministrazione."],
        corretta: "Sono elementi in mancanza dei quali il provvedimento non viene in vita."
    },
    {
        text: "Per espressa previsione di cui al co. 1, art. 21 septies, l. n. 241/1990, il provvedimento che manca degli elementi essenziali è:",
        answers: ["È nullo.", "È comunque valido a tutti gli effetti di legge.", "È illecito."],
        corretta: "È nullo."
    },
    {
        text: "La pubblica amministrazione può rifiutare l'accesso ai documenti amministrativi?",
        answers: ["Si, l'amministrazione decide a suo insindacabile giudizio se e quali documenti possano essere sottratti all'accesso.", "No, in nessun caso.", "Si, nei casi e nei limiti stabiliti dalla legge n. 241/1990."],
        corretta: "Si, nei casi e nei limiti stabiliti dalla legge n. 241/1990."
    },
    {
        text: "Le modalità di esercizio del diritto di accesso sono disciplinate dall’art. 25 della legge n. 241/1990 e dal relativo regolamento. Se l’istanza è accolta:",
        answers: ["L’esame e il rilascio di copia dei documenti sono gratuiti e non possono essere subordinati al rimborso di alcun costo.", "L’esame dei documenti è gratuito, il rilascio di copia è subordinato al rimborso del costo di riproduzione, salve le disposizioni vigenti in materia di bollo, nonché i diritti di ricerca e di visura.", "Il diritto di accesso si esercita solo mediante esame di copia presso l’amministrazione che detiene i documenti amministrativi; sia l’esame dei documenti che le riproduzioni sono gratuite."],
        corretta: "L’esame dei documenti è gratuito, il rilascio di copia è subordinato al rimborso del costo di riproduzione, salve le disposizioni vigenti in materia di bollo, nonché i diritti di ricerca e di visura."
    },
    {
        text: "Quale tra le seguenti fasi della procedura ad evidenza pubblica viene per prima rispetto alle altre?",
        answers: ["Aggiudicazione.", "Stipula del contratto.", "Determinazione a contrattare."],
        corretta: "Determinazione a contrattare."
    },
    {
        text: "Chi subisce un danno causato da una violazione al GDPR ha il diritto di ottenere il risarcimento del danno dal titolare del trattamento o dal responsabile del trattamento?",
        answers: ["No.", "Si.", "Solo se il danno è economico."],
        corretta: "Si."
    },
    {
        text: "L'art. 5 del D.Lgs. n. 33/2013, dispone che il procedimento di accesso civico deve concludersi:",
        answers: ["Con provvedimento espresso e motivato.", "Entro 15 giorni dalla presentazione dell'istanza.", "Con provvedimento di secondo grado non motivato."],
        corretta: "Con provvedimento espresso e motivato."
    },
    {
        text: "Il complesso delle attività dirette a fornire conoscenze utili alla identificazione, alla riduzione e alla gestione dei rischi in ambiente di lavoro, per gli effetti delle disposizioni di cui al D.Lgs. n. 81/2008 è denominato:",
        answers: ["Informazione.", "Addestramento.", "Formazione."],
        corretta: "Informazione."
    },
    {
        text: "Quale dei seguenti delitti viene disciplinato nel Capo I, Titolo II Libro II del Codice Penale, relativo ai delitti dei pubblici ufficiali contro la Pubblica Amministrazione?",
        answers: ["Astensione dagli incanti.", "Peculato.", "Violenza o minaccia ad un corpo politico, amministrativo o giudiziario o ai suoi singoli componenti."],
        corretta: "Peculato."
    },

    {
        text: "Utilizzando MS Excel, quale formula deve essere introdotta nella cella A10 se vogliamo che essa mostri il risultato del prodotto delle cifre inserite nelle celle A2 e A3?",
        answers: ["=A2;'per';A3", "=A2*A3", "=A2:A3"],
        corretta: "=A2*A3"
    },
    {
        text: "In MS Word, che cosa succede digitando CTRL+A?",
        answers: ["Viene aperta la finestra che consente di aprire un documento.", "Viene aperto un nuovo documento.", "Viene selezionato tutto il contenuto del documento."],
        corretta: "Viene selezionato tutto il contenuto del documento."
    },

    {
        text: "“Mallo” sta a “Noce” come “..?..” sta a “..?..”.",
        answers: ["Riccio - Castagna.", "Faggio - Guscio.", "Castagna - Buccia."],
        corretta: "Riccio - Castagna."
    },
    {
        text: "“Disco rigido” sta a “..?..” come “programma” sta a “..?..”.",
        answers: ["Cursore - Software.", "Istruzioni - Computer.", "Hardware - Software."],
        corretta: "Hardware - Software."
    }
    ,
    {
        text: "Si completi correttamente: “Il servizio di anagrafe è un servizio di competenza________”.",
        answers: ["Comunale gestito dal Segretario comunale.", "Statale gestito dal Comune.", "Provinciale gestito dal Comune."],
        corretta: "Statale gestito dal Comune."
    },
    {
        text: "Il Sindaco svolge funzioni quale rappresentante della comunità locale (art. 50, Tuel) e funzioni quale ufficiale del Governo (art. 54, Tuel). Indicare quale funzione è svolta dal Sindaco quale rappresentante della comunità locale.",
        answers: ["Sovrintendere agli adempimenti in materia di statistica.", "Nominare i responsabili degli uffici e dei servizi.", "Adottare, con atto motivato, provvedimenti contingibili e urgenti al fine di prevenire e di eliminare gravi pericoli che minacciano l'incolumità pubblica."],
        corretta: "Nominare i responsabili degli uffici e dei servizi."
    },
    {
        text: "Ai sensi dell'art. 107 del d.lgs. n. 267/2000, a chi spettano le funzioni di indirizzo e controllo politico- amministrativo?",
        answers: ["Agli organi di governo dell'Ente.", "Ai dirigenti.", "Al responsabile del servizio finanziario."],
        corretta: "Agli organi di governo dell'Ente."
    },
    {
        text: "Quale organo dell'amministrazione comunale delibera i programmi, le relazioni previsionali e programmatiche, i piani finanziari (Tuel, art. 42)?",
        answers: ["Organo esecutivo dell'amministrazione comunale (Giunta).", "Organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio).", "Assessore delegato dal Sindaco."],
        corretta: "Organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio)."
    },
    {
        text: "L'elezione dei consigli comunali, nonché la loro durata in carica sono regolati (art. 38 Tuel):",
        answers: ["Dal Tuel.", "Dalla regione.", "Dalla Conferenza Stato-Regioni-Città."],
        corretta: "Dal Tuel."
    },
    {
        text: "Quando compia atti contrari alla Costituzione il Consiglio comunale (art. 141 Tuel):",
        answers: ["É dichiarato decaduto con deliberazione del Parlamento.", "É sciolto con decreto del Capo dello Stato.", "É sospeso dalle sue funzioni per 15 giorni."],
        corretta: "É sciolto con decreto del Capo dello Stato."
    },
    {
        text: "Ai sensi dell'art. 179, comma 1, del d.lgs. n. 267/2000 (TUEL), prendendo in considerazione distintamente le fasi di gestione dell’entrata, la quantificazione della somma da incassare è propria:",
        answers: ["Del versamento.", "Dell'accertamento.", "Della riscossione."],
        corretta: "Dell'accertamento."
    },
    {
        text: "Ai sensi l'art. 189, comma 4, del d.lgs. n. 267/2000 (TUEL), le minori entrate concorrono a determinare i risultati finali della gestione?",
        answers: ["No.", "Sì.", "Solo nel caso in cui siano superiori a 100.000,00 euro."],
        corretta: "Sì."
    },
    {
        text: "Quale delle seguenti affermazioni sulle caratteristiche del bilancio degli enti locali è conforme all'art. 164 del d.lgs. n. 267/2000?",
        answers: ["L'unità di voto del bilancio per l'entrata è la categoria.", "L'unità di voto del bilancio per la spesa è il programma, articolato in tipologie.", "L'unità di voto del bilancio per l'entrata è la tipologia."],
        corretta: "L'unità di voto del bilancio per l'entrata è la tipologia."
    },
    {
        text: "\"Il dipendente deve rispettare i principi di integrità, correttezza, buona fede, proporzionalità, obiettività, trasparenza, equità e ragionevolezza. Il citato principio:",
        answers: ["È espressamente contenuto tra i 'principi generali' nel Codice di comportamento dei dipendenti pubblici.", "Non è uno dei 'principi generali' previsto nel Codice di comportamento dei dipendenti pubblici.", "Costituisce 'principio generale' solo se inserito nel Codice di comportamento che ciascuna amministrazione deve obbligatoriamente adottare."],
        corretta: "È espressamente contenuto tra i 'principi generali' nel Codice di comportamento dei dipendenti pubblici."
    },
    {
        text: "A norma di quanto prevede l'art. 40 del CCNL del comparto Funzioni locali, i permessi retribuiti:",
        answers: ["Riducono le ferie.", "Riducono la retribuzione e non sono valutati al fine dell’anzianità di servizio.", "Sono concessi per lutto per il coniuge, per i parenti entro il secondo grado e gli affini entro il primo grado o il convivente."],
        corretta: "Sono concessi per lutto per il coniuge, per i parenti entro il secondo grado e gli affini entro il primo grado o il convivente."
    },
    {
        text: "L'art. 1, co. 1, della l. n. 241/1990 stabilisce che l'azione amministrativa deve essere improntata ad alcuni principi, tra cui economicità, efficacia, imparzialità e pubblicità. Quale principio impone alla p.a. il conseguimento degli obiettivi legislativamente statuiti con il minor dispendio di mezzi?",
        answers: ["Efficienza.", "Economicità.", "Pubblicità."],
        corretta: "Economicità."
    },
    {
        text: "Con riferimento agli elementi del provvedimento amministrativo, il contenuto:",
        answers: ["Non può essere eventuale.", "È naturale quando deriva dall'ordinamento anche ove il provvedimento non ne contenga espressa menzione.", "Indica ciò che con l'atto si intende autorizzare, disporre, ordinare, concedere, attestare, ecc."],
        corretta: "Indica ciò che con l'atto si intende autorizzare, disporre, ordinare, concedere, attestare, ecc."
    },
    {
        text: "Per espressa previsione di cui all'art. 3, l. n. 241/1990, l'obbligo di motivazione:",
        answers: ["È espressamente previsto per gli atti concernenti il personale.", "È espressamente previsto per tutti gli atti.", "È previsto solo per gli atti a contenuto generale."],
        corretta: "È espressamente previsto per tutti gli atti."
    },
    {
        text: "L'accesso ai documenti amministrativi, attese le sue rilevanti finalità di pubblico interesse, costituisce (art. 22, comma 2, l. n. 241/1990):",
        answers: ["Un diritto riconosciuto a tutti i cittadini.", "Principio generale dell'attività amministrativa al fine di favorire la partecipazione e di assicurarne l'imparzialità e la trasparenza", "Un controllo su tutta l'attività amministrativa."],
        corretta: "Principio generale dell'attività amministrativa al fine di favorire la partecipazione e di assicurarne l'imparzialità e la trasparenza"
    },
    {
        text: "Le modalità di esercizio del diritto di accesso sono disciplinate dall’art. 25 della legge n. 241/1990 e dal relativo regolamento. Se l’istanza è accolta il diritto di accesso si esercita:",
        answers: ["Mediante esame e estrazione di copia dei documenti amministrativi, nei modi e con i limiti indicati dalla legge; l’esame dei documenti è gratuito.", "Mediante esame e estrazione di copia dei documenti amministrativi, nei modi e con i limiti indicati dalla legge; l’esame dei documenti è sempre a titolo oneroso.", "Solo mediante esame di copia presso l’amministrazione che detiene i documenti amministrativi; l’esame dei documenti è gratuito."],
        corretta: "Mediante esame e estrazione di copia dei documenti amministrativi, nei modi e con i limiti indicati dalla legge; l’esame dei documenti è gratuito."
    },
    {
        text: "Quale tra i seguenti è il sistema di scelta ordinario del contraente in cui ogni operatore economico interessato può presentare un'offerta in risposta a un avviso di indizione di una gara (D.Lgs. n. 50/2016, art. 60)?",
        answers: ["Procedura aperta.", "Accordo quadro.", "Procedura competitiva con negoziazione."],
        corretta: "Procedura aperta."
    },
    {
        text: "Se il trattamento è necessario alle autorità giurisdizionali per l'esercizio delle loro funzioni giurisdizionali, possono essere trattati dati particolari?",
        answers: ["No, lo vieta espressamente il GDPR.", "No.", "Si, lo prevede espressamente il GDPR."],
        corretta: "Si, lo prevede espressamente il GDPR."
    },
    {
        text: "Ai sensi dell'art. 5, D.Lgs. n. 33/2013, fatti salvi i casi di pubblicazione obbligatoria, il rifiuto, il differimento e la limitazione dell'accesso devono essere motivati?",
        answers: ["No.", "No, deve essere motivato solo il rifiuto.", "Si, devono essere motivati il rifiuto, il differimento e la limitazione."],
        corretta: "Si, devono essere motivati il rifiuto, il differimento e la limitazione."
    },
    {
        text: "La persona eletta o designata per rappresentare i lavoratori per quanto concerne gli aspetti della salute e della sicurezza durante il lavoro, per gli effetti delle disposizioni di cui al D.Lgs. n. 81/2008 è denominata:",
        answers: ["Rappresentante dei lavoratori per la sicurezza.", "Datore di lavoro.", "Preposto."],
        corretta: "Rappresentante dei lavoratori per la sicurezza."
    },
    {
        text: "Quale dei seguenti delitti viene disciplinato nel Capo I, Titolo II Libro II del Codice Penale, relativo ai delitti dei pubblici ufficiali contro la Pubblica Amministrazione?",
        answers: ["Attentato contro la costituzione dello Stato.", "Falsità materiale commessa dal pubblico ufficiale in atti pubblici.", "Concussione."],
        corretta: "Concussione."
    },

    {
        text: "In un foglio di lavoro di MS Excel, nella cella A2 si trova la stringa 'Luisa Monaco' e nella cella A1 si inserisce la formula '=TROVA('o';A2;9)', che cosa mostrerà la cella A1?",
        answers: ["ERROR", "12", "5"],
        corretta: "12"
    },
    {
        text: "In MS PowerPoint, è possibile inserire filmati, animazioni e suoni in una presentazione che siano visibili nella riproduzione a video?",
        answers: ["No.", "Sì.", "È possibile inserire filmati, animazioni e suoni in una presentazione, ma solo con determinati hardware."],
        corretta: "Sì."
    },

    {
        text: "1) Tutti gli insegnanti sono professori. 2) Alcuni insegnanti di inglese conoscono la lingua francese. 3) Augusto è un insegnante di inglese. Se le precedenti affermazioni sono vere, quale delle seguenti è sicuramente vera?",
        answers: ["Non è detto che Augusto conosca la lingua francese.", "Non è certo che Augusto sia un professore.", "Sicuramente Augusto conosce la lingua francese."],
        corretta: "Non è detto che Augusto conosca la lingua francese."
    },

    {
        text: "Il capo I del titolo III del TUEL è dedicato interamente agli organi di governo del comune e della provincia. Per l'amministrazione comunale uno di tali tre organi è rappresentato (art. 36, comma 1):",
        answers: ["Dal Collegio dei revisori.", "Dal Segretario comunale.", "Dal Consiglio."],
        corretta: "Dal Consiglio."
    },
    {
        text: "Il Sindaco svolge funzioni quale rappresentante della comunità locale (art. 50, Tuel) e funzioni quale ufficiale del Governo (art. 54, Tuel). Indicare quale funzione è svolta dal Sindaco quale rappresentante della comunità locale.",
        answers: ["Sovrintendere agli adempimenti in materia elettorale, di leva militare e di statistica.", "Sovrintendere al funzionamento dei servizi.", "Adottare, con atto motivato, provvedimenti contingibili e urgenti al fine di prevenire e di eliminare gravi pericoli che minacciano la sicurezza urbana."],
        corretta: "Sovrintendere al funzionamento dei servizi."
    },
    {
        text: "Ai sensi dell'art. 107 del d.lgs. n. 267/2000, i dirigenti NON sono competenti ad adottare:",
        answers: ["Gli atti di amministrazione e gestione del personale.", "Gli atti di gestione finanziaria.", "Lo Statuto comunale."],
        corretta: "Lo Statuto comunale."
    },
    {
        text: "Deliberare la partecipazione dell'ente locale a società di capitali è una competenza che l'art. 42 del Tuel attribuisce:",
        answers: ["All'organo esecutivo dell'amministrazione comunale (Giunta).", "All'organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio).", "All'assessore delegato dal Sindaco."],
        corretta: "All'organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio)."
    },
    {
        text: "Nomina e revoca dei componenti della Giunta (art. 46, Tuel), individuare l'affermazione corretta.",
        answers: ["Il Sindaco può revocare un assessore previa deliberazione della Giunta.", "Il Sindaco può revocare un assessore dandone motivata comunicazione al Consiglio.", "Il Consiglio può revocare un assessore acquisito il preventivo parere del Sindaco."],
        corretta: "Il Sindaco può revocare un assessore dandone motivata comunicazione al Consiglio."
    },
    {
        text: "Un Consiglio comunale per gravi e persistenti violazioni di legge è sciolto con decreto del Presidente della Repubblica. A norma di quanto prevede l'art. 141 del Tuel quanto affermato è:",
        answers: ["Vero.", "Falso, il Consiglio comunale non può mai essere sciolto.", "Falso, il Consiglio può essere sciolto solo a seguito di referendum locale."],
        corretta: "Vero."
    },
    {
        text: "Ai sensi dell'art. 182, del d.lgs. n. 267/2000 (TUEL), l'ordinazione è una fase della spesa?",
        answers: ["Sì, la terza.", "No.", "Sì, la prima."],
        corretta: "Sì, la terza."
    },
    {
        text: "Ai sensi dell'art. 190, comma 3, del d.lgs. n. 267/2000 (TUEL), le somme non impegnate entro il termine dell'esercizio costituiscono:",
        answers: ["Economie di spesa.", "Residui passivi.", "Residui attivi."],
        corretta: "Economie di spesa."
    },
    {
        text: "Quale delle seguenti affermazioni sulle caratteristiche del bilancio degli enti locali è conforme all'art. 164 del d.lgs. n. 267/2000?",
        answers: ["L'unità di voto del bilancio per l'entrata è la categoria.", "L'unità di voto del bilancio per la spesa è il programma.", "L'unità di voto del bilancio per la spesa è il programma, articolato in tipologie."],
        corretta: "L'unità di voto del bilancio per la spesa è il programma."
    },
    {
        text: "\"Il dipendente non usa a fini privati le informazioni di cui dispone per ragioni di ufficio\". Il citato principio:",
        answers: ["Costituisce 'principio generale' solo se inserito nel Codice di comportamento che ciascuna amministrazione deve adottare.", "È espressamente contenuto tra i 'principi generali' nel Codice di comportamento dei dipendenti pubblici.", "Non è uno dei 'principi generali' previsto nel Codice di comportamento dei dipendenti pubblici."],
        corretta: "È espressamente contenuto tra i 'principi generali' nel Codice di comportamento dei dipendenti pubblici."
    },
    {
        text: "A norma di quanto prevede l'art. 36 del CCNL del comparto Funzioni locali, l’orario flessibile giornaliero consiste nell’individuazione di fasce temporali di flessibilità:",
        answers: ["Solo in entrata.", "Solo in uscita.", "In entrata ed in uscita."],
        corretta: "In entrata ed in uscita."
    },
    {
        text: "L'art. 1, co. 1, della l. n. 241/1990 stabilisce che l'azione amministrativa deve essere improntata ad alcuni principi. Quale criterio prevede l'obbligo di comunicare l'unità organizzativa competente e il nominativo del responsabile?",
        answers: ["Economicità.", "Pubblicità.", "Efficienza."],
        corretta: "Pubblicità."
    },
    {
        text: "Ciò che con il provvedimento amministrativo la p.a. intende, ad esempio, autorizzare, attiene:",
        answers: ["Al centro di imputazione giuridica che pone in essere l'atto (soggetto).", "Alla res su cui l'atto amministrativo incide (oggetto).", "Alla c.d. parte precettiva (contenuto)."],
        corretta: "Alla c.d. parte precettiva (contenuto)."
    },
    {
        text: "L'art. 4, l. n. 241/1990, prevede l'obbligo per le pubbliche amministrazioni:",
        answers: ["Di determinare preventivamente, per ciascun procedimento, l'unità organizzativa responsabile.", "Di determinare successivamente, per ciascun procedimento, l'unità organizzativa responsabile.", "Di determinare preventivamente, un responsabile unico per tutti i procedimenti."],
        corretta: "Di determinare preventivamente, per ciascun procedimento, l'unità organizzativa responsabile."
    },
    {
        text: "Ai sensi della L. 241/1990, art. 22, per 'pubblica amministrazione' si intende:",
        answers: ["Solo gli enti locali.", "Solo le amministrazioni centrali dello Stato.", "Tutti i soggetti di diritto pubblico e i soggetti di diritto privato limitatamente alla loro attività di pubblico interesse."],
        corretta: "Tutti i soggetti di diritto pubblico e i soggetti di diritto privato limitatamente alla loro attività di pubblico interesse."
    },
    {
        text: "L'istituto dell'accesso ai documenti amministrativi, disciplinato dal Capo V della l. n. 241/1990, è strumento indispensabile:",
        answers: ["Al fine di consentire a tutti i cittadini di impedire l'adozione di atti.", "Al fine di controllare la buona gestione delle amministrazioni.", "Al fine di assicurare la trasparenza amministrativa."],
        corretta: "Al fine di assicurare la trasparenza amministrativa."
    },
    {
        text: "Se l’amministrazione aggiudicatrice decide di avvalersi della procedura aperta di cui all’art. 60 del Codice dei contratti pubblici:",
        answers: ["Qualsiasi operatore economico interessato può presentare un'offerta in risposta ad un avviso di indizione di gara.", "L'operatore economico può chiedere di partecipare presentando una richiesta di invito formale.", "Possono presentare offerta solo gli operatori individuati dalla stazione appaltate."],
        corretta: "Qualsiasi operatore economico interessato può presentare un'offerta in risposta ad un avviso di indizione di gara."
    },
    {
        text: "Quale diritto è riconosciuto all'interessato, espressamente all'art. 17 del GDPR, qualora l'interessato si opponga al trattamento?",
        answers: ["Diritto di accesso.", "Diritto di opposizione.", "Diritto all'oblio."],
        corretta: "Diritto all'oblio."
    },
    {
        text: "Ai sensi dell'art. 5, D.Lgs. n. 33/2013, il rilascio di dati o documenti in formato elettronico o cartaceo:",
        answers: ["È gratuito, salvo il rimborso del costo sostenuto per la riproduzione su supporti materiali.", "È sempre a titolo oneroso.", "È di norma gratuito, salvo che l'amministrazione non disponga diversamente."],
        corretta: "È gratuito, salvo il rimborso del costo sostenuto per la riproduzione su supporti materiali."
    },
    {
        text: "Il soggetto titolare del rapporto di lavoro che esercita i poteri decisionali e di spesa per la sicurezza, per gli effetti del D.Lgs. n. 81/2008 è denominato:",
        answers: ["Preposto.", "Datore di lavoro.", "Responsabile del servizio di prevenzione e protezione."],
        corretta: "Datore di lavoro."
    },
    {
        text: "Quale dei seguenti delitti viene disciplinato nel Capo I, Titolo II Libro II del Codice Penale?",
        answers: ["Violazione di sigilli.", "Millantato credito.", "Induzione indebita a dare o promettere utilità."],
        corretta: "Induzione indebita a dare o promettere utilità."
    },

    {
        text: "Le operazioni di Back Up dei dati del PC servono per....",
        answers: ["Poter avere una copia dei dati e dei programmi in caso di rottura dell'Hard Disk.", "Verificare i settori difettosi dell'Hard Disk.", "Riordinare il contenuto dell'Hard Disk."],
        corretta: "Poter avere una copia dei dati e dei programmi in caso di rottura dell'Hard Disk."
    },
    {
        text: "In un foglio di lavoro di MS Excel, quando si copia la cella C6 che contiene la formula =C$4+C$5 e la si inserisce nella cella D6, viene mostrata la formula?",
        answers: ["=D4+D5", "=D$4+C$5", "=D$4+D$5"],
        corretta: "=D$4+D$5"
    },
    {
        text: "Completare la seguente proporzione: Y (monarchìa) : X (governo di uno solo) = Y (...?...) : X (...?...).",
        answers: ["Y (tecnocrazìa) : X (prevalere dei tecnici).", "Y (tecnocrazìa) : X (potere nelle mani di pochi).", "Y (tecnocrazìa) : X (potere esercitato in nome della divinità)."],
        corretta: "Y (tecnocrazìa) : X (prevalere dei tecnici)."
    },

    {
        text: "'..?..' sta a 'Tessuto' come 'Rosa' sta a '..?..'.",
        answers: ["Lino - Fiore.", "Lana - Pugno.", "Colore - Pianta."],
        corretta: "Lino - Fiore."
    },

    {
        text: "L'espressione 'organi di governo' contenuta nell'art. 36 del TUEL è riferita per le amministrazioni comunali, oltre al Sindaco a:",
        answers: ["Consiglio, Giunta e Collegio dei revisori.", "Consiglio e segretario comunale.", "Consiglio e Giunta."],
        corretta: "Consiglio e Giunta."
    },
    {
        text: "Il Sindaco svolge funzioni quale rappresentante della comunità locale (art. 50, Tuel) e funzioni quale ufficiale del Governo (art. 54, Tuel). Indicare quale funzione è svolta dal Sindaco quale rappresentante della comunità locale.",
        answers: ["Sovrintendere al funzionamento degli uffici.", "Adottare, con atto motivato, provvedimenti contingibili e urgenti al fine di prevenire e di eliminare gravi pericoli che minacciano l'incolumità pubblica.", "Sovrintendere agli adempimenti in materia di statistica."],
        corretta: "Sovrintendere al funzionamento degli uffici."
    },
    {
        text: "Specifica l'art. 107 del d.lgs. n. 267/2000, che è attribuita ai dirigenti:",
        answers: ["L’approvazione dello Statuto comunale.", "L’approvazione dei Regolamenti comunali.", "L'adozione di atti che impegnano l'amministrazione verso l'esterno, che la legge o lo Statuto espressamente non riservino ad altri organi."],
        corretta: "L'adozione di atti che impegnano l'amministrazione verso l'esterno, che la legge o lo Statuto espressamente non riservino ad altri organi."
    },
    {
        text: "Quale organo di governo dell'amministrazione del Comune delibera i piani territoriali ed urbanistici e i programmi annuali e pluriennali per la loro attuazione (Tuel, art. 42)?",
        answers: ["Organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio).", "Assessore delegato dal Sindaco.", "Organo esecutivo dell'amministrazione comunale (Giunta)."],
        corretta: "Organo di indirizzo e di controllo politico-amministrativo dell'amministrazione comunale (Consiglio)."
    },
    {
        text: "Ai sensi dell'art. 52 del d.lgs. n. 267/2000, il voto contrario del consiglio comunale a una proposta del Sindaco:",
        answers: ["Comporta dimissioni dello stesso solo se adeguatamente motivata.", "Non comporta dimissioni dello stesso, salvo il caso di mozione di sfiducia.", "Non comporta dimissioni dello stesso, nemmeno in caso di mozione di sfiducia."],
        corretta: "Non comporta dimissioni dello stesso, salvo il caso di mozione di sfiducia."
    },
    {
        text: "Il Capo dello Stato può sciogliere il Consiglio comunale per gravi e persistenti violazioni di legge (Tuel, art. 141)?",
        answers: ["Si, con decreto.", "No, il Capo dello Stato non ha alcuna competenza in materia.", "Si, con decreto, previa deliberazione delle Camere."],
        corretta: "Si, con decreto."
    },
    {
        text: "Ai sensi dell'art. 178, del d.lgs. n. 267/2000 (TUEL), l'accertamento è una fase di gestione dell'entrata?",
        answers: ["Sì.", "Solo nelle entrate vincolate.", "No."],
        corretta: "Sì."
    },
    {
        text: "Ai sensi dell'art. 189, comma 4, del d.lgs. n. 267/2000 (TUEL), le somme iscritte tra le entrate di competenza e non accertate entro il termine dell'esercizio costituiscono:",
        answers: ["Residui attivi.", "Minori entrate.", "Economie di spesa."],
        corretta: "Minori entrate."
    },
    {
        text: "Ai sensi dell'art. 165, comma 4 del d.lgs. n. 267/2000, le previsioni di spesa del bilancio sono classificate in:",
        answers: ["Titoli e capitoli.", "Missioni e programmi.", "Titoli e tipologie."],
        corretta: "Missioni e programmi."
    },
    {
        text: "1) Il dipendente deve agire in posizione di indipendenza e imparzialità. 2) Il dipendente deve dimostrare la massima disponibilità e collaborazione nei rapporti con le altre p.a. Indicare quali/quale sono 'principi generali' ex art. 3 DPR 62/2013.",
        answers: ["Entrambi sono 'principi generali' di cui all'art. 3.", "Solo il n. 2) è un 'principio generale' di cui all'art. 3.", "Solo il n. 1) è un 'principio generale' di cui all'art. 3."],
        corretta: "Entrambi sono 'principi generali' di cui all'art. 3."
    },
    {
        text: "A norma di quanto prevede l'art. 40 del CCNL del comparto Funzioni locali, i permessi retribuiti:",
        answers: ["Riducono la retribuzione e non sono valutati al fine dell’anzianità di servizio.", "Riducono le ferie.", "Sono concessi per la partecipazione a concorsi."],
        corretta: "Sono concessi per la partecipazione a concorsi."
    },
    {
        text: "L'art. 1, co. 1, della l. n. 241/1990 stabilisce che l'azione amministrativa deve essere improntata ad alcuni principi. Il criterio di efficacia:",
        answers: ["Indica il rapporto tra risultati ottenuti e obiettivi prestabiliti.", "Prevede l'obbligo di rendere pubbliche le disposizioni adottate dalle p.a.", "Impone alla p.a. il conseguimento degli obiettivi con il minor dispendio di mezzi."],
        corretta: "Indica il rapporto tra risultati ottenuti e obiettivi prestabiliti."
    },
    {
        text: "Con riferimento agli elementi essenziali del provvedimento amministrativo, la finalità:",
        answers: ["È lo scopo che persegue l'atto.", "È la res su cui il provvedimento incide.", "È un comportamento, un fatto o un bene sul quale si indirizza la volontà."],
        corretta: "È lo scopo che persegue l'atto."
    },
    {
        text: "Per espressa previsione di cui all'art. 3-bis della legge n. 241/1990 le pubbliche amministrazioni:",
        answers: ["Incentivano l'uso della telematica solo nei rapporti interni.", "Non possono incentivare l'uso della telematica.", "Incentivano l'uso della telematica per conseguire maggiore efficienza nella loro attività."],
        corretta: "Incentivano l'uso della telematica per conseguire maggiore efficienza nella loro attività."
    },
    {
        text: "Ai fini dell'istituto del diritto di accesso ai documenti amministrativi, per 'interessati' si intendono (l. n. 241/1990):",
        answers: ["Tutte le pubbliche amministrazioni.", "Tutti i soggetti che vogliano prendere visione del documento.", "Tutti i soggetti privati che abbiano un interesse diretto, concreto e attuale correlato al documento."],
        corretta: "Tutti i soggetti privati che abbiano un interesse diretto, concreto e attuale correlato al documento."
    },
    {
        text: "La legislazione vigente prevede tre tipologie di accesso. Per quale tipologia il richiedente deve dimostrare di essere titolare di un interesse diretto, concreto e attuale?",
        answers: ["Accesso documentale.", "Accesso generalizzato.", "Accesso civico."],
        corretta: "Accesso documentale."
    },
    {
        text: "Se l’amministrazione aggiudicatrice decide di avvalersi della procedura ristretta di cui all’art. 61 del Codice dei contratti pubblici:",
        answers: ["Solo gli operatori individuati dall’amministrazione aggiudicatrice possono presentare un’offerta.", "Qualsiasi operatore economico interessato può presentare un'offerta.", "Solo gli operatori qualificati possono presentare direttamente l’offerta."],
        corretta: "Solo gli operatori individuati dall’amministrazione aggiudicatrice possono presentare un’offerta."
    },
    {
        text: "Tra i diritti di cui agli artt. dal 15 al 22 del GDPR:",
        answers: ["Sono previsti i diritti alla portabilità dei dati e di accesso.", "Non è previsto il diritto alla cancellazione.", "Non è previsto il diritto di opposizione."],
        corretta: "Sono previsti i diritti alla portabilità dei dati e di accesso."
    },
    {
        text: "L'art. 8 del D.Lgs. n. 33/2013, dispone che i documenti contenenti atti oggetto di pubblicazione obbligatoria sono pubblicati:",
        answers: ["Entro 60 giorni dalla formazione dei documenti.", "Tempestivamente sul sito istituzionale dell'amministrazione.", "Entro 30 giorni dalla formazione dei documenti."],
        corretta: "Tempestivamente sul sito istituzionale dell'amministrazione."
    },
    {
        text: "La persona che attua le direttive del datore di lavoro organizzando l'attività lavorativa e vigilando su di essa, per il D.Lgs. n. 81/2008 è denominata:",
        answers: ["Preposto.", "Rappresentante dei lavoratori per la sicurezza.", "Dirigente."],
        corretta: "Dirigente."
    },
    {
        text: "Quale dei seguenti delitti viene disciplinato nel Capo I, Titolo II Libro II del Codice Penale?",
        answers: ["Turbata libertà degli incanti.", "Oltraggio a pubblico ufficiale.", "Rivelazione ed utilizzazione di segreti di ufficio."],
        corretta: "Rivelazione ed utilizzazione di segreti di ufficio."
    },

    {
        text: "All'interno di quasi tutti i programmi per Windows esiste la Guida in linea, con quale tasto rapido la si può consultare?",
        answers: ["F4.", "F6.", "F1."],
        corretta: "F1."
    },
    {
        text: "In un foglio di lavoro di MS Excel, se l'argomento della funzione Somma comprende una cella contenente una data, qual è il risultato visualizzato?",
        answers: ["La somma dei valori delle altre celle.", "Nessuno: c'è una segnalazione di errore.", "La data viene convertita in valore numerico e il valore ottenuto viene sommato."],
        corretta: "La data viene convertita in valore numerico e il valore ottenuto viene sommato."
    },
    {
        text: "Completare la seguente proporzione: Y (aristocrazia) : X (governo di nobili) = Y (...?...) : X (...?...).",
        answers: ["Y (plutocrazìa) : X (potere nelle mani di pochi).", "Y (plutocrazìa) : X (governo di cittadini).", "Y (plutocrazìa) : X (sistema politico di gruppi che detengono la ricchezza)."],
        corretta: "Y (plutocrazìa) : X (sistema politico di gruppi che detengono la ricchezza)."
    },

    {
        text: "Il capo I del titolo III del TUEL è dedicato agli organi di governo. Per l'amministrazione comunale NON è uno di tali tre organi (art 36, comma 1):",
        answers: ["Consiglio.", "Segretario generale.", "Sindaco."],
        corretta: "Segretario generale."
    },
    {
        text: "Il Sindaco svolge funzioni quale rappresentante locale e quale ufficiale del Governo. Quale funzione svolge come rappresentante della comunità locale?",
        answers: ["Attribuire e definire gli incarichi dirigenziali.", "Sovrintendere alle funzioni di pubblica sicurezza.", "Sovrintendere alla tenuta dei registri di stato civile."],
        corretta: "Attribuire e definire gli incarichi dirigenziali."
    },
    {
        text: "Specifica l'art. 107 del d.lgs. n. 267/2000, che ai dirigenti:",
        answers: ["Spetta la presidenza delle commissioni di gara e di concorso.", "Spetta l'approvazione dei programmi triennali.", "Spetta l'approvazione del Regolamento dei centri anziani."],
        corretta: "Spetta la presidenza delle commissioni di gara e di concorso."
    },
    {
        text: "Quale organo di governo del Comune delibera l'istituzione, compiti e norme sugli organismi di partecipazione (art. 42 TUEL)?",
        answers: ["Organo di indirizzo e di controllo politico-amministrativo (Consiglio).", "Assessore delegato dal Sindaco.", "Organo esecutivo (Giunta)."],
        corretta: "Organo di indirizzo e di controllo politico-amministrativo (Consiglio)."
    },
    {
        text: "L'elezione dei consigli comunali, nonché la posizione giuridica dei consiglieri sono regolati (art. 38 Tuel):",
        answers: ["Dalla regione.", "Dal Ministero dell'Interno.", "Dal Tuel."],
        corretta: "Dal Tuel."
    },
    {
        text: "In merito alla nomina e revoca del segretario (artt. 99-100 TUEL), indicare l'affermazione corretta:",
        answers: ["É nominato dall'organo esecutivo dell'ente.", "Cessa automaticamente dall'incarico con la cessazione del mandato del Sindaco.", "Può essere revocato solo con provvedimento non motivato."],
        corretta: "Cessa automaticamente dall'incarico con la cessazione del mandato del Sindaco."
    },
    {
        text: "Ai sensi dell'art. 182 del TUEL, la gestione delle spese si articola in quattro fasi nell'ordine:",
        answers: ["Ordinazione, pagamento, impegno e liquidazione.", "Impegno, liquidazione, ordinazione e pagamento.", "Impegno, ordinazione, pagamento e liquidazione."],
        corretta: "Impegno, liquidazione, ordinazione e pagamento."
    },
    {
        text: "Ai sensi dell'art. 189 del TUEL, le somme accertate e non riscosse entro il termine dell'esercizio costituiscono:",
        answers: ["Residui passivi.", "Residui attivi.", "Minori entrate."],
        corretta: "Residui attivi."
    },
    {
        text: "A norma dell'art. 149 del TUEL, gli Enti locali dispongono di:",
        answers: ["Autonomia finanziaria fondata esclusivamente su risorse proprie.", "Autonomia finanziaria fondata su risorse proprie e trasferite.", "Autonomia finanziaria fondata solo su risorse trasferite."],
        corretta: "Autonomia finanziaria fondata su risorse proprie e trasferite."
    },
    {
        text: "Indicare quali tra i seguenti sono 'principi generali' di cui all'art. 3 del D.P.R. n. 62/2013 (Codice di comportamento):",
        answers: ["Solo evitare situazioni che nuocciano all'immagine della p.a.", "Sia l'integrità dell'immagine che l'esercizio dei poteri per l'interesse generale.", "Nessuno dei due."],
        corretta: "Sia l'integrità dell'immagine che l'esercizio dei poteri per l'interesse generale."
    },
    {
        text: "A norma dell'art. 29 del CCNL Funzioni locali, l'orario ordinario di lavoro è di:",
        answers: ["36 ore settimanali.", "34 ore settimanali.", "50 ore settimanali."],
        corretta: "36 ore settimanali."
    },
    {
        text: "Quale criterio della L. 241/90 prevede l'obbligo di rendere pubbliche le determinazioni dell'unità organizzativa responsabile?",
        answers: ["Efficienza.", "Economicità.", "Pubblicità."],
        corretta: "Pubblicità."
    },
    {
        text: "Quante e quali sono le principali fasi del procedimento amministrativo?",
        answers: ["Tre: iniziativa - decisoria - integrativa dell'efficacia.", "Tre: istruttoria - motivazionale - integrativa.", "Quattro: iniziativa - istruttoria - decisoria - integrativa dell'efficacia."],
        corretta: "Quattro: iniziativa - istruttoria - decisoria - integrativa dell'efficacia."
    },
    {
        text: "La comunicazione dell'avvio del procedimento amministrativo va fatta (art. 7 L. 241/90):",
        answers: ["Tra l'altro, ai futuri destinatari del provvedimento finale.", "Ai soggetti individuati a discrezione dal responsabile.", "Solo ai futuri destinatari del provvedimento finale."],
        corretta: "Tra l'altro, ai futuri destinatari del provvedimento finale."
    },
    {
        text: "Nell'esercizio del diritto di accesso ai documenti (art. 25 L. 241/90):",
        answers: ["L'esame è gratuito, il rilascio di copia prevede il rimborso dei costi di riproduzione.", "L'esame dei documenti è oneroso.", "Il rilascio di copia è sempre totalmente gratuito."],
        corretta: "L'esame è gratuito, il rilascio di copia prevede il rimborso dei costi di riproduzione."
    },
    {
        text: "I soggetti privati con interesse diretto e attuale collegato al documento richiesto sono definiti:",
        answers: ["Interessati.", "Controinteressati.", "Soggetti terzi."],
        corretta: "Interessati."
    },
    {
        text: "Quale tra le seguenti è una procedura ordinaria per l'affidamento di un contratto pubblico?",
        answers: ["Dialogo competitivo.", "Procedura negoziata.", "Procedura aperta."],
        corretta: "Procedura aperta."
    },
    {
        text: "Il danno causato dal responsabile del trattamento che dà diritto al risarcimento (art. 82 GDPR):",
        answers: ["Deve necessariamente essere un danno economico.", "Deve necessariamente essere un danno materiale.", "Può essere un danno materiale o immateriale."],
        corretta: "Può essere un danno materiale o immateriale."
    },
    {
        text: "Ai sensi dell’art. 5 del D.Lgs. 33/2013, il rifiuto, il differimento e la limitazione dell'accesso civico devono essere motivati?",
        answers: ["No, solo il rifiuto.", "Sì, è corretto.", "No, solo la limitazione."],
        corretta: "Sì, è corretto."
    },
    {
        text: "Il soggetto che sovrintende all'attività lavorativa e garantisce l'attuazione delle direttive ricevute (D.Lgs. 81/2008) è il:",
        answers: ["Responsabile del servizio di prevenzione.", "Datore di lavoro.", "Preposto."],
        corretta: "Preposto."
    },
    {
        text: "Quale dei seguenti delitti è disciplinato tra i delitti dei pubblici ufficiali contro la P.A.?",
        answers: ["Abuso di ufficio.", "Abusivo esercizio di una professione.", "Oltraggio a un magistrato in udienza."],
        corretta: "Abuso di ufficio."
    },

    {
        text: "In MS Word, quale tra i seguenti è un effetto di Carattere?",
        answers: ["Barrato Doppio.", "Corsivo.", "Arial."],
        corretta: "Barrato Doppio."
    },
    {
        text: "In MS Excel, quale combinazione di tasti serve per inserire una riga sopra quella selezionata?",
        answers: ["Alt +.", "Alt C.", "Ctrl +."],
        corretta: "Ctrl +."
    },
    {
        text: "Completare la proporzione: Y (democrazia) : X (governo di cittadini) = Y (aristocrazia) : X (...?...).",
        answers: ["Prevalere dei tecnici.", "Potere assoluto del sovrano.", "Governo di nobili."],
        corretta: "Governo di nobili."
    },


    {
        text: "PONENTINO sta a ROMA come BORA sta a....",
        answers: ["Messina.", "Trieste.", "Vento."],
        corretta: "Trieste."
    }
    ,
    {
        text: "Ai sensi dell'art. 3 del d.lgs. n. 267/2000, i Comuni:",
        answers: ["Hanno autonomia statutaria e normativa.", "Hanno solo autonomia statutaria.", "Hanno autonomia statutaria, normativa e imprenditoriale."],
        corretta: "Hanno autonomia statutaria e normativa."
    },
    {
        text: "Il Sindaco svolge funzioni quale rappresentante locale e ufficiale del Governo. Quale funzione svolge come rappresentante della comunità locale?",
        answers: ["Attribuire e definire gli incarichi di collaborazione esterna.", "Sovrintendere alle funzioni di polizia giudiziaria.", "Sovrintendere agli adempimenti in materia elettorale."],
        corretta: "Attribuire e definire gli incarichi di collaborazione esterna."
    },
    {
        text: "Specifica l'art. 107 del d.lgs. n. 267/2000, che è attribuita ai dirigenti:",
        answers: ["La responsabilità delle procedure d'appalto e di concorso.", "La tenuta dei registri di stato civile e di popolazione.", "L'approvazione del Regolamento per il prestito interbibliotecario."],
        corretta: "La responsabilità delle procedure d'appalto e di concorso."
    },
    {
        text: "Le modifiche allo statuto comunale sono deliberate (art. 6, Tuel) da:",
        answers: ["Organo di indirizzo e di controllo politico-amministrativo (Consiglio).", "Assessore delegato dal Sindaco.", "Organo esecutivo (Giunta)."],
        corretta: "Organo di indirizzo e di controllo politico-amministrativo (Consiglio)."
    },
    {
        text: "Una volta eletti, quando entrano in carica i consiglieri comunali (art. 38 TUEL)?",
        answers: ["Subito dopo il conteggio delle schede elettorali.", "All'atto della proclamazione.", "Dopo il giuramento innanzi al Prefetto."],
        corretta: "All'atto della proclamazione."
    },
    {
        text: "Chi può rogare tutti i contratti nei quali l'amministrazione è parte ed autenticare scritture private (art. 97 Tuel)?",
        answers: ["Giunta collegialmente.", "Segretario comunale.", "Rappresentante legale dell'ente (Sindaco)."],
        corretta: "Segretario comunale."
    },
    {
        text: "Ai sensi dell'art. 182 del TUEL, quali sono le fasi di gestione della spesa?",
        answers: ["Impegno, liquidazione, ordinazione e pagamento.", "Impegno, accertamento e pagamento.", "Impegno, versamento e pagamento."],
        corretta: "Impegno, liquidazione, ordinazione e pagamento."
    },
    {
        text: "Ai sensi dell'art. 189 del TUEL, le somme iscritte tra le entrate di competenza e NON accertate entro il termine dell'esercizio costituiscono:",
        answers: ["Minori entrate che concorrono a determinare i risultati finali della gestione.", "Minori entrate che non concorrono ai risultati della gestione.", "Residui attivi."],
        corretta: "Minori entrate che concorrono a determinare i risultati finali della gestione."
    },
    {
        text: "Ai sensi dell'art. 165 del TUEL, la previsione di entrata del bilancio è ordinata in tipologie secondo:",
        answers: ["I programmi.", "La natura delle entrate, nell'ambito di ciascuna fonte di provenienza.", "La fonte di provenienza delle entrate."],
        corretta: "La natura delle entrate, nell'ambito di ciascuna fonte di provenienza."
    },
    {
        text: "'Il dipendente deve dimostrare massima disponibilità e collaborazione nei rapporti con le altre p.a.'. Tale principio:",
        answers: ["Vale solo se inserito nel Codice di comportamento dell'amministrazione specifica.", "È espressamente contenuto tra i 'principi generali' del Codice nazionale.", "Non è un principio generale."],
        corretta: "È espressamente contenuto tra i 'principi generali' del Codice nazionale."
    },
    {
        text: "A norma dell'art. 25 del CCNL Funzioni locali, per il personale non inquadrato come Operatore, il periodo di prova dura:",
        answers: ["Sei mesi.", "Dodici mesi.", "Un mese."],
        corretta: "Sei mesi."
    },
    {
        text: "Quale principio della L. 241/90 indica il rapporto tra risultati ottenuti e obiettivi prestabiliti?",
        answers: ["Efficacia.", "Pubblicità.", "Economicità."],
        corretta: "Efficacia."
    },
    {
        text: "Con riferimento agli elementi del provvedimento amministrativo, il destinatario:",
        answers: ["È il soggetto pubblico o privato nei cui confronti l'atto produce effetti.", "Deve essere sempre determinato, non basta che sia determinabile.", "Costituisce l'insieme delle statuizioni dell'atto."],
        corretta: "È il soggetto pubblico o privato nei cui confronti l'atto produce effetti."
    },
    {
        text: "I termini di conclusione del procedimento possono essere sospesi per acquisire informazioni o certificazioni non in possesso della P.A.?",
        answers: ["No, mai.", "Sì, per una sola volta.", "Sì, possono essere interrotti più volte."],
        corretta: "Sì, per una sola volta."
    },
    {
        text: "Il diritto di accesso ai documenti amministrativi (art. 22 L. 241/90) consiste nel diritto di:",
        answers: ["Chiunque di ottenere informazioni dalla P.A.", "Interessati di prendere visione e di estrarre copia dei documenti.", "Chiunque di prendere visione dei documenti."],
        corretta: "Interessati di prendere visione e di estrarre copia dei documenti."
    },
    {
        text: "Per quale tipo di accesso serve un 'interesse diretto, concreto e attuale' collegato al documento?",
        answers: ["Accesso documentale.", "Accesso generalizzato.", "Accesso civico."],
        corretta: "Accesso documentale."
    },
    {
        text: "Quale procedura di scelta del contraente può essere utilizzata solo in presenza di particolari presupposti?",
        answers: ["Procedura aperta.", "Procedura ristretta.", "Dialogo competitivo."],
        corretta: "Dialogo competitivo."
    },
    {
        text: "Cosa richiede l'art. 5 del GDPR (Accountability) al titolare del trattamento?",
        answers: ["Rispettare solo correttezza e trasparenza.", "Rispettare tutti i principi del GDPR ed essere in grado di comprovarlo.", "Rispettare solo la limitazione della conservazione."],
        corretta: "Rispettare tutti i principi del GDPR ed essere in grado di comprovarlo."
    },
    {
        text: "Ai sensi dell’art. 5 del D.Lgs. 33/2013, il rilascio di dati in formato elettronico o cartaceo:",
        answers: ["È sempre a titolo oneroso.", "È di norma gratuito, salvo diversa disposizione.", "È gratuito, salvo il rimborso del costo di riproduzione sostenuto."],
        corretta: "È gratuito, salvo il rimborso del costo di riproduzione sostenuto."
    },
    {
        text: "Il soggetto che svolge attività lavorativa nell'organizzazione di un datore (D.Lgs. 81/2008), con o senza retribuzione, è il:",
        answers: ["Lavoratore.", "Preposto.", "Responsabile del servizio di prevenzione."],
        corretta: "Lavoratore."
    },
    {
        text: "Quale dei seguenti delitti è disciplinato tra i delitti dei pubblici ufficiali contro la P.A.?",
        answers: ["Corruzione per l'esercizio della funzione.", "Inadempimento di contratti di pubbliche forniture.", "Resistenza a un pubblico ufficiale."],
        corretta: "Corruzione per l'esercizio della funzione."
    },

    {
        text: "In Windows, a che cosa serve la sequenza di tasti Win+R?",
        answers: ["A minimizzare tutte le finestre.", "Ad aprire la finestra di dialogo Esegui.", "Ad aprire o chiudere il menu Start."],
        corretta: "Ad aprire la finestra di dialogo Esegui."
    },
    {
        text: "In MS Excel, se selezioni 3 celle orizzontali e attivi il bordo inferiore, la linea appare:",
        answers: ["Solo sotto la prima cella.", "Solo se confermata con Invio.", "Sotto tutte e tre le celle."],
        corretta: "Sotto tutte e tre le celle."
    },

    {
        text: "L'espressione 'organi di governo' contenuta nell'art. 36 del TUEL è riferita per le amministrazioni comunali a:",
        answers: ["Giunta, Consiglio e Sindaco.", "Consiglio, Sindaco e Collegio dei revisori.", "Giunta, Consiglio e Segretario comunale."],
        corretta: "Giunta, Consiglio e Sindaco."
    },
    {
        text: "Quale tra queste funzioni è svolta dal Sindaco quale rappresentante della comunità locale (art. 50 TUEL)?",
        answers: ["Sovrintendere agli adempimenti in materia elettorale.", "Presiedere la Giunta.", "Sovrintendere alle funzioni di polizia giudiziaria."],
        corretta: "Presiedere la Giunta."
    },
    {
        text: "Specifica l'art. 107 del d.lgs. n. 267/2000, che è attribuita ai dirigenti:",
        answers: ["L’approvazione del Regolamento di contabilità.", "La responsabilità delle procedure di appalto e di concorso.", "L’approvazione dello Statuto comunale."],
        corretta: "La responsabilità delle procedure di appalto e di concorso."
    },
    {
        text: "Deliberare la costituzione di istituzioni e aziende speciali è una competenza che l'art. 42 del Tuel attribuisce:",
        answers: ["All'organo di indirizzo e di controllo (Consiglio).", "All'assessore delegato dal Sindaco.", "All'organo esecutivo (Giunta)."],
        corretta: "All'organo di indirizzo e di controllo (Consiglio)."
    },
    {
        text: "La revoca degli assessori da parte del Sindaco deve essere sempre motivata (art. 46, comma 4, TUEL)?",
        answers: ["Sì, il Sindaco può revocarli dandone motivata comunicazione al Consiglio.", "No, salvo che lo Statuto non richieda la motivazione.", "No, è un atto libero."],
        corretta: "Sì, il Sindaco può revocarli dandone motivata comunicazione al Consiglio."
    },
    {
        text: "In merito allo scioglimento del Consiglio comunale, il TUEL prevede che:",
        answers: ["Il Consiglio può essere sciolto solo in caso di decesso del Sindaco.", "Le cause includono l'impedimento permanente del Sindaco.", "Si scioglie automaticamente solo alla scadenza naturale del mandato."],
        corretta: "Le cause includono l'impedimento permanente del Sindaco."
    },
    {
        text: "Nelle fasi di gestione dell’entrata (art. 179 TUEL), l'individuazione del soggetto debitore avviene nella fase:",
        answers: ["Della riscossione.", "Del versamento.", "Dell'accertamento."],
        corretta: "Dell'accertamento."
    },
    {
        text: "Ai sensi dell'art. 189 del TUEL, quali entrate sono mantenute tra i residui dell'esercizio?",
        answers: ["Tutte le entrate, anche le non accertate.", "Solo le entrate accertate con titolo giuridico ed esigibili nell'esercizio.", "Tutte le entrate accertate, indistintamente."],
        corretta: "Solo le entrate accertate con titolo giuridico ed esigibili nell'esercizio."
    },
    {
        text: "Ai sensi dell'articolo 149 del TUEL, gli enti locali dispongono di:",
        answers: ["Potestà impositiva autonoma nel campo delle imposte, delle tasse e delle tariffe.", "Potestà impositiva autonoma nel campo delle sole imposte.", "Autonomia normativa e finanziaria, ma non potestà impositiva propria."],
        corretta: "Potestà impositiva autonoma nel campo delle imposte, delle tasse e delle tariffe."
    },
    {
        text: "Il principio per cui il dipendente deve assicurare piena parità di trattamento a parità di condizioni:",
        answers: ["Vale solo se inserito nel Codice di comportamento della singola amministrazione.", "Non è previsto nel Codice nazionale.", "È espressamente contenuto tra i 'principi generali' del Codice nazionale."],
        corretta: "È espressamente contenuto tra i 'principi generali' del Codice nazionale."
    },
    {
        text: "A norma dell'art. 42 del CCNL Funzioni locali, le ore non lavorate per permessi brevi devono essere recuperate?",
        answers: ["No, salvo diversa disposizione dell'ente.", "No, mai.", "Sì, entro i due mesi successivi."],
        corretta: "Sì, entro i due mesi successivi."
    },
    {
        text: "Il criterio di efficacia nell'azione amministrativa (L. 241/90):",
        answers: ["Prevede l'obbligo di consentire l'accesso ai documenti.", "È il raffronto tra risorse impiegate e risultato ottenuto.", "Costituisce un'articolazione del principio di buona amministrazione (art. 97 Cost)."],
        corretta: "Costituisce un'articolazione del principio di buona amministrazione (art. 97 Cost)."
    },
    {
        text: "Con riferimento agli elementi del provvedimento amministrativo, la finalità è:",
        answers: ["Un comportamento o bene su cui si indirizza la volontà.", "La res su cui il provvedimento incide.", "L'interesse pubblico perseguito dall'amministrazione."],
        corretta: "L'interesse pubblico perseguito dall'amministrazione."
    },
    {
        text: "La notizia di avvio del procedimento amministrativo (L. 241/90) avviene:",
        answers: ["Di norma mediante avviso pubblico.", "Di norma mediante comunicazione personale.", "Di norma mediante la messa a disposizione degli atti."],
        corretta: "Di norma mediante comunicazione personale."
    },
    {
        text: "I soggetti che vedrebbero compromesso il loro diritto alla riservatezza dall'esercizio dell'accesso altrui sono definiti:",
        answers: ["Interessati.", "Controinteressati.", "Soggetti terzi."],
        corretta: "Controinteressati."
    },
    {
        text: "Se l’istanza di accesso è accolta, il diritto si esercita mediante:",
        answers: ["Esame ed estrazione di copia dei documenti amministrativi.", "Esame oneroso dei documenti.", "Solo mediante esame di copia senza estrazione."],
        corretta: "Esame ed estrazione di copia dei documenti amministrativi."
    },
    {
        text: "Cosa deve individuare la stazione appaltante nel decreto o nella determinazione a contrarre (art. 32 D.Lgs. 50/2016)?",
        answers: ["Sia i criteri di selezione degli operatori che quelli delle offerte.", "Solo i criteri di selezione degli operatori.", "Solo i criteri di selezione delle offerte."],
        corretta: "Sia i criteri di selezione degli operatori che quelli delle offerte."
    },
    {
        text: "Il divieto di trattare dati particolari (art. 9 GDPR) non trova applicazione se:",
        answers: ["L'interessato ha dato consenso solo verbale.", "Il trattamento è necessario alle autorità giurisdizionali per le loro funzioni.", "Il divieto è sempre assoluto e tassativo."],
        corretta: "Il trattamento è necessario alle autorità giurisdizionali per le loro funzioni."
    },
    {
        text: "La richiesta di accesso civico 'semplice' (art. 5 D.Lgs. 33/2013):",
        answers: ["Non è sottoposta ad alcuna limitazione quanto alla legittimazione del richiedente.", "Richiede un interesse diretto, concreto e attuale.", "Deve essere connessa alla tutela di una situazione giuridica rilevante."],
        corretta: "Non è sottoposta ad alcuna limitazione quanto alla legittimazione del richiedente."
    },
    {
        text: "Il D.Lgs. 81/2008 (Sicurezza sul lavoro) si applica:",
        answers: ["Al solo settore pubblico.", "A tutti i settori di attività, privati e pubblici, e a tutte le tipologie di rischio.", "Ai soli settori privati."],
        corretta: "A tutti i settori di attività, privati e pubblici, e a tutte le tipologie di rischio."
    },
    {
        text: "Quale dei seguenti delitti è disciplinato tra i delitti dei pubblici ufficiali contro la P.A.?",
        answers: ["Oltraggio a un corpo politico.", "Violazione della pubblica custodia di cose.", "Utilizzazione d'invenzioni conosciute per ragione d'ufficio."],
        corretta: "Utilizzazione d'invenzioni conosciute per ragione d'ufficio."
    },

    {
        text: "In Windows, si può aprire la finestra 'Esegui' digitando:",
        answers: ["Win + S", "Win + R", "Tasto logo Windows."],
        corretta: "Win + R"
    },
    {
        text: "In MS Excel, che combinazione di tasti serve per selezionare l'intero foglio di lavoro?",
        answers: ["Alt + A.", "Maiusc + C.", "Ctrl + A."],
        corretta: "Ctrl + A."
    },
    {
        text: "'EFESTO' sta a 'dio del fuoco' come 'MARTE' sta a:",
        answers: ["'dio del vino'.", "'dio della guerra'.", "'dio del vento'."],
        corretta: "'dio della guerra'."
    }
];
