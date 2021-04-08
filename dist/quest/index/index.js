const paint = ['white', 'green', 'FireBrick', 'OliveDrab', 'DarkTurquoise', 'Khaki', 'Sienna', 'Violet', 'red', 'Yellow']
// const categories = [{
// 	name: "0"
// }, {
// 	name: "编成",
// 	symbol: `path://M0.0 200 L 0.0 400 200 400 L 400 400 400 200 L 400 0.0 200 0.0 L 0.0 0.0 0.0 200 M211 63 C 215 67,217 74,218 83 C 218 86,218 90,219 92 C 219 93,219 96,219 98 C 219 105,220 110,222 112 L 223 114 225 112 C 228 109,231 109,235 113 C 237 115,239 116,243 117 C 244 117,248 118,250 119 C 255 121,259 122,263 122 C 265 122,266 123,267 124 C 272 127,291 129,300 127 C 304 126,323 126,324 126 C 327 128,327 133,323 136 C 322 138,320 139,320 141 C 319 142,318 143,318 144 C 317 145,316 148,315 152 C 315 155,314 158,313 158 C 313 158,312 159,311 161 C 310 162,308 163,307 164 C 306 165,305 166,305 166 C 303 169,269 169,130 169 L 87 169 85 168 C 84 167,83 166,83 165 C 81 162,80 158,80 158 C 80 156,77 148,76 144 C 75 142,73 139,73 137 L 71 134 71 123 C 71 113,71 113,72 111 C 77 104,80 108,79 119 C 79 129,80 131,83 128 C 84 127,86 126,86 125 C 87 124,89 123,90 122 L 91 121 97 121 C 103 121,104 121,106 123 C 110 126,113 126,116 124 C 118 121,119 121,127 121 C 132 121,135 121,137 121 C 138 120,140 120,142 120 C 146 120,149 118,151 113 C 153 109,154 108,158 108 C 161 108,162 107,162 100 C 162 96,163 94,166 94 C 171 92,170 86,164 80 C 160 75,161 70,167 69 C 170 68,172 67,174 66 C 177 63,178 65,178 73 C 179 81,180 83,184 81 C 188 79,190 81,192 92 C 193 99,194 100,195 102 C 197 104,197 103,199 100 C 202 95,202 94,202 79 C 201 62,201 63,206 61 C 208 60,208 60,211 63`
// }, {
// 	name: "出击",
// 	symbol: `path://M6.0 0.6 C 6.0 0.9,4.9 2.2,3.6 3.6 C 2.2 4.9,0.9 6.0,0.6 6.0 C 0.0 6.0,0.0 27,0.0 200 C 0.0 354,0.1 394,0.5 394 C 1.1 394,6.0 398,6.0 399 C 6.0 399,55 400,200 400 C 342 400,394 399,394 399 C 394 399,399 394,399 394 C 399 394,400 318,400 200 C 400 55,399 6.0,399 6.0 C 398 6.0,394 1.1,394 0.5 C 394 0.1,354 0.0,200 0.0 C 27 0.0,6.0 0.0,6.0 0.6 M284 62 C 288 67,290 73,287 76 C 284 81,286 82,292 81 C 295 80,297 81,295 83 C 291 86,291 86,291 87 C 291 88,292 88,294 89 C 301 91,303 92,302 94 C 301 97,289 98,277 96 C 268 95,268 95,267 99 C 266 100,266 101,265 102 C 264 102,263 104,261 105 C 260 106,258 107,257 108 C 255 109,240 119,236 122 C 233 124,228 130,227 132 L 226 134 227 136 C 229 141,239 148,254 155 C 256 156,261 158,264 160 C 272 163,273 164,283 169 C 292 173,314 184,319 187 C 324 189,325 190,330 193 C 331 194,332 194,333 195 C 334 196,334 197,333 199 C 332 199,331 199,325 199 C 312 200,304 198,273 192 C 267 190,237 183,232 181 C 212 176,214 176,209 182 C 202 192,200 193,195 188 C 191 184,191 182,194 178 C 198 174,198 172,193 171 C 187 169,182 167,178 166 C 175 166,172 165,171 164 C 167 163,166 163,164 165 C 162 167,161 167,158 166 L 156 166 153 167 C 148 171,144 172,140 171 C 136 171,135 172,135 174 C 136 179,136 179,135 180 L 134 181 133 180 C 132 179,132 176,132 173 C 131 170,131 169,128 166 C 123 161,122 158,120 152 C 119 146,116 144,113 147 C 110 148,107 148,105 144 C 102 141,103 140,106 136 C 113 130,112 129,103 122 C 91 114,89 113,86 111 C 84 109,82 108,81 107 C 75 102,68 94,68 92 C 68 88,72 88,86 92 C 95 94,98 95,108 98 C 114 99,120 101,122 102 C 123 102,126 103,128 104 C 129 104,134 106,140 108 C 145 109,151 111,153 112 C 159 115,161 114,168 108 C 178 99,183 98,187 104 C 190 109,193 107,198 98 C 201 91,204 89,208 91 C 209 91,208 91,233 89 C 243 87,243 87,242 84 C 240 80,241 80,251 80 C 259 80,259 80,262 76 C 267 70,275 62,278 61 C 280 60,282 60,284 62 M206 85 C 206 85,205 84,206 83 L 206 83 206 83 C 206 84,206 84,206 85`
// }, {
// 	name: "演习",
// 	symbol: `path://m0,202l0,202l197,0l197,0l0.5,-1.2c0.3,-0.8 1,-1.4 2,-1.9l1.5,-0.6l0,-198l0,-198l-0.8,0c-0.9,0 -3.1,-2 -3.1,-2.9c0,-0.5 -17,-0.6 -198,-0.6l-198,0l0,202m186,-170c1.2,0.4 1.8,2.3 1.8,6.2c0,12 9,20 23,21c4.3,0.2 6.6,0.5 8.4,1.1c1.3,0.4 4.4,1.2 7,1.8c2.6,0.5 5.6,1.4 7,2.1c4.6,2.3 9.5,5.3 11,6.8c4,3.7 8,6.2 11,7.5c6,1.9 10,5 13,9.5c0.9,1.4 2.7,4.2 4,6.1c3.2,4.9 4.7,8.8 5.4,14c0.3,2.9 3,11 4.8,14c1.4,2.9 5,6 8.5,7.4c4.7,1.9 5.5,4.4 1.8,5.9c-0.8,0.3 -2.2,0.9 -3.1,1.3c-3.4,1.4 -6,5.3 -7.9,11c-0.9,3.3 -3.2,9.2 -5.9,15c-1.7,3.6 -10,13 -16,17c-1.3,0.9 -3.6,2.6 -4.9,3.7c-5.5,4.3 -11,6.7 -19,7.8c-15,2 -14,1.7 -19,4.4c-5.5,2.9 -6,2.9 -11,-0c-2.1,-1.1 -4.5,-2.2 -5.6,-2.4c-6.8,-1.1 -11,-2.2 -18,-4.5c-9.4,-2.8 -11,-2.5 -14,2.6c-3.4,5.7 -12,5.5 -27,-0.7c-3.7,-1.5 -6.7,-2.4 -8.9,-2.8c-11,-1.9 -19,-9.5 -24,-23c-1.6,-4.5 -2.9,-6.5 -5.4,-8.8c-5.2,-4.5 -5.1,-10 0.3,-17c8.2,-11 9.1,-15 3.6,-18c-3.6,-1.8 -3.4,-3.3 0.6,-5.7c4.3,-2.5 7.9,-5.5 11,-9.8c2,-2.3 5.6,-6.3 7.8,-8.8c2.2,-2.5 4.8,-5.8 5.7,-7.4c1.8,-3.2 9.8,-11 15,-16c4,-3.4 12,-8 19,-10c5.9,-1.9 6.4,-2.6 4.9,-7.6c-1.3,-4.2 -1.1,-6.3 0.9,-10c1.6,-3.4 7.1,-10 8.9,-11c2.6,-1.6 3.3,-1.8 4.5,-1.3z`
// }, {
// 	name: "远征",
// 	symbol: `path://m5.6,260c-3.6,-3.6 -3.6,-6.0 -3.6,-128c0,-122 0,-124 3.6,-128c3.6,-3.6 6.0,-3.6 128,-3.6c122,0 124,0 128,3.6c3.6,3.6 3.6,6.0 3.6,128c0,122 0,124 -3.6,128c-3.6,3.6 -6.0,3.6 -128,3.6c-122,0 -124,0 -128,-3.6zm124,-237c-2.1,0 -4.2,0.1 -6.3,0.3l-0.1,-0.7c-0.0,-0.4 -0.2,-0.8 -0.4,-1.2c1.6,-1.3 2.6,-3.3 2.6,-5.5c0,-3.9 -3.1,-7.1 -7.1,-7.1s-7.1,3.1 -7.1,7.1c0,3.1 2.0,5.8 4.9,6.7c-0.0,0.4 -0.0,0.9 0,1.3l0.1,0.7c-22,5.9 -39,26 -39,51c0,29 23,52 52,52c29,0 52,-23 52,-52c0.0,-29 -23,-52 -52,-52l0,0.0zm0.9,12c18,0 34,13 38,30l-2.4,0.9c-0.6,-2.8 -3.2,-5.0 -6.2,-5.0c-3.5,0 -6.4,2.8 -6.4,6.4c0,0.3 0.0,0.6 0.0,0.9l-11,-0.1c-0.2,-0.4 -0.4,-0.9 -0.7,-1.4l14,-21l0.2,-0.3l-20,17c-1.4,-0.6 -3.1,-1.0 -4.8,-1.0l0.3,-0.0l-5.0,-10c2.7,-0.7 4.7,-3.2 4.7,-6.1c0,-3.5 -2.8,-6.4 -6.4,-6.4c-0.3,0 -0.6,0.0 -0.9,0.0l0.2,-2.6c2.0,-0.3 4.2,-0.5 6.3,-0.5zm-17,-19c0,-3.0 2.5,-5.6 5.6,-5.6c3.0,0 5.6,2.5 5.6,5.6c0,1.8 -0.8,3.4 -2.1,4.4c-0.7,-0.5 -1.7,-0.7 -2.7,-0.5c-0.9,0.1 -1.7,0.7 -2.2,1.4c-2.3,-0.6 -3.9,-2.8 -3.9,-5.3zm-21,59c0,-18 13,-34 30,-38l1.2,2.4c-2.5,0.8 -4.4,3.2 -4.4,6.1c0,3.5 2.8,6.4 6.4,6.4c0.2,0 0.5,-0.0 0.8,-0.0l-0.2,12l0.2,-0.0c-1.8,0.8 -3.5,2.1 -4.7,3.8l0.3,-0.6l-6.6,-2.5l4.9,5.2l0.1,-0.1c-0.8,1.5 -1.3,3.3 -1.3,5.2l-0.0,-0.0l-11,5.1c-0.8,-2.5 -3.2,-4.4 -6.1,-4.4c-3.5,0 -6.4,2.8 -6.4,6.4c0,0.2 0.0,0.5 0.0,0.8l-3.3,-0.3c-0.3,-2.1 -0.5,-4.4 -0.5,-6.7l0,0.0zm39,39c-18,0 -34,-13 -38,-30l2.9,-1.4c0.6,2.9 3.1,5.0 6.2,5.0c3.5,0 6.4,-2.8 6.4,-6.4c0,-0.4 -0.0,-0.8 -0.1,-1.3l12,0.1c0.1,0.4 0.4,0.7 0.6,1.1l-14,22l0.9,-0.8l19,-16c1.4,0.6 2.9,1.0 4.6,1.1l-0.0,0.0l5.2,11c-2.7,0.7 -4.8,3.2 -4.8,6.2c0,3.5 2.8,6.4 6.4,6.4c0.3,0 0.6,-0.0 0.9,-0.0l0.0,2.9c-2.4,0.4 -4.9,0.7 -7.5,0.7l-0.0,0zm9.7,-1.2l-1.6,-2.5c2.8,-0.6 4.8,-3.2 4.8,-6.2c0,-3.5 -2.8,-6.4 -6.4,-6.4c-0.2,0 -0.5,0.0 -0.8,0.0l0,-12l-0.1,0.0c1.7,-0.7 3.2,-1.9 4.4,-3.3l6.4,2.8l-4.6,-5.5c0.6,-1.4 1.0,-2.9 1.1,-4.6l10,-4.9c0.8,2.6 3.2,4.5 6.1,4.5c3.5,0 6.4,-2.8 6.4,-6.4c0,-0.2 -0.0,-0.5 -0.0,-0.8l2.7,0.5c0.3,2.1 0.5,4.4 0.5,6.7c0.0,18 -12,34 -29,38z`
// }, {
// 	name: "补给/入渠",
// 	symbol: `path://m4.8,0.5c0,0.6 -3.7,4.2 -4.3,4.2c-0.2,0 -0.4,59 -0.4,194l0,194l2.6,2.6l2.6,2.6l194,0l194,0l2.6,-2.6l2.6,-2.6l0,-194l0,-194l-2.6,-2.6l-2.6,-2.6l-194,0c-164,0 -194,0 -194,0.5m146,30c11,2.1 15,5 15,10c-0,1.8 -0.1,8.2 -0.2,14l-0,10l1.3,2.2c1.6,2.8 1.6,4.6 0,8.4c-1.3,3.1 -1.8,14 -0.7,16c1.1,2.6 7.8,1.6 9.4,-1.4c0.8,-1.6 0.2,-25 -0.7,-29c-2.4,-9 5.3,-14 26,-18c2.9,-0.5 6.6,-0.6 17,-0.7l13,-0l3.2,-3.3c5.4,-5.6 9.6,-7 16,-5.3c6.8,1.7 9,1.9 12,1.2c4.6,-0.9 5.9,-0.8 9.8,1.1c4.2,2.2 6.4,2.8 12,3.6c10,1.4 17,8.3 17,18c-0,14 -12,23 -25,19c-6.6,-1.9 -6.5,5.2 0.1,7.9c3,1.2 2.3,1.5 -2.7,1.3c-6.4,-0.2 -8.9,-2.8 -7.5,-8c0.6,-2.4 0.6,-2.9 0.1,-3.8c-1.2,-2.3 -7.4,-4.1 -8.8,-2.5c-1.5,1.7 -1.3,8.7 0.3,10c0.5,0.4 1.4,1.3 2.1,1.9c1.4,1.3 1.9,3.5 1.2,6.4c-0.6,2.7 -0.2,4 1.1,4.8c6.2,3.2 42,3.7 44,0.6c3.1,-3.9 -0.4,-7 -9.7,-8.4c-8.1,-1.1 -8.8,-1.5 -4.8,-2.4c5,-1.1 17,1.9 20,5c7.2,7.7 -22,14 -43,9.9c-6.7,-1.5 -9.6,-1.3 -10,0.9c-0.2,0.5 -0.8,2.6 -1.4,4.5l-1,3.5l0.4,18c0.2,10 0.4,20 0.4,22c-0,3.3 0,3.4 1.9,6.7c7.9,13 -10,23 -43,24c-3.7,0.1 -7,0.4 -7.5,0.6c-1.8,0.9 -0.1,4.4 3.1,6.6c2.7,1.7 3,3.4 0.7,4.3c-3.6,1.5 -9.9,-3 -13,-9.6l-1.4,-2.8l-3.2,-1.1c-1.7,-0.6 -4.8,-1.6 -6.8,-2.3c-8.1,-2.7 -11,-5.7 -13,-10c-0.6,-2 -1.1,-2.9 -1.9,-3.2c-1.3,-0.6 -8.3,-0.6 -12,0c-16,2.6 -34,-1.5 -34,-8.1c-0,-2.5 3,-5.6 5.6,-5.6c0.8,0 0.7,0 -0.2,1.8c-1.9,3.2 -0.3,5.1 6.2,7.6l4.1,1.5l8.4,0.1c8,0.1 8.7,0.1 13,-0.9c2.7,-0.5 6.5,-1.2 8.4,-1.3c3.2,-0.2 3.6,-0.3 4.5,-1.4l0.9,-1.1l-0.2,-17c-0.3,-19 -0.2,-19 -3.5,-23c-1.8,-2.3 -1.9,-4.8 -0.3,-8.1c1.4,-3 2.2,-10 1.2,-11c-1.5,-1.5 -7.2,0.8 -8.1,3.4c-1.1,3.2 -0.6,10 0.8,12c5,7.8 -1,13 -17,16c-6.3,1.1 -7.4,1.9 -7.1,4.8c0.1,1.3 0.1,1.9 -0.2,2c-1,0.3 -2.5,-0.3 -3.3,-1.6c-2.3,-3.8 -2.1,-3.8 -13,-5.6c-5.6,-0.9 -8.3,-1.8 -11,-3.9c-4.1,-2.6 -4.5,-4 -3.3,-11c0.7,-4.1 -0,-23 -1,-25c-1,-2.3 -1,-3.4 -0.2,-5.9c0.5,-1.6 0.5,-2 -0.1,-4.8c-0.8,-3 -0.8,-3 -0,-6.8c0.4,-2 0.7,-3.9 0.6,-4c-0,-0.1 -0.3,-4.8 -0.6,-10c-0.2,-5.6 -0.7,-11 -1,-13c-1.1,-5.5 0.2,-8.1 6,-10c9.4,-4.5 23,-5.8 36,-3.4m19,111c5.5,4 -4.2,11 -12,9.9c-1.9,-0.3 -1.6,-0.5 2.1,-1.2c7,-1.2 9,-3.7 6.2,-7.8l-1.4,-2l2.4,0.1c1.5,0.1 2.7,0.4 3.5,0.9m-33,9.6c0,0.3 -1.3,0.8 -2.4,0.8c-0.4,-0 -0.4,-0.1 0.1,-0.5c0.8,-0.6 2.2,-0.7 2.2,-0.2`
// }, {
// 	name: "工厂",
// 	symbol: `path://M20 1420 c-20 -20 -20 -33 -20 -700 0 -667 0 -680 20 -700 20 -20 33
// 	-20 700 -20 667 0 680 0 700 20 20 20 20 33 20 700 0 667 0 680 -20 700 -20
// 	20 -33 20 -700 20 -667 0 -680 0 -700 -20z m1017 -732 c30 -34 43 -62 37 -84
// 	-3 -10 -50 -50 -105 -88 -54 -38 -111 -82 -126 -98 -15 -15 -31 -28 -36 -28
// 	-6 0 -35 -19 -66 -41 -122 -91 -143 -126 -100 -165 39 -35 42 -51 12 -79 -37
// 	-34 -58 -32 -85 9 -13 19 -37 42 -55 50 -34 16 -73 68 -73 98 0 11 -6 15 -21
// 	11 -23 -6 -68 39 -69 69 0 17 106 108 126 108 7 0 24 -16 38 -35 22 -28 25
// 	-38 16 -55 -16 -30 5 -25 52 13 62 49 235 202 310 273 75 71 109 81 145 42z`
// }, {
// 	name: "改装",
// 	symbol: `path://m3.8,2.7c-1.3,1.5 -2.7,2.8 -3.1,2.9c-0.8,0.2 -1.1,388 -0.2,388c0.6,0 5.1,4.4 5.1,5.1c0,0.3 39,0.5 194,0.5c138,0 194,-0.1 194,-0.4c0,-0.2 1,-1.4 2.3,-2.8c1.3,-1.3 2.5,-2.3 2.8,-2.3c0.3,0 0.4,-55 0.4,-194c0,-148 -0.1,-194 -0.4,-194c-0.6,0 -5.1,-4.4 -5.1,-5.1c-0,-0.3 -39,-0.4 -194,-0.4l-194,0l-2.4,2.7m161,27c2.4,1.2 2.6,1.2 5.6,-0c2.7,-1.1 3.8,-1 6,0.8c1.3,1.1 1.1,1 6.7,0.3c1.7,-0.2 1.9,-0.1 3.9,1.6c2.1,1.8 2.1,1.8 4.1,1.5c4.1,-0.6 4.5,-0.5 6.6,1.8l1.9,2.1l3.3,0.2c3.2,0.1 3.3,0.2 4.1,1.5c1.6,2.7 3.1,4 4.9,4c3.1,0 5.7,2.1 5.7,4.6c0,0.8 2,2 3.8,2.3c2.5,0.3 3.6,1.3 4.2,3.9c0.5,2.4 1.4,3.4 3.7,4.2c2.3,0.7 3.3,1.8 3.6,3.9c0.3,2.9 0.9,3.8 2.7,4.8c3.1,1.7 3.4,2.2 3.4,5.3c0,2.6 0,2.8 1.2,3.8c3.8,3.2 3.6,3 3.4,6.1c-0.2,3.1 -0.1,3.4 2.3,5.9c1.6,1.6 1.8,3 0.8,5.8c-1.9,5.4 5.3,8.2 11,4.3c35,-23 81,-0.4 81,41c0,52 -68,70 -95,24c-4.1,-7 -10,-7.6 -11,-1c-0.3,2.5 -1.1,3.4 -4.1,4.4c-2.2,0.7 -2.8,1.4 -3.6,4.4c-0.5,2.1 -1,2.4 -4.3,3.2l-2.7,0.6l-1.2,2.5c-1.4,2.9 -2.3,3.5 -5.6,3.5c-1.9,0 -4.1,1.4 -4.1,2.7c0,1.4 -2,2.4 -5,2.4l-3,0l-2,2.2c-2.2,2.4 -2.5,2.5 -6.6,1.9c-2.1,-0.2 -2.2,-0.2 -3.9,1.2c-2.6,2.2 -3.3,2.3 -6.2,1.3l-2.5,-0.8l-2.3,1.4c-2.7,1.7 -3.6,1.7 -6.6,0.3l-2.2,-1l-2.7,1c-3,1.2 -4,1.1 -6.5,-0.8c-1.1,-0.8 -1.6,-1 -2.9,-0.8c-5.8,0.8 -5.3,0.9 -7.4,-0.8c-2.2,-1.9 -3,-2.2 -4.9,-1.6c-2.9,0.8 -3.6,0.6 -6.1,-1.9l-2.3,-2.4l-2.5,0c-3,0 -4,-0.3 -5.1,-2.4c-1.1,-2.3 -2.5,-3.2 -4.8,-3.2c-2.7,0 -3.4,-0.4 -4.7,-3.4c-1.2,-2.7 -1.7,-3.1 -4.2,-3.5c-2.5,-0.4 -3.5,-1.4 -4.1,-4c-0.4,-2.3 -1.5,-3.5 -3.5,-4c-2.8,-0.6 -4,-2.2 -4,-5.3c-0,-1.4 -1.2,-2.9 -3.3,-3.9c-2.1,-1 -2.6,-2.1 -2.6,-5.2c0,-2.2 -0.1,-2.5 -1.2,-3.4c-3.8,-3.2 -3.6,-2.9 -3.3,-6.2l0.2,-2.9l-2,-2.2c-2.2,-2.4 -2.4,-3.3 -1.3,-6.2c0.7,-2.1 0.5,-3 -1.2,-5.1c-1.6,-1.9 -1.8,-3.6 -0.6,-6c1,-2 1,-2.5 -0.4,-5c-1.4,-2.6 -1.4,-3.4 0,-5.9c1.4,-2.3 1.4,-3.4 0.3,-5.9c-0.9,-2.2 -0.8,-3.2 0.7,-5.1c2,-2.3 2.1,-2.8 1.4,-5.5c-0.7,-2.7 -0.4,-4.2 1.2,-5.4c1.9,-1.2 2.5,-2.9 2.2,-5.8c-0.2,-2.9 -0.1,-3.2 3.4,-5.9c1.2,-0.9 1.3,-1.1 1.4,-3.6c0,-3.3 0.5,-4.1 3.1,-5.3c2.4,-1 2.8,-1.6 3.2,-4.6c0.3,-2.5 1.3,-3.7 3.6,-4.3c2.3,-0.6 3.2,-1.5 3.8,-4c0.6,-2.6 1.5,-3.4 4.1,-3.8c2.6,-0.3 3.2,-0.7 4.2,-3.1c1.2,-2.8 1.9,-3.3 4.9,-3.6c2.7,-0.2 3.8,-0.7 4.4,-2c1.2,-2.7 2.3,-3.4 5.5,-3.4l3,0l2.1,-2.2l2.1,-2.2l3.4,0.2l3.4,0.2l1.9,-1.6c2,-1.8 3.1,-1.9 6.9,-0.7c1.6,0.5 1.7,0.4 3.8,-0.9c2.4,-1.7 3.6,-1.8 6.3,-0.4m-7.9,16c-16,2.3 -37,14 -37,20c-0,2.3 0.6,2.8 23,20c5.7,4.3 6.7,4.4 13,1.7c7.8,-3.2 7.5,-2.4 10,-22c2.8,-22 2.7,-22 -9.3,-20m26,2.5c-2.1,0.9 -2.7,2.5 -3.6,9.8c-0.3,2.8 -1,8.5 -1.6,12c-2.1,15 -1.9,16 4.9,21c5.7,4.3 6.1,4.3 15,0.5c2.7,-1.1 9,-3.7 13,-5.8c14,-5.8 14,-6.6 8.3,-14c-9.5,-12 -30,-26 -37,-23m-74,31c-6.1,5.2 -10,30 -7.8,43c1.5,7.7 3.3,8.3 12,4.1c2,-0.8 7,-3 11,-4.7c10,-4.2 11,-4.9 13,-6.2c2.2,-1.8 2.3,-2.1 3.5,-11c0.5,-4.2 -0.3,-5.1 -15,-16c-14,-11 -14,-11 -17,-8.7m111,16c-3.4,1.4 -9.2,3.8 -12,5.3c-13,5.5 -13,5.4 -14,14c-1,7.7 -1.3,7.3 15,19c11,8.7 12,9.6 14,9.6c6.9,0 13,-26 10,-42c-1.6,-10 -2.8,-10 -13,-6.3m-57,2.6c-14,5.3 -11,25 3.4,26c14,0.7 19,-19 6.2,-25c-2.6,-1.2 -7.3,-1.6 -9.7,-0.7m120,0.6c-3.3,1.5 -3.3,3.6 0.3,13c3.5,9.3 5,10 10,10c3.8,-0 5,-0.8 11,-8.7c5.8,-7.2 6.3,-8.7 3.4,-11c-4.2,-3.6 -20,-6.3 -25,-4.1m-16,6.3c-8.8,5.5 -15,17 -13,21c1.7,3.1 18,5.5 21,3.1c4.7,-3.1 4.9,-6.2 1.2,-16c-3.7,-10 -5.5,-11 -10,-8.8m50,7.8c-2.6,1.4 -12,13 -12,15c-1,6.1 2.5,9.2 12,11c12,2.1 14,1.1 12,-7.2c-2.1,-12 -8.6,-22 -13,-19m-174,15c-4.1,0.9 -30,12 -31,13c-4.6,4.6 10,21 26,29c14,6.9 15,6.4 17,-10c3.2,-25 3.4,-23 -2.8,-28c-5,-4 -6.5,-4.6 -9.3,-3.9m144,2.9c-7.9,2.4 -6.6,14 1.6,15c7.8,0.7 11,-8.5 5.8,-13c-2.3,-2 -4.4,-2.4 -7.5,-1.4m-109,3.8c-7.6,3.3 -7.2,2.3 -9.8,22c-2.4,19 -2.2,19 2.9,20c14,1 44,-13 44,-21c0,-1.9 -2.2,-3.9 -15,-13c-15,-11 -14,-11 -21,-7.7m74,1.9c-4.6,1.3 -4.3,9.7 0.7,19c5.2,10 7.4,10 16,0.4c6.8,-7.9 7.6,-12 3.1,-16c-2.4,-2.2 -16,-5.1 -20,-4.1m53,9.3c-2,0.7 -4.4,3.1 -5.2,5.3c-1.4,3.8 4.2,20 7.6,21c6,2.5 22,-17 18,-22c-1.8,-2.4 -17,-5.5 -21,-4.2m-24,8.8c-2.6,1.4 -12,13 -12,15c-1.2,6.8 23,12 28,6.7c2.5,-2.7 -4.5,-20 -8.8,-22c-1.7,-0.7 -5.6,-0.6 -7.1,0.1`
// }, {
// 	name: "出击2"
// }, {
// 	name: "其他",
// 	symbol: `diamond`
// }]
const datalen = app.data.length

