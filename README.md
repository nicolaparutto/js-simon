Simon Says
===
## Descrizione:
- Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 10 secondi.
- Dopo i 10 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
- Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
- **NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.

#### Bonus:
- Inseriamo la validazione: se l'utente mette due numeri uguali o inserisce cose diverse da numeri lo blocchiamo in qualche modo.
- Se l’utente ha inserito qualcosa di non valido, segnaliamolo visivamente nel form.
- I numeri random generati devono essere univoci.

<hr>

### Logica:
1. Devo generare 5 numeri casuali e stamparli in pagina, allo stesso tempo appena generati i numeri deve partire un timer di 10 secondi, anch'esso visualizzato in pagina.
2. Dopo i 10 secondi faccio sparire il contenitore dei 5 numeri, e faccio apparire un contenitore con dentro gli input.
3. In questi input vanno inseriti a memoria i numeri randomici apparsi prima, al click di un bottone, devo attivare una funzione che mi controlli se i numeri inseriti, sono inclusi nei numeri generati randomicamente. Quindi devo avere un sistema che mi salvi i numeri random, cosi da poter confrontarli in seguito.
