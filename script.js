ALGORITHM sentence
var
   sent:="string";
   cc, cv, cw:=integer;
Begin 
   Write("Give a sentence ends by a comma");
   Read (Sentence);
   While(sentence<>".")do
   if(sentence[cc]="")then
   cw++;
   endif
   if(sentence[cc]=["a","e","i","u","y"]) then 
   cv++;
   endif
   cc++;
   endWhile
   Write(cc,cw,cv);
End