const that = ({
	data: {
		switches: app.initcache('switches', {
			fs: [false, true, true, true],
			fp: [true, true, true, true],
			fm: [true, true, true, true],
			fb: 0,
		}),
		current: null,
		down: true,
		discountInfo: [{
			preferenceName: '2242',
			preferenceExplain: 'ssds'
		}, {
			preferenceName: '2242',
			preferenceExplain: 'ssds'
		}, {
			preferenceName: '2242',
			preferenceExplain: 'ssds'
		}, {
			preferenceName: '2242',
			preferenceExplain: 'ssds'
		}],
		isExpand: false,
		toggleAnimationData: {}, // 优惠信息动画
		ec: {
			onInit: initChart
		}
	},
	onReady() {
		console.time('计时器4')
		// this.initChart()
	},
	expand() {
		w(222)
		// 少于两条数据就不需要展开了
		if (this.data.discountInfo.length < 2) return;
		let animation = wx.createAnimation({
			duration: 1000,
			timingFunction: 'ease-out'
		});
		if (this.data.isExpand) {
			// 如果是展开的，就让它收缩
			animation.height('0rpx').step();
		} else {
			// 如果是收缩的，就让它展开
			// 展开的高度是动态计算的，用一行的高度（50）去乘以数组的数量
			// 这里我曾经想过用height:'auto'这个属性，但是发现没法实现这个动画，所以换成了动态计算它的实际高度
			let height = this.data.discountInfo.length * 100 + 'rpx';
			animation.height(height).step();
		}
		this.setData({
			isExpand: !this.data.isExpand,
			toggleAnimationData: animation.export()
		});
	},
	filts(o) {
		let d = {}
		d.c = o//.target.dataset
		let s = this.data.switches
		switch (d.c[1]) {
			case 's':
				s.fs[d.c[3]] = !s.fs[d.c[3]]
				break;
			case 'p':
				s.fp[d.c[3]] = !s.fp[d.c[3]]
				break;
			case 'm':
				s.fm[d.c[3]] = !s.fm[d.c[3]]
				break;
			case 'b':
				s.fb = o.detail.value
				s.fs[0] = true
				break;
			default:
				x(d)
				break;
		}
		this.setData({
			switches: s
		})
		setchart()
		that.onUnload()
	},
	handset(o) {
		let d = o.target.dataset.c
		if (d == app.getstat(this.data.current.wiki_id)) return
		// z(d)
		// 		z(app.getstat(this.data.current.wiki_id))
		// 		z((this.data.current.wiki_id))
		// 		z((current.wiki_id))
		// 		z((current.guess))
		manual(this.data.current.wiki_id, d)
		update()
		current = datawk(this.data.current.wiki_id)
		setchart()
		pagecurrent()
		z(current, datawk(this.data.current.wiki_id))
		that.setData({
			current: current
		})
	},
	goreward() {
		wx.navigateTo({
			url: '../reward/index'
		})
	},
	clearStorage() {
		wx.clearStorage()
		z('cleared')
	},
	onShareAppMessage(res) {
		return {
			title: Math.random() > 0.5 ? '任务太多不知道做哪个？快用舰娘任务小程序' : '舰娘任务可以在小程序中管理啦！',
			path: '/pages/index/index',
			success: function () { },
			fail: function () { }
		}
	},
	onShareTimeline(res) {
		return {
			title: Math.random() > 0.5 ? '任务太多不知道做哪个？快用舰娘任务小程序' : '舰娘任务可以在小程序中管理啦！'
		}
	},
	onLoad() {
		those = this.data
		console.time('计时器1')
		switches = those.switches
		this.setData({
			current: ifnull(app.get('current'), app.data[0])
		})
		// this.setData({switches:	app.initcache('switches', {
		// 	fs: [false, true, true, true],
		// 	fp: [true, true, true, true],
		// 	fm: [true, true, true, true],
		// 	fb: 0,
		// })})
	},
	onShow() {
		console.time('计时器2')
	},
	onHide() {
		app.set('current', this.data.current)
		app.set('switches', this.data.switches)
	},
	onUnload() {
		app.set('current', this.data.current)
		app.set('switches', this.data.switches)
	}
})
// window.Onbeforeunload =function(params) {
// 	app.set('current', this.data.current)
// 	app.set('switches', this.data.switches)
// 	alert(app.get('switches'))
// }

