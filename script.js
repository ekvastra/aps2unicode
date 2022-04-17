function convert_to_unicode() {

    var array_one = new Array("ef", "òeâ", "eR", "Dee@", "X", "x", "Z", "z", "eA", "ea", "Ë", "e|", "eE", "eR", "eé",
        "›eâ", "kesâ", "ke=â", "kegâ", "Ìkeâ", "ÌHeâ", "Ìpe", "ÌKe", "ÌÙe", "Ìie", "Heâ", "heâ", "Heä", "heä",
        "Ìkeä", "ÌK",
        "Ô", "~", "$e+",
        "Í", "Î",
        "Œe", "Œ", "œe", "œ", "®", "™", "¤",

        "ß", "$", "«", "›", "¿", "Ö", "Ø", "Ü", "ã", "ø", "õ",
        "#", "%", "V", "„", "…", "‰", "‹", "“", "”", "¢", "£", "¥", "§", "©", "ª",
        "°", "º", "»", "À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "È", "É", "Ñ", "Õ",

        "æ", "ñ", "ò", "ó", "ô", "ö", "ù", "ú", "û", "ÿ",

        "Ì[", "Ì{",

        ">", "Ÿ", "^", "Ç", "ü", "ê",

        "De", "F&", "F", "G", "è", "S", "T",

        "keä", "keâ", "¡", "K", "i", "I", "*",
        "Û", "Ú", "p", "P", "_",

        "š", "\"", "[", "{", "C",
        "l", "L", "o", "O", "v",
        "h", "H", "y", "Y", "c", // "heä","heâ",

        "Ù", "j", "u", "}", "à", "k", "J", "U", "M", "ç", "ë", "<", "m", "å", "n",

        "er", "e", "¦", "¶", "ƒ", "†", "‡", "á", "ì", "í", "î",
        "g", "Ï", "t", "Ò", "=", "ï", "s", "w", "b", "B", "Š", "d", "]", "Ì", "@", "Ó", "Ê",
        "Q", "W",

        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9",

        "्ा", "्ो", "्ौ", "अो", "अा", "आै", "आे", "ाो", "ाॅ", "ॅा", "ाे", "एे",
        "ंु", "ेे", "अै", "ाे", "अे", "ंा", "अॅ", "ाै", "ैा", "ंृ",
        "ँा", "ँू", "ेा", "ंे", "ाें", "ॅं", "ंॅ", " ः", "ंू"); // Remove typing mistakes in the original file

    var array_two = new Array("µ", "क्त", "ीं", "ऑ", "ें&", "े&", "ैं&", "ै&", "ीं&", "ी&", "ं&", "&ि", "िं", "िं", "िं",
        "क्र", "के", "कृ", "कु", "क़", "फ़", "ज़", "ख़", "य़", "ग़", "फ", "फ", "फ्", "फ्",
        "क़्", "ख़्",
        "ॐ", "।", "ऋ",
        "्रू", "्रु",
        "स्त्र", "स्त्र्", "स्र", "स्र्", "रु", "रू", "रू",

        "श्र्", "त्र्", "ग्र्", "व्र्", "ज्र्", "ह्न", "प्र्", "ह्र", "झ्र्", "प्र्", "द्र",
        "क्ष्", "ज्ञ्", "न्न्", "ष्ट", "ष्ठ", "ष्ठ", "ङ्घ", "ङ्ख", "ङ्ग", "ह्य्", "ह्व", "ह्ल", "श्च्", "द्म्", "ट्ठ",
        "ष्ट", "ड्ढ", "ङ्क", "ञ्ज्", "ङ्ग", "दृ", "ञ्च्", "व्न्", "द्य्", "द्भ", "ङ्ख", "द्व", "ढ्ढ", "श्व्",
        "द्ध", "ड्ड", "त्त्", "ट्ट", "द्ब", "द्द", "हृ", "ठ्ठ", "द्ग", "ह्म्",

        "ड़", "ढ़",
        "्न", "्य्", "्र", "्र", "्र", "्ल",

        "अ", "ई", "इ", "उ", "ऌ", "ए", "ऊ",

        "क्", "क", "ख्", "ख्", "ग्", "घ्", "ङ",
        "च्", "छ", "ज्", "झ्", "ञ्",

        "ट", "ठ", "ड", "ढ", "ण्",
        "त्", "थ्", "द", "ध्", "न्",
        "प्", "प्", "ब्", "भ्", "म्", // "फ्","फ",

        "य्", "र", "ल्", "ल", "ळ्", "व्", "व्", "ळ", "श्", "श्", "श्", "ष्", "स्", "ह्", "ह",

        "ी", "ा", "ा", "ा", "ा", "ा", "ा", "ा", "ा", "ा", "ा",
        "ु", "ु", "ू", "ू", "ृ", "ॢ", "े", "ै", "ं", "ँ", "ः", "्", "़", "़", "ॅ", "ऽ", "॰",
        "ैं", "ें",

        "०", "१", "२", "३", "४", "५", "६", "७", "८", "९",

        "", "े", "ै", "ओ", "आ", "औ", "ओ", "ो", "ॉ", "ॉ", "ो", "ऐ",
        "ुं", "े", "अ‍ै", "ो", "अ‍े", "ां", "अ‍ॅ", "ौ", "ौ", "ृं",
        "ाँ", "ूँ", "ो", "ें", "ों", "ँ", "ँ", " :", "ूं"); // Remove typing mistakes in the original file 

    var array_one_length = array_one.length;

    var modified_substring = document.getElementById("legacy_text").value;

    Replace_Symbols();

    processed_text = modified_substring;

    document.getElementById("unicode_text").value = processed_text;

    // --------------------------------------------------

    function Replace_Symbols()

    {

        //substitute array_two elements in place of corresponding array_one elements

        if (modified_substring != "") // if stringto be converted is non-blank then no need of any processing.
        {
            for (input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++)

            {
                idx = 0; // index of the symbol being searched for replacement

                while (idx != -1) //while-00
                {

                    modified_substring = modified_substring.replace(array_one[input_symbol_idx], array_two[input_symbol_idx]);
                    idx = modified_substring.indexOf(array_one[input_symbol_idx]);

                } // end of while-00 loop
            } // end of for loop

            //*******************************************************

            var position_of_i = modified_substring.indexOf("µ");

            while (position_of_i != -1) //while-02
            {
                var charecter_next_to_i = modified_substring.charAt(position_of_i + 1);
                var charecter_to_be_replaced = "µ" + charecter_next_to_i;
                modified_substring = modified_substring.replace(charecter_to_be_replaced, charecter_next_to_i + "ि");
                position_of_i = modified_substring.search(/µ/, position_of_i + 1); // search for i ahead of the current position.

            } // end of while-02 loop

            //**********************************************************************************
            // End of Code for Replacing four Special glyphs
            //**********************************************************************************

            // following loop to eliminate 'chhotee ee kee maatraa' on half-letters as a result of above transformation.

            var position_of_wrong_ee = modified_substring.indexOf("ि्");

            while (position_of_wrong_ee != -1) //while-03

            {
                var consonent_next_to_wrong_ee = modified_substring.charAt(position_of_wrong_ee + 2);
                var charecter_to_be_replaced = "ि्" + consonent_next_to_wrong_ee;
                modified_substring = modified_substring.replace(charecter_to_be_replaced, "्" + consonent_next_to_wrong_ee + "ि");
                position_of_wrong_ee = modified_substring.search(/ि्/, position_of_wrong_ee + 2); // search for 'wrong ee' ahead of the current position. 

            } // end of while-03 loop

            // following loop to eliminate 'chhotee ee kee maatraa' on half-letters as a result of above transformation.

            position_of_wrong_ee = modified_substring.indexOf("िं्");

            while (position_of_wrong_ee != -1) //while-03

            {
                var consonent_next_to_wrong_ee = modified_substring.charAt(position_of_wrong_ee + 3);
                var charecter_to_be_replaced = "िं्" + consonent_next_to_wrong_ee;
                modified_substring = modified_substring.replace(charecter_to_be_replaced, "्" + consonent_next_to_wrong_ee + "िं");
                position_of_wrong_ee = modified_substring.search(/िं्/, position_of_wrong_ee + 3); // search for 'wrong ee' ahead of the current position. 

            } // end of while-03 loop

            // Eliminating reph "Ô" and putting 'half - r' at proper position for this.
            set_of_matras = "ा ि ी ु ू ृ े ै ो ौ ं : ँ ॅ";
            var position_of_R = modified_substring.indexOf("&");

            while (position_of_R > 0) // while-04
            {
                probable_position_of_half_r = position_of_R - 1;
                var charecter_at_probable_position_of_half_r = modified_substring.charAt(probable_position_of_half_r);

                // trying to find non-maatra position left to current O (ie, half -r).

                while (set_of_matras.match(charecter_at_probable_position_of_half_r) != null) // while-05

                {
                    probable_position_of_half_r = probable_position_of_half_r - 1;
                    charecter_at_probable_position_of_half_r = modified_substring.charAt(probable_position_of_half_r);

                } // end of while-05

                charecter_to_be_replaced = modified_substring.substr(probable_position_of_half_r, (position_of_R - probable_position_of_half_r));
                new_replacement_string = "र्" + charecter_to_be_replaced;
                charecter_to_be_replaced = charecter_to_be_replaced + "&";
                modified_substring = modified_substring.replace(charecter_to_be_replaced, new_replacement_string);
                position_of_R = modified_substring.indexOf("&");

            } // end of while-04

        } // end of IF  statement  meant to  supress processing of  blank  string.

    } // end of the function  Replace_Symbols

} // end of convert_to_unicode function

