for filnavn in stat/*.data
do  
  cat $filnavn | 
    sort | 
    uniq -c | 
    sort -n | 
    tail -n 100 > $filnavn.lst 
done