var slides
var slideq
var sliden = 0
Object.defineProperty(that, "setData", {
	value: function (e) {
		for (key in e) {
			let model = e[key]
			this.data[key] = model
			if (key == 'current' && model) {
				let newflag = model.newflag//!isNaN(model.reward_other)
				$('.id').html(model.wiki_id)
				$('.content').html(model.description.replace(/\n/g, '<br/>'))
				$('.after').html(seplink(model.post))
				$('.ammo').html(model.reward_ammo)
				$('.bauxite').html(model.reward_bauxite)
				$('.before').html(seplink(model.pre));
				$('.fuel').html(model.reward_fuel)
				$('.memo').html(model.memo)
				$('.period').html(model.period)
				if (!newflag) {
					let bonus = ""
					model.reward_other.forEach(function (be, i) {
						if (be.choices) {
							be.choices.forEach(function (ce) {
								bonus += "奖励" + (i + 1) + ": " + ce.name + 'x' + (ce.amount ? ce.amount : "") + "<br/>"
							})
						} else {
							bonus += "奖励" + (i + 1) + ": " + be.name + 'x' + (be.amount ? be.amount : "") + "<br/>"
						}
					})
					$('.bonus').html(bonus)
				} else {
					$('.bonus').html(model.reward_other + "<br>未收录")
				}
				slides = ""
				slideq = model
				sliden = 0
				// z(model.requirements)
				let req = model.requirements
				if (app.requiredic[req.category]) {
					addreq(req)
				} else if (req.list) {
					req.list.forEach(addreq)
				} else {
					x(req)
				}
				$('.slides').html(slides)
				$('.description').html(model.title + (newflag ? '<img src="https://pic2.zhimg.com/v2-894298321368004931eaecaa4000c7a1_r.gif" alt="">' : ""))
				app.set('current', this.data[key]);
			} else if (key == 'switches') {
				graystyle()
			}
		}
	}
})