//*******************************************************************************
function convert_to_Prakash() {
    var array_one = new Array("“", "”", "\"", "् ",
        "क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़", // two-byte varnas                      //07
        "ऑ", "क्त", "क्र", "के", "कृ", "कु", "क़", "फ़", "ज़", "ख़", "य़", "ग़", "फ", "फ", "फ्", "फ्", //16
        "क़्", "ख़्", //02
        "ॐ", "।", "ऋ", //03
        "स्त्र", "स्त्र्", "स्र", "स्र्", //07

        "क्षि", "त्रि", "ज्ञि", "श्रि", //04
        "श्र", "श्र्", "त्र", "त्र्", "ग्र्", "व्र्", "ज्र्", "ह्न", "प्र्", "ह्र", "झ्र्", "प्र्", "द्र", //13
        "रु", "रू", "रू",

        "क्ष", "क्ष्", "ज्ञ", "ज्ञ्", "न्न्", "ष्ठ", "ष्ठ", "ङ्घ", "ङ्ख", "ङ्ग", "ह्य्", "ह्व", "ह्ल", "श्च्", "द्म्", "ट्ठ", //17
        "ड्ढ", "ङ्क", "ञ्ज्", "ङ्ग", "दृ", "ञ्च्", "व्न्", "द्य्", "द्भ", "ङ्ख", "द्व", "ढ्ढ", "श्व्", //15 "ष्ट्र","ष्ट",
        "द्ध", "ड्ड", "त्त्", "ट्ट", "द्ब", "द्द", "हृ", "ठ्ठ", "द्ग", "ह्म्", //10

        "ड़", "ढ़", //02

        "ट्र", "ठ्र", "ड्र", "ढ्र", "्रू", "्रु", "्र", //07
        "्न", "्य्", "्ल", //03

        "क्", "क", "ख्", "ख", "ग्", "ग", "घ्", "घ", "ङ", //09 
        "च्", "च", "छ", "ज़्", "ज़", "ज्", "ज", "झ्", "झ", "ञ्", "ञ", //11
        "ट", "ठ", "ड", "ढ", "ण्", "ण", //06
        "त्", "त", "थ्", "थ", "द", "ध्", "ध", "न्", "न", //09
        "प्", "प", "फ्", "फ", "ब्", "ब", "भ्", "भ", "म्", "म", //10

        "शृ", "य्", "य", "र", "ल्", "ल", "ळ्", "ळ", "व्", "व", "श्", "श", "ष्", "ष", "स्", "स", "ह्", "ह", //18 // "श्","श्",

        "औ", "ओ", "ऑ", "आ", "अ", "ई", "इ", "उ", "ऊ", "ऋ", "ऌ", "ऐ", "ए", //13

        "ौ", "ो", "ॉ", "ा", "ी", "ु", "ू", "ृ", "ॢ", "े", "ै", "ँ", "ं", "ः", "्", "ॅ", "ऽ", "़", //18

        "०", "१", "२", "३", "४", "५", "६", "७", "८", "९"); //10

    var array_two = new Array("‘", "’", "'", "d ",
        "क़", "ख़", "ग़", "ज़", "ड़", "ढ़", "फ़", //one-byte varnas
        "Dee@", "òeâ", "›eâ", "kesâ", "ke=â", "kegâ", "Ìkeâ", "ÌHeâ", "Ìpe", "ÌKe", "ÌÙe", "Ìie", "Heâ", "heâ", "Heä", "heä",
        "Ìkeä", "ÌK",
        "Ô", "~", "$e+",
        "Œe", "Œ", "œe", "œ",

        "ef#e", "ef$e", "ef%e", "efße",
        "ße", "ß", "$e", "$", "«", "›", "¿", "Ö", "Ø", "Ü", "ã", "ø", "õ",
        "®", "™", "¤",

        "#e", "#", "%e", "%", "V", "…", "‰", "‹", "“", "”", "¢", "£", "¥", "§", "©", "ª",
        "º", "»", "À", "Á", "Â", "Ã", "Ä", "Å", "Æ", "È", "É", "Ñ", "Õ", //"°^","°",
        "æ", "ñ", "ò", "ó", "ô", "ö", "ù", "ú", "û", "ÿ",

        "Ì[", "Ì{",

        "š^", "\"^", "[^", "{^", "Í", "Î", "Ç",
        ">", "Ÿ", "ê",

        "keä", "keâ", "K", "Ke", "i", "ie", "I", "Ie", "*",
        "Û", "Ûe", "Ú", "[p", "[pe", "p", "pe", "P", "Pe", "_", "_",
        "š", "\"", "[", "{", "C", "Ce",
        "l", "le", "L", "Le", "o", "O", "Oe", "v", "ve",
        "h", "he", "heä", "heâ", "y", "ye", "Y", "Ye", "c", "ce",

        "ëe=", "Ù", "Ùe", "j", "u", "}", "à", "U", "k", "ke", "M", "Me", "<", "<e", "m", "me", "å", "n", // "ç","ë",

        "Deew", "Dees", "Dee@", "Dee", "De", "F&", "F", "G", "T", "$e+", "è", "Ss", "S",

        "ew", "es", "e@", "e", "er", "g", "t", "=", "ï", "s", "w", "B", "b", "Š", "d", "@", "Ó", "Ê",

        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9");

    //************************************************************
    //Put "Enter chunk size:" line before "<textarea name= ..." if required to be used.    
    //************************************************************
    //Enter chunk size: <input type="text" name="chunksize" value="6000" size="7" maxsize="7" style="text-align:right"><br/><br/>
    //************************************************************
    // The following two characters are to be replaced through proper checking of locations:
    //******************************************************
    //   ikAr and reph
    //******************************************************
    //   "ef","eq",
    //   "ि","ि",
    //
    //   "&","N",
    // "reph","reph (Marathi)",
    //**************************************************************************************

    var array_one_length = array_one.length;

    var modified_substring = document.getElementById("unicode_text").value;

    Replace_Symbols();

    processed_text = modified_substring;

    document.getElementById("legacy_text").value = processed_text;

    //**************************************************

    function Replace_Symbols() {

        // if string to be converted is non-blank then no need of any processing.
        if (modified_substring != "") {

            modified_substring = modified_substring.replace(/त्र्य/g, "$य");

            // first replace the two-byte nukta_varNa with corresponding one-byte nukta varNas.

            var position_of_f = modified_substring.indexOf("ि");
            while (position_of_f != -1) //while-02
            {
                var character_left_to_f = modified_substring.charAt(position_of_f - 1);
                modified_substring = modified_substring.replace(character_left_to_f + "ि", "µ" + character_left_to_f);

                position_of_f = position_of_f - 1;

                while ((modified_substring.charAt(position_of_f - 1) == "्") & (position_of_f != 0)) {
                    var string_to_be_replaced = modified_substring.charAt(position_of_f - 2) + "्";
                    modified_substring = modified_substring.replace(string_to_be_replaced + "µ", "µ" + string_to_be_replaced);

                    position_of_f = position_of_f - 2;
                }
                position_of_f = modified_substring.search(/ि/, position_of_f + 1); // search for f ahead of the current position.

            } // end of while-02 loop
            //************************************************************     
            //     modified_substring = modified_substring.replace( /fर्/g , "£"  )  ;
            //************************************************************     
            // Eliminating "र्" and putting  Z  at proper position for this.

            set_of_matras = "ािीुूृेैोौं:ँॅ";

            modified_substring += '  '; // add two spaces after the string to avoid UNDEFINED char in the following code.

            var position_of_half_R = modified_substring.indexOf("र्");

            //************************************************************************************
            while (position_of_half_R > 0) // while-03
            {
                // "र्"  is two bytes long
                var probable_position_of_Z = position_of_half_R + 2;
                var character_at_probable_position_of_Z = modified_substring.charAt(probable_position_of_Z);

                // trying to find non-maatra position right to probable_position_of_Z .

                while (set_of_matras.match(character_at_probable_position_of_Z) != null) // while-04 
                {
                    probable_position_of_Z = probable_position_of_Z + 1;
                    character_at_probable_position_of_Z = modified_substring.charAt(probable_position_of_Z);

                } // end of while-04
                //************************************************************
                // check if the next character is a halant
                //************************************************************
                var right_to_position_of_Z = probable_position_of_Z + 1;

                if (right_to_position_of_Z > 0) // if-03
                {
                    var character_right_to_position_of_Z = modified_substring.charAt(right_to_position_of_Z);

                    while ("्".match(character_right_to_position_of_Z) != null) // while-05
                    {
                        //       halant found, move to next character
                        probable_position_of_Z = right_to_position_of_Z + 1;
                        character_at_probable_position_of_Z = modified_substring.charAt(probable_position_of_Z);

                        right_to_position_of_Z = probable_position_of_Z + 1;
                        character_right_to_position_of_Z = modified_substring.charAt(right_to_position_of_Z);

                    } // end of while-05
                } // end of if-03
                //************************************************************

                string_to_be_replaced = modified_substring.substr(position_of_half_R + 2, (probable_position_of_Z - position_of_half_R) - 1);
                //************************************************************
                //     check if character_right_to_position_of_Z is a space
                //       if (space.match(character_right_to_position_of_Z) != null) 
                //       {
                //          string_to_be_replaced = string_to_be_replaced.substr(0,string_to_be_replaced.length - 1)
                //       }
                modified_substring = modified_substring.replace("र्" + string_to_be_replaced, string_to_be_replaced + "&");

                position_of_half_R = modified_substring.indexOf("र्");

            } // end of while-03
            //***********************************************************

            modified_substring = modified_substring.substr(0, modified_substring.length - 2);

            //substitute array_two elements in place of corresponding array_one elements

            for (input_symbol_idx = 0; input_symbol_idx < array_one_length; input_symbol_idx++) {
                idx = 0; // index of the symbol being searched for replacement

                while (idx != -1) //whie-00
                {
                    modified_substring = modified_substring.replace(array_one[input_symbol_idx], array_two[input_symbol_idx]);
                    idx = modified_substring.indexOf(array_one[input_symbol_idx]);
                } // end of while-00 loop
            } // end of for loop

        } // end of IF  statement  meant to  supress processing of  blank  string.

        modified_substring = modified_substring.replace(/µ/g, "ef");
        modified_substring = modified_substring.replace(/d &/g, "d&");
        modified_substring = modified_substring.replace(/&Ùe/g, "NÙe");
        modified_substring = modified_substring.replace(/&er/g, "er&");
        modified_substring = modified_substring.replace(/n&/g, "Nn");

    } // end of the function  Replace_Symbols( )

} // end of convert_to_Prakash function