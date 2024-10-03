# DeDDashboard

Per startare il progetto:
- `npm install`
- `npm start` o `ng serve`

Il progetto è diviso in 3 moduli principali:
- **core**: Le funzioni, i servizi e i modelli principali condivisi a livello globale nell'applicazione e che non hanno alcuna relazione con il modulo funzionalità devono far parte del modulo principale.  Qui dovrebbero essere implementati i servizi singleton che devono avere una ed una sola istanza per applicazione. Il modulo contiene un servizio di autenticazione e componenti statici come intestazione, piè di pagina, barra di navigazione, barra laterale, intercettori, guardia, costanti, enumerazioni, utilità e modelli universali.
- **shared**: I componenti, le direttive e le pipe condivise tra vari moduli dovrebbero essere mantenuti in un modulo condiviso. Ad esempio, la ricerca e i caricatori potrebbero essere utilizzati in più funzionalità. Gli elementi archiviati in un modulo condiviso verranno riutilizzati e faranno riferimento ai componenti dichiarati in altri moduli di funzionalità.
- **features**: Dividiamo i requisiti dell'applicazione e suddividiamo l'applicazione in funzionalità, chiamate architetture basate su funzionalità. Dovremmo creare un sottomodulo separato per ogni funzionalità in src/app/features/modulo. Ciò rende il tuo codice indipendente, con un'unica responsabilità focalizzata su funzionalità specifiche.