function addreq(req) {
	let reqcate = app.requiredic[req.category]
	if (req.category == 'simple') { reqcate = categories[slideq.category].name }
	let times = req.times || req.amount || 1
	let map = req.map
	if (map && typeof map != "string") {
		map.forEach(function (m) {
			slides += reqcate + ': ' + m +
				slidehtml(times)
		})
	} else if (req[app.slideact[req.category]]) {
		req[app.slideact[req.category]].forEach(function (m) {
			if (app.slideact[req.category] == 'scraps') { reqcate = "废弃" }
			slides += reqcate + ': ' + ifnull(m.id || m.name, '') +
				slidehtml(m.times || m.amount || 1)
		})
	} else {
		slides += reqcate + ': ' + ifnull(req.map, '') +
			slidehtml(times)
	}
}
function slidehtml(max) {
	let actid = ++sliden + (slideq.wiki_id).toString()
	let value = app.get(actid) || 0
	return `<span class="right"><span class="` + actid + `">` + value + '</span>/' + max + `</span>` +
		`<input type="range" id="` + actid +
		`" value="` + value +
		`" min="0" max="` + max +
		`" step="1" onchange="onslide('` + actid + `')" oninput="inslide('` + actid + `')" list="tickmarks">`
}
function onslide(actid) {
	let range = document.getElementById(actid);
	app.set(actid, range.value);
}
function inslide(actid) {
	let range = document.getElementById(actid);
	$('.'+actid).html(range.value)
}
const tcache = "tcache"
const birth = app.periodstart('once', new Date())

