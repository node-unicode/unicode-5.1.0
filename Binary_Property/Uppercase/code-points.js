module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,19,45,88,203,149,237,72,8,75,232,46,76,241,143,229,157,201,63,141,145,80,47,76,117,27,11,35,149,13,92,255,171,252,85,253,170,127,53,191,218,95,127,191,182,95,191,95,251,175,227,215,249,235,250,117,255,122,126,189,191,249,126,99,191,121,191,241,223,196,111,242,55,245,155,254,205,252,102,127,251,253,108,31,14,199,17,56,18,71,225,104,28,131,99,127,239,251,112,24,142,135,195,113,4,142,196,81,56,26,199,224,192,117,134,235,12,215,25,174,51,92,103,184,206,112,141,225,26,195,53,134,107,30,174,121,184,230,225,154,132,47,113,190,112,174,240,127,225,122,240,122,96,245,192,233,129,209,3,159,7,54,15,92,30,152,60,240,120,96,241,192,225,129,193,67,254,15,249,63,228,254,144,247,67,206,142,124,29,185,58,242,116,228,232,200,207,145,155,35,39,183,196,209,56,246,231,200,195,31,206,61,156,123,56,231,184,198,129,115,224,28,56,7,46,112,46,112,46,112,46,112,46,112,46,113,46,113,46,113,14,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,91,226,216,16,199,118,56,182,193,193,193,193,193,193,193,23,231,176,7,14,30,142,61,112,242,128,246,1,46,1,237,3,186,7,248,4,248,4,52,15,112,10,232,28,224,20,224,20,208,57,160,113,64,223,128,182,1,94,1,94,241,112,14,188,194,17,195,113,14,220,194,113,222,17,195,17,31,252,2,220,2,124,34,113,30,92,162,112,109,225,90,60,102,129,135,44,240,136,5,30,176,192,227,21,120,184,2,123,17,216,139,192,94,4,246,34,192,35,192,35,192,35,176,23,1,14,129,231,39,145,123,98,31,18,185,39,114,79,228,158,200,59,177,23,137,220,19,207,71,34,239,68,222,137,188,19,121,231,195,185,135,115,200,59,145,119,98,63,18,57,39,246,35,177,31,137,124,19,251,145,200,57,177,31,137,253,72,236,71,34,255,196,126,36,246,35,193,33,177,31,137,253,72,236,65,34,247,68,238,137,125,72,236,65,98,15,18,249,39,246,33,193,33,193,33,193,33,193,33,193,97,248,198,240,125,193,185,69,254,139,220,23,207,251,126,252,127,126,139,252,23,207,249,66,251,5,135,133,254,11,30,139,231,106,141,126,188,86,224,179,120,190,22,156,22,123,177,224,181,216,143,5,183,197,179,182,224,183,15,215,97,95,22,28,23,123,179,224,185,216,155,5,215,197,254,44,248,46,246,104,161,249,66,243,69,222,139,220,22,249,46,115,67,190,139,124,23,154,47,52,95,60,255,203,119,246,131,240,48,143,38,104,240,62,127,198,127,145,41,76,211,240,58,36,8,67,7,82,132,225,197,143,151,60,34,30,175,123,119,221,194,56,131,58,17,78,132,19,225,68,56,17,78,132,19,225,68,56,17,65,68,16,17,68,4,17,65,68,16,17,68,4,17,65,68,16,145,68,36,17,73,68,18,145,68,36,17,73,68,18,145,68,36,17,69,68,17,81,68,20,17,69,68,17,81,68,20,17,69,68,17,209,68,224,145,48,195,30,193,60,154,160,41,26,92,103,164,106,100,105,36,104,228,102,164,101,100,100,36,99,228,97,164,96,204,222,152,184,49,103,171,51,244,242,230,198,251,26,111,105,77,71,211,209,116,52,29,67,199,208,49,116,12,29,67,7,203,242,213,229,43,202,87,145,175,28,179,22,27,11,177,177,10,27,75,176,177,254,26,139,175,177,242,26,203,174,177,238,26,11,175,177,234,26,75,46,140,211,36,13,29,220,213,71,150,143,44,31,89,62,178,124,100,249,200,242,145,229,35,203,71,150,143,44,31,89,62,110,10,235,183,177,128,27,43,184,177,132,27,107,184,177,136,27,171,184,177,140,27,235,184,177,144,27,43,185,177,148,27,107,185,177,152,27,171,185,177,156,27,235,185,177,160,27,43,186,177,164,27,107,186,177,168,27,171,186,177,172,27,235,186,177,176,27,43,187,177,180,195,208,65,230,78,90,44,229,48,70,67,7,31,86,150,117,152,164,33,150,15,43,75,60,12,17,36,237,124,88,89,238,97,136,32,125,231,195,202,210,15,67,4,133,112,62,172,108,3,48,68,80,18,231,195,202,150,0,67,4,197,113,62,172,108,15,48,68,80,38,231,195,202,86,1,67,4,5,115,62,172,108,27,65,77,97,154,134,213,28,176,160,186,48,70,195,202,206,210,76,157,97,88,224,15,198,50,77,197,97,136,104,34,88,178,169,61,12,17,77,4,203,55,119,1,134,8,86,242,215,68,176,158,191,33,130,85,253,13,17,172,237,111,174,137,16,49,68,176,206,191,33,130,213,254,45,17,172,249,15,205,171,11,81,96,30,77,208,20,13,166,144,90,58,150,142,165,99,233,192,174,118,99,87,97,30,77,208,112,112,249,232,48,58,140,14,163,195,232,48,58,30,29,143,142,71,199,163,227,209,225,116,56,29,78,135,211,225,116,4,29,65,71,208,17,116,4,29,73,71,210,145,116,36,29,73,71,209,81,116,20,29,69,71,209,193,81,171,57,105,53,7,173,190,57,139,99,86,147,121,147,121,147,121,147,121,147,121,147,121,147,121,147,121,147,121,147,249,144,249,144,249,144,249,144,249,144,249,144,249,144,249,144,249,144,249,144,249,144,249,144,249,144,249,144,249,144,249,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,229,144,37,59,99,179,53,194,208,65,150,67,150,67,150,67,150,67,150,67,150,67,150,75,150,108,162,205,46,218,108,161,205,30,218,108,162,48,116,144,37,251,103,179,121,54,59,103,179,109,54,123,102,179,97,54,187,101,47,247,151,189,178,217,40,161,230,153,164,225,37,120,57,97,120,29,94,206,94,146,94,188,156,16,156,127,213,253,69,44,222,30,24,98,139,88,114,91,206,202,123,211,114,19,75,150,59,68,144,234,14,17,228,182,123,127,17,187,196,146,229,46,177,71,117,57,107,131,27,12,255,2,65,24,163,121,52,152,190,217,92,135,125,117,216,82,135,221,116,216,37,135,93,114,216,37,135,93,114,216,37,135,93,114,216,37,135,93,114,216,173,96,140,230,209,224,58,118,38,24,122,241,8,192,32,40,187,16,12,189,216,110,24,68,97,23,130,161,183,25,165,25,165,121,29,127,16,24,127,18,176,247,192,32,84,64,186,225,44,8,3,68,20,255,133,126,48,65,67,7,30,149,225,88,56,156,9,97,232,104,58,154,142,102,20,70,230,100,56,28,13,135,179,33,12,163,64,73,24,194,150,222,229,197,123,151,32,30,103,67,24,163,129,131,99,30,76,210,20,205,157,27,26,94,204,76,51,121,49,73,39,73,115,8,132,33,34,137,72,34,146,8,146,225,232,183,156,173,151,195,245,114,186,94,142,215,48,143,198,105,130,38,105,138,166,105,134,134,8,206,126,193,225,143,211,247,114,252,134,33,130,67,32,167,112,24,34,56,7,6,7,65,78,228,48,68,112,22,228,96,110,106,147,198,250,109,234,150,198,10,110,106,154,198,26,110,234,157,246,52,169,220,240,192,58,110,234,164,198,74,110,106,168,198,90,110,234,171,198,106,110,106,175,198,122,110,234,178,198,138,110,106,182,198,154,110,234,185,198,170,110,106,189,198,186,110,234,192,198,202,110,106,196,198,218,110,234,199,176,135,189,129,228,237,97,247,176,187,55,56,221,228,244,217,217,27,160,62,63,123,115,212,151,103,111,156,250,250,172,198,173,195,218,97,75,246,176,117,216,210,12,118,215,159,50,126,154,248,169,225,167,134,159,26,126,10,248,177,246,203,220,47,103,191,108,125,53,193,221,8,119,185,197,101,21,151,79,92,38,113,57,112,107,105,207,107,231,181,243,62,141,127,231,189,145,49,110,102,140,27,26,227,166,198,184,177,49,110,110,140,27,28,67,147,163,70,199,191,217,241,188,154,30,111,124,140,155,31,227,6,200,200,243,230,121,243,188,167,73,156,38,81,26,60,207,123,79,75,220,115,18,247,132,196,169,17,247,84,196,169,17,247,36,196,61,3,113,187,31,163,169,245,188,215,196,179,100,223,217,56,171,89,228,70,144,27,38,242,6,137,188,33,34,91,67,202,121,111,112,200,27,26,242,6,134,188,97,33,71,227,203,121,247,206,239,157,223,27,82,190,27,105,190,27,103,190,27,101,158,236,13,51,239,174,241,187,198,53,242,156,215,207,235,231,141,243,198,121,227,188,113,99,205,200,106,176,185,49,232,198,147,190,28,250,114,232,203,97,238,238,115,119,103,247,165,189,243,166,81,232,188,118,94,59,239,253,188,158,251,129,61,247,19,123,46,231,185,156,231,114,158,203,121,92,35,212,121,47,231,185,156,231,114,158,203,121,46,231,185,156,217,166,57,104,157,55,207,155,26,189,206,123,131,224,220,30,205,237,209,220,60,55,55,203,205,205,113,115,123,49,26,226,52,192,105,120,211,224,134,119,185,146,159,63,104,227,108,158,173,179,125,118,206,46,45,56,210,30,10,76,105,15,251,14,251,14,251,14,251,14,251,14,251,14,235,135,245,195,250,97,253,176,126,88,63,172,31,214,15,11,101,170,248,4,210,218,217,119,214,207,198,217,60,91,103,251,172,80,75,219,135,237,195,246,97,251,176,125,216,62,108,31,182,15,219,135,237,195,206,97,231,176,115,216,57,236,28,118,14,59,135,157,195,206,97,231,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,171,147,59,87,110,176,232,191,43,59,88,76,203,211,226,90,66,75,106,209,47,65,254,178,227,162,40,166,40,79,81,158,162,60,69,121,138,242,20,229,41,202,83,148,167,40,79,81,158,162,184,162,184,162,184,162,184,162,148,124,37,95,201,87,127,62,221,161,116,135,210,29,74,119,40,221,161,116,135,86,148,86,148,86,148,86,148,86,148,86,148,86,148,86,148,86,148,86,148,81,148,81,148,81,148,81,148,81,148,235,115,187,210,115,165,231,74,207,181,63,95,105,105,45,163,229,238,176,210,115,165,231,74,207,149,158,43,61,87,122,174,244,92,233,185,210,115,165,231,74,207,149,158,43,61,87,122,174,43,138,43,138,43,138,43,138,244,92,9,185,18,114,37,221,74,172,149,88,219,127,62,221,86,242,172,228,89,233,178,210,101,165,203,254,233,50,10,61,130,235,187,195,114,6,120,223,119,223,15,190,251,86,196,69,159,30,76,190,247,105,49,45,79,139,107,9,45,169,69,81,158,162,60,69,121,138,226,138,226,138,226,138,226,138,226,138,226,138,226,138,226,138,226,138,226,138,18,138,18,138,82,242,149,124,173,147,173,208,173,208,173,208,173,96,45,64,11,48,10,54,194,141,112,35,220,8,55,202,101,4,31,193,255,52,91,193,87,240,251,134,241,153,196,50,137,101,82,201,164,146,73,37,147,74,38,121,76,242,152,228,49,201,99,146,199,164,139,73,2,147,4,38,9,76,18,220,215,41,46,186,81,8,32,9,76,18,88,255,157,212,221,91,119,151,32,38,65,76,130,152,4,49,9,98,18,196,36,136,73,16,254,120,184,69,81,164,139,73,23,147,46,38,93,76,186,216,159,46,171,40,171,40,171,40,171,40,123,81,158,84,210,23,43,44,165,229,207,55,90,238,14,79,98,61,137,165,111,90,88,92,139,162,232,89,210,87,46,44,138,34,33,159,132,212,119,47,44,138,34,33,159,132,212,151,48,44,138,18,138,18,138,18,138,18,138,34,61,159,244,212,199,174,239,73,79,125,245,250,158,244,212,231,175,239,73,79,125,7,251,158,244,212,7,177,239,73,79,125,25,251,158,244,212,39,178,239,73,79,125,43,251,158,244,212,71,179,239,73,79,125,61,251,222,159,158,250,128,120,147,250,251,92,95,18,111,86,199,34,61,93,122,186,244,116,233,233,210,211,165,167,75,79,151,158,46,61,93,122,186,244,116,233,233,210,211,165,167,75,79,151,158,46,61,93,122,186,244,116,233,233,210,211,165,231,125,102,227,162,40,169,40,169,40,210,211,165,167,75,79,159,63,159,238,32,61,93,122,186,244,116,233,233,210,211,165,167,75,79,151,158,46,61,93,122,186,244,116,233,233,210,211,165,167,75,207,144,158,33,61,227,239,19,237,231,90,66,203,69,9,233,25,210,51,164,103,248,159,175,180,180,150,209,162,59,72,207,144,158,33,61,67,122,134,244,12,233,25,210,51,164,103,72,207,144,158,33,61,67,122,134,244,12,233,121,63,61,184,40,74,42,74,42,138,52,11,105,22,210,44,164,89,72,179,144,102,33,205,66,154,133,52,11,105,22,210,44,164,89,74,179,148,102,41,205,82,154,165,52,75,105,150,250,208,157,95,107,25,45,138,98,138,98,138,98,138,34,9,82,18,164,36,72,73,144,146,32,37,65,74,130,148,4,41,9,82,18,164,36,72,73,144,169,40,169,40,165,40,165,40,165,40,165,40,165,40,165,40,165,40,165,40,106,82,169,38,149,247,133,252,171,191,175,249,98,91,98,91,98,91,98,91,98,91,98,91,98,91,98,91,230,90,20,197,20,69,61,188,212,195,75,61,188,212,195,75,109,169,212,150,74,61,188,212,157,74,117,183,84,119,75,117,183,84,119,75,117,162,196,182,196,182,196,182,196,182,196,182,196,182,234,15,160,219,254,177,85,103,46,181,165,82,91,42,181,165,82,91,42,149,209,82,25,45,149,209,82,25,45,189,246,165,215,190,244,218,151,94,251,210,107,95,122,237,75,175,125,139,109,139,109,139,109,139,109,139,109,139,109,191,63,64,107,25,45,119,219,86,85,108,85,197,214,91,220,122,139,91,111,113,235,45,110,189,197,173,183,184,245,22,183,222,226,214,91,220,122,139,91,111,113,235,45,110,189,197,221,243,223,255,42,235,72,251,228,31,0,0])))