// function keys(arr) {
// 	let k = []
// }
const blank = '    '
var size = 5
var repulsion = 1
let link = []
let edge = []
let valid = []
// let dawn = app.periodstart('daily', String(new Date()))

app.data.forEach(function (e, i) {
	e.guess = ifnull(app.getstat(e.wiki_id), 0)
	// e.star = ifnull(app.get('star'+e.wiki_id),false)
	// e.del = ifnull(app.get('del'+e.wiki_id),false)
	e.id = String(e.game_id)
	e.title = e.name
	e.name = ifnull(e.wiki_id, e.id)
	e.pre = wkids(e.prerequisite)
	e.prerequisite.forEach(function (p) {
		link.push({
			source: String(p),
			target: String(e.game_id),
			// lineStyle:{
			// 	color:'#333'
			// }
		})
	})
	// e.post = wkids(postQuest[String(e.game_id)])
	e.post = wkids(e.postQuest)
	e.categories = e.category
	e.itemStyle = {
		borderWidth: size * 0
	} //,borderColor:'transparent'}
	// s0(e)
	// e.symbol = "roundRect"
	// e.x=Math.random()*100
	// e.y=Math.random()*100
	switch (Number(e.type)) {
		case 1:
			e.value = ""
			e.period = 'once'
			break;
		case 2:
			e.value = "日"
			e.period = 'daily'
			break;
		case 3: //周常
			e.value = "週"
			e.period = 'weekly'
			break;
		case 4:
			e.value = "日"
			e.period = 'daily'
			break;
		case 5:
			e.value = "日"
			e.period = 'daily'
			break;
		case 6: //月常
			e.value = "月"
			e.period = 'monthly'
			break;
		case 7: //季常
			e.value = "季"
			e.period = 'seasonal'
			break;
		default:
			e.value = '年'
			e.period = 'annual'
			break;
	}
})
// import * as echarts from '../../ec-canvas/echarts';

// for(let key in postQuest){
//   postQuest[key].forEach(function(e){
//   link.push({
//     source: String(key),
// 		target: String(e),
// 		lineStyle:{
// 			color:'yellow'
// 		}
//   })})
// }
let current = app.data[0]
let chartdata, reward, battle
let toolname = '舰娘任务管理器'
let focus = null
let master = ['A03']
let chain = []
var ex = {}
var ey = {}

const those = that.data
console.time('计时器1')
const switches = those.switches
// this.setData({
// 	current: ifnull(app.get('current'), app.data[0])
// })
// this.setData({switches:	app.initcache('switches', {
// 	fs: [false, true, true, true],
// 	fp: [true, true, true, true],
// 	fm: [true, true, true, true],
// 	fb: 0,
// })})

pushlink('A03')

function seplink(m) {
	var link = ''
	for (let i = 0; i < m.length; i++) {
		link += `<a href='javascript:jump("` + m[i] + `")'>` + m[i] + "</a> "
	}
	return link
}
function pushlink(node) {
	app.data.forEach(function (e) {
		if (node == e.wiki_id) {
			e.pre.forEach(function (pre) {
				if (master.indexOf(pre) == -1) {
					master.push(pre)
					pushlink(pre)
				}
			})
			e.post.forEach(function (post) {
				if (master.indexOf(post) == -1) {
					master.push(post)
					pushlink(post)
				}
			})
		}
		return
	})
}

function datawk(wkid) {
	if (app.wktoi[wkid] != null && app.data[app.wktoi[wkid]] != null) {
		return app.data[app.wktoi[wkid]]
	} else {
		z(wkid + ' is not in app.data!', app.wktoi[wkid], app.data)
		option.title.text = '目标任务不存在：' + wkid
	}
}

function setwk(wkid, key, value) {
	if (app.wktoi[wkid] != null && app.data[app.wktoi[wkid]] != null) {
		app.data[app.wktoi[wkid]][key] = value
	} else {
		x(wkid, ' is not in app.data!', app.wktoi[wkid], app.data)
		option.title.text = '未找到目标任务：' + wkid
	}
}


function pushpre(list) {
	for (let i = 0; i < list.length; i++)
		datawk(list[i]).pre.forEach(function (pre) {
			if (list.indexOf(pre) == -1) {
				list.push(pre)
				pushpre(list)
			}
		})
	return list
}
function pushpost(list) {
	for (let i = 0; i < list.length; i++)
		datawk(list[i]).post.forEach(function (pre) {
			if (list.indexOf(pre) == -1) {
				list.push(pre)
				pushpost(list)
			}
		})
	return list
}
// z(master)

function jump(wkid) {
	current = datawk(wkid)
	z([datawk(wkid).x, datawk(wkid).y])
	pagecurrent()
}

function pagecurrent() {
	that.setData({
		current: current
	})
}
// setTimeout(() => {
// 	jump('B37')
// }, 5000);

function report() { }
// function wkid(n){
// 	for(let i=0;i<datalen;i++){
// 		if(n==app.data[i].game_id)return app.data[i].wiki_id;
// 	}
// }

// function path(node, stat) {
// 	app.setstat(node, stat)
// 	affect(node, stat)
// }

function manual(node, stat) {
	app.setstat(node, stat)
	// setchart();
}

function affect(node, stat, n) {
	if (stat === null) return;
	n = ifnull(n, 0);
	n++
	if (n > datalen) {
		x("exeed limit ", n)
		return;
	}
	let e = datawk(node)
	if (e) {
		e.guess = stat
		if (stat > 0) {
			e.pre.forEach(function (pre) {
				affect(pre, 2, n)
			})
		}
		if (stat < 2) {
			e.post.forEach(function (post) {
				affect(post, 0, n)
			})
		}
	}
	// for (let i = 0; i < datalen; i++) {
	// 	let d = app.data[i]
	// 	if (node == d.wiki_id) {
	// 		d.guess = ifnull(stat, 0)
	// console.log(d.itemStyle)
	// setTimeout(function(){
	// if(Math.random()>0.94)setchart()
	// return
	// },300)
	// 	}
	// }
}

function trim(x) {
	return x.replace(/^\s+|\s+$/gm, '');
}

function s0(d, real) {
	d.name = d.wiki_id
	d.value = trim(d.value)
	d.itemStyle.borderColor = real ? 'rgba(255, 192, 203,0.7)' : 'rgb(255, 192, 203,0.5)'
}

function s1(d, real) {
	d.name = blank + d.wiki_id + (real ? '🟠' : '🟡')
	if (d.value.length == 1) d.value += blank; //function blank
	d.itemStyle.borderColor = real ? 'rgba(249, 132, 54, 0.7)' : 'rgba(255, 170, 85, 0.5)'
}

function s2(d, real) {
	// d.symbolSize = size * 2,
	d.name = blank + d.wiki_id + '☑️'
	if (d.value.length == 1) d.value += blank;
	d.itemStyle.borderColor = real ? 'rgba(31, 131, 131,0.7)' : 'rgb(82, 182, 182,0.5)'
}
let option = {
	left: 0,
	right: 0,
	top: 0,
	bottom: 0,
	center: focus,
	// large:true,
	color: ["#37A2DA", "#32C5E9", "#67E0E3", "#91F2DE", "#FFDB5C", "#FF9F7F"],
	title: {
		text: toolname,
		left: 'right',
		top: 'buttom',
		textStyle: {
			color: '#aaa',
		},
		z: 0
	},
	legend: [{
		orient: 'vertical',
		icon: 'circle',
		left: 10,
		top: "30%",
		data: categories.slice(1, 8),
		selectedMode: 'multiple'
	}],
	animationDurationUpdate: 1500,
	animationEasingUpdate: 'quinticInOut',
	nodeScaleRatio: 0.9,
	series: [{
		data: chain,
		links: edge,
		symbolSize: size * 5,
		type: 'graph',
		layout: 'force',
		draggable: true,
		force: {
			repulsion: repulsion * size * size * 10,
			initLayout: 'circular',
			// friction:0.4
		},
		// symbolSize: 20,
		roam: true,
		label: {
			show: true,
			formatter: "\n{b|{b}}\n{c|{c}}",
			fontWeight: 'bolder',
			color: 'black',
			fontSize: 18,
			// textBorderColor: 'white',
			rich: {
				b: {
					fontWeight: 'lighter',
					color: 'white',
					fontSize: 15,
					textBorderColor: 'black',
					textBorderWidth: 2,
					// textBorderColor: 'white',
					lineHeight: size
				},
				c: {
					align: 'right',
					fontWeight: 'bolder',
					color: '#e3ce60',
					fontSize: size * 2,
					fontStyle: 'oblique',
					// fontFamily:'SimSun',
					textBorderColor: '#222',
					textBorderWidth: size / 4,
					// borderColor: 'black',
					// borderWidth:2,
					// backgroundColor : '#444',
				}
			}
		},
		edgeSymbol: ['none', 'arrow'],
		// edgeSymbolSize: [4, 10],
		// edgeLabel: {
		// 		show:true,
		//     textStyle: {
		//       fontSize: 8
		//     }
		// },
		lineStyle: {
			normal: {
				opacity: 0.9,
				width: 3,
				curveness: 0
			}
		},
		categories: categories,
		// focusNodeAdjacency: true,
		emphasis: {
			// label.rich.b.textBorderColor:'white',
			// itemStyle:{
			// 	color:'white',
			// },
			lineStyle: {
				width: size
			},
		},
		// animationThreshold:10,
	}],
	color: paint
};

function initChart(canvas, width, height, dpr) {
	// console.time('计时器5')
	// chart = echarts.init(canvas, null, {
	// 	width: width,
	// 	height: height,
	// 	devicePixelRatio: dpr // new
	// });
	// canvas.setChart(chart);
	// that.setData({switches:	app.initcache('switches', {
	// 	fs: [false, true, true, true],
	// 	fp: [true, true, true, true],
	// 	fm: [true, true, true, true],
	// 	fb: 0,
	// })})
	setchart();
	z(chart._chartsViews)
	chart.on('click', function (params) {
		if (params.dataType == "node") {
			current = params.data
			that.data.down = true
			current.button = ifnull(app.getstat(current.wiki_id), current.guess)
			that.setData({
				current: current,
				down: that.data.down
			})
			z(params.data, [ex[params.data.wiki_id], ey[params.data.wiki_id]], app.valido[(params.data.wiki_id)])
			// 	option.center=(chartdata._itemLayouts[params.dataIndex])
			// setchart();
		}
	});
	// chart.getZr().on('click', function (event) {
	// 	if (!event.target) {
	// 		try {
	// 			that.data.down = false
	// 			that.setData({
	// 				down: that.data.down
	// 			})
	// 		} catch (e) {
	// 			w(e)
	// 		}
	// 	}
	// });
	chart.on('highlight', function (params) {
		// current=params.data
		// that.setData({
		// 	current:current,
		// })
		z('highlight', params);
	});
	// console.timeEnd('计时器0')
	// console.timeEnd('计时器1')
	// console.timeEnd('计时器2')
	// console.timeEnd('计时器4')
	// console.timeEnd('计时器5')
	return chart;
}

// function ifnull(notnul, ifnul) {
// 	if (typeof (notnul) === 'undefined') {
// 		return ifnul
// 	} else {
// 		return notnul
// 	}
// }

function eqifnull(notnul, ifnul) {
	if (typeof (notnul) === 'undefined') {
		notnul = ifnul
	}
}


function didperiod(type) {
	app.data.forEach(function (e) {
		let Bd0 = type == 2 ? e.type == 4 || e.type == 5 : false
		z(Bd0)
		if (e.type == 2 || Bd0) {
			app.setstat(e.wiki_id, 2)
		}
	})
}
let me = ['A62', 'A68', 'A70', 'A73', 'A78', 'A79', 'A80', 'A83', 'A87', 'B136', 'B138', 'B44', 'B137', 'B128', 'C22', 'C48', 'B58', 'B60']
update()
// for(let i=0;i<me.length;i++){
// 	let m=me[i]
// 	try {
// 	app.setstat(app.data[app.wktoi[m]],1)
// 	} catch (error) {
// 		z(m)
// 	}
// }
function fistvisit() {
	if (!app.get('fistvisit')) {
		z('fistvisit')
		wx.clearStorage()
		didperiod(2)
	}
	app.set('fistvisit', true)
}
fistvisit()


// for (let i = 200; i < datalen; i++) {
// 	if (app.data[i].type > 1)
// 		z(app.beginutc(app.data[i].wiki_id, new Date()),app.data[i].period, )
// }
// setTimeout(() => {
// 	update();
// 	var dawn = app.periodstart('daily', String(new Date()))
// }, dawn + 10000000000);

function update() {
	try {
		app.data.forEach(function (e) {
			e.guess = 0
		})
	} catch (error) {
		z(app.data);
		return
	}
	let valid = [];
	// z(app.get('history'))
	// z($.cookie('history'));
	(app.get('history') || []).forEach(function (h) {
		let vali = {}
		vali[app.beginutc(h[0], h[2])] = [h[1], h[2]]
		app.valido[h[0]] = vali
		//以后可以设置跳过已遍历的index
	})
	for (let wkid in app.valido) {
		for (let dt in app.valido[wkid]) {
			valid.push([wkid, app.valido[wkid][dt][0], app.valido[wkid][dt][1]])
			if (dt == app.beginutc(wkid, new Date()))
				setwk(wkid, 'last', app.valido[wkid][app.beginutc(wkid, new Date())])
		}
	}
	// z('v: ', app.valido, valid)
	//sort valid
	// valid.sort(sortdate)
	function sortdate(a, b) {
		return a[1] - b[1]
	}
	// z('v: ', app.valido, valid)
	valid.forEach(function (v) {
		if (typeof (app.valido[v[0]][app.beginutc(v[0], new Date())]) != 'undefined') {
			let stat = app.valido[v[0]][app.beginutc(v[0], new Date())][0]
			if (stat != null)
				affect(v[0], stat)
		}
	})
	//guess s1
	app.data.forEach(function (e) {
		if (e.guess != 2) {
			let flag = true
			e.pre.forEach(function (p) {
				for (let i = 0; i < datalen; i++) {
					let node = app.data[i]
					if (node.wiki_id == p) {
						if (node.guess != 2) flag = false
						break
					}
				}
			})
			if (flag == true) {
				e.guess = 1
			}
		}
	})
}

function setchart() {
	//Filter
	// z(switches.fb) 
	chain = []
	if (switches.fb != 0 && switches.fb < app.branches.length - 2) {
		app.branches[switches.fb][1].forEach(wkid => {
			datawk(wkid).target = true
		});
		let custom = pushpost(app.branches[switches.fb][1])
		custom.forEach(function (wkid) {
			chain.push(datawk(wkid))
		})
	} else {
		switch (Number(switches.fb)) {
			case 0:
				chain = JSON.parse(JSON.stringify(app.data))
				z(chain)
				break;
			case app.branches.length - 1:
				app.data.forEach(function (e) {
					if (master.indexOf(e.wiki_id) > -1) chain.push(e);
				})
				break;
			case app.branches.length - 2:
				app.data.forEach(function (e) {
					if (master.indexOf(e.wiki_id) == -1) chain.push(e);
				})
				break;
			default:
				break;
		}
	}
	that.setData({
		switches: switches
	})
	var cl = chain.length;
	while (cl--) {
		let c = chain[cl].guess
		if (switches.fs[0] && switches.fs[1] && switches.fs[2]) { } else {
			let status = false
			if ((!switches.fs[0]) && c == 0) status = true
			if ((!switches.fs[1]) && c == 1) status = true
			if ((!switches.fs[2]) && c == 2) status = true
			if (status) {
				chain.splice(cl, 1)
			}
		}
	}
	edge = []
	chain.forEach(function (e) {
		e.prerequisite.forEach(function (p) {
			edge.push({
				source: String(p),
				target: String(e.game_id),
				// lineStyle:{
				// 	color:'#333'
				// }
			})
		})
	})
	if (chain.length + edge.length > 920) {
		option.title.text = '画布承载超限\n\n部分箭头未显示'
		z("chain too lonng", chain.length, edge.length);
		// edge = link.slice(edge.length - 950 + edge.length, edge.length)
		edge = link.slice(0, 920 - edge.length - chain.length)
	} else {
		option.title.text = ''
	}
	chain.forEach(function (e) {
		switch (Number(e.guess)) {
			case 0:
				s0(e)
				break;
			case 1:
				s1(e)
				break;
			case 2:
				s2(e)
				break;
			default:
				x(e)
				break;
		}
		if (app.getstat(e.wiki_id) == e.guess) {
			switch (Number(app.getstat(e.wiki_id))) {
				case 0:
					s0(e, 1)
					break;
				case 1:
					s1(e, 1)
					break;
				case 2:
					s2(e, 1)
					break;
				default:
					x(e)
					break;
			}
		}
		if (e.star == true) {
			e.itemStyle.symbolSize = size * 10
		}
		if (ex.length) {
			e.x = ex[e.wiki_id]
			e.y = ey[e.wiki_id]
		}
	})
	z('chain:', chain.length, 'edge:', edge.length)
	option.series[0].data = chain
	chart.setOption(option)
	chartdata = chart._chartsViews[0]._symbolDraw._data
	// z(chartdata, app.data)
	for (let i = 0; i < chartdata._idList.length; i++) {
		try {
			if (chartdata._itemLayouts[i]) {
				ex[app.wkid[chartdata._idList[i]]] = parseInt(chartdata._itemLayouts[i][0])
				ey[app.wkid[chartdata._idList[i]]] = parseInt(chartdata._itemLayouts[i][1])
			}
		} catch (error) {
			w(error, chartdata._itemLayouts, i)
			break;
		}
	}
	// z('position', ex)
	if (chain.length) {
		// z(ex[chain[0].wiki_id])
		edge.forEach(function (link) {
			for (let ii = 0; ii < chain.length; ii++) {
				var ch = chain[ii]
				if (ex[ch.wiki_id] == null) break;
				if (ch.game_id == link.source) {
					try { //先得到id后渲染
						link.lineStyle = {
							color: {
								type: 'radial',
								x: ex[ch.wiki_id],
								y: ey[ch.wiki_id],
								r: 300,
								colorStops: [{
									offset: 0,
									color: ch.itemStyle.borderColor
								}, {
									offset: 1,
									color: '#777'
								}],
								global: true
							}
						}
					} catch (e) {
						w(ex[ch.wiki_id], ch.wiki_id, e)
					}
				}
				if (ch.game_id == link.target) {
					if ((typeof link.lineStyle) != 'undefined') {
						try {
							// if(link.lineStyle.color.r==300){
							link.lineStyle.color.r == 120
							link.lineStyle.color.colorStops = link.lineStyle.color.colorStops || [{
								offset: 0,
								color: '#777'
							}, {
								offset: 1,
								color: '#777'
							}]
							link.lineStyle.color.colorStops[1].color = ch.itemStyle.borderColor;
						} catch (e) {
							w(link.lineStyle, e)
						}
						// }
					}
					break;
				}

			}
		})
	}
	option.series[0].links = edge
	chart.setOption(option)
	setTimeout(() => {
		reward = []
		battle = []
		app.data.forEach(function (e, i) {
			if (e.requirements.category == "sortie") {
				addbattle(e, e.requirements)
				addbattle(e, e.requirements, 10)
				addbattle(e, e.requirements, 11)
			} else if (e.requirements.list) {
				for (i = 0; i < e.requirements.list.length; i++) {
					if (e.requirements.list[i].category == "sortie") {
						addbattle(e, e.requirements.list[i])
						addbattle(e, e.requirements.list[i], 10)
						addbattle(e, e.requirements.list[i], 11)
					}
				}
			}
			if (e.reward_other) {
				for (let i = 0; i < e.reward_other.length; i++) {
					if (e.reward_other[i].name) {
						addreward(e, e.reward_other[i]);
						// addreward(e, e.reward_other[i],5);
						addreward(e, e.reward_other[i], 10);
						addreward(e, e.reward_other[i], 11);
					} else {
						for (let j = 0; j < e.reward_other.length; j++) {
							addreward(e, e.reward_other[i].choices[j]);
							// addreward(e, e.reward_other[i].choices[j],5);
							addreward(e, e.reward_other[i].choices[j], 10);
							addreward(e, e.reward_other[i].choices[j], 11);
						}
					}
				}
			}
		})
		z(battle)
		app.battle = battle
		app.reward = reward
	}, 1200);

	app.set('switches', that.data.switches);
	app.set('branches', app.branches);
}
function addbattle(e, r, guess) {

	let flag = false
	if (!guess) { guess = e.guess; flag = true } else
		if (guess == 10) { flag = e.guess < 2 } else
			if (guess == 11) { flag = true }
	if (flag) {
		let name = r.map || '任意'
		if (typeof name == 'string') {
			battle[guess] = ifnull(battle[guess], {})
			battle[guess][name] = ifnull(battle[guess][name], {})
			// battle[guess][name][e.wiki_id]=ifnull(battle[guess][name][e.wiki_id],0)
			// battle[guess][name][e.wiki_id] += Number(amount)}
			battle[guess][name][e.wiki_id] = r
		} else if (name.length >= 1) {
			for (let i = 0; i < name.length; i++) {
				let namei = name[i]
				battle[guess] = ifnull(battle[guess], {})
				battle[guess][namei] = ifnull(battle[guess][namei], {})
				battle[guess][namei][e.wiki_id] = r
			}
		}
	}
}
function addreward(e, r, guess) {//remove reward
	let name = r.name
	if (!name) { x(r) } else {
		let flag = false
		let amount = ifnull(r.amount, 1)
		if (name.slice(0, 2) == "戦果") {
			amount = name.slice(2, name.length)
			name = "戦果"
		}
		if (!guess) { guess = e.guess; flag = true } else
			// if(guess==5){flag= app.get('starreward').indexOf(name)>-1 }else
			if (guess == 10) { flag = e.guess < 2 } else
				if (guess == 11) { flag = true }
		if (flag) {
			reward[guess] = ifnull(reward[guess], {})
			reward[guess][name] = ifnull(reward[guess][name], {})
			reward[guess][name][e.wiki_id] = ifnull(reward[guess][name][e.wiki_id], 0)
			reward[guess][name][e.wiki_id] += Number(amount)
		}
	}
}

