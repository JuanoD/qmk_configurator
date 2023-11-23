/* Copyright 2022 - Generated by convert_keymap_extras_header.js
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

export default {
  /*
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │ | │ 1 │ 2 │ 3 │ 4 │ 5 │ 6 │ 7 │ 8 │ 9 │ 0 │ ' │ ¿ │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │ Q │ W │ E │ R │ T │ Y │ U │ I │ O │ P │ ´ │ + │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │ A │ S │ D │ F │ G │ H │ J │ K │ L │ Ñ │ { │ } │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │ < │ Z │ X │ C │ V │ B │ N │ M │ , │ . │ - │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  KC_GRV: { name: '°  \n| ¬', title: 'LA_PIPE' },
  KC_1: { name: '!\n1', title: 'ES_1' },
  KC_2: { name: '"\n2', title: 'ES_2' },
  KC_3: { name: '·\n3', title: 'ES_3' },
  KC_4: { name: '$\n4', title: 'ES_4' },
  KC_5: { name: '%\n5', title: 'ES_5' },
  KC_6: { name: '&\n6', title: 'ES_6' },
  KC_7: { name: '/\n7', title: 'ES_7' },
  KC_8: { name: '(\n8', title: 'ES_8' },
  KC_9: { name: ')\n9', title: 'ES_9' },
  KC_0: { name: '=\n0', title: 'ES_0' },
  KC_MINS: { name: "?  \n' \\", title: 'ES_QUOT' },
  KC_EQL: { name: '¡\n¿', title: 'LA_IQUE' },
  // Row 2
  KC_Q: { name: 'Q  \n  @', title: 'LA_Q' },
  KC_W: { name: 'W', title: 'ES_W' },
  KC_E: { name: 'E  \n  €', title: 'LA_E' },
  KC_R: { name: 'R', title: 'ES_R' },
  KC_T: { name: 'T', title: 'ES_T' },
  KC_Y: { name: 'Y', title: 'ES_Y' },
  KC_U: { name: 'U', title: 'ES_U' },
  KC_I: { name: 'I', title: 'ES_I' },
  KC_O: { name: 'O', title: 'ES_O' },
  KC_P: { name: 'P', title: 'ES_P' },
  KC_LBRC: { name: '¨\n´', title: 'LA_ACUT' },
  KC_RBRC: { name: '*  \n+ ~', title: 'LA_PLUS' },
  // Row 3
  KC_A: { name: 'A', title: 'ES_A' },
  KC_S: { name: 'S', title: 'ES_S' },
  KC_D: { name: 'D', title: 'ES_D' },
  KC_F: { name: 'F', title: 'ES_F' },
  KC_G: { name: 'G', title: 'ES_G' },
  KC_H: { name: 'H', title: 'ES_H' },
  KC_J: { name: 'J', title: 'ES_J' },
  KC_K: { name: 'K', title: 'ES_K' },
  KC_L: { name: 'L', title: 'ES_L' },
  KC_SCLN: { name: 'Ñ', title: 'ES_NTIL' },
  KC_QUOT: { name: '[  \n{ ^', title: 'LA_LCBR' },
  KC_NUHS: { name: ']  \n} `', title: 'LA_RCBR' },
  // Row 4
  KC_NUBS: { name: '>\n<', title: 'ES_LABK' },
  KC_Z: { name: 'Z', title: 'ES_Z' },
  KC_X: { name: 'X', title: 'ES_X' },
  KC_C: { name: 'C', title: 'ES_C' },
  KC_V: { name: 'V', title: 'ES_V' },
  KC_B: { name: 'B', title: 'ES_B' },
  KC_N: { name: 'N', title: 'ES_N' },
  KC_M: { name: 'M', title: 'ES_M' },
  KC_COMM: { name: ';\n,', title: 'ES_COMM' },
  KC_DOT: { name: ':\n.', title: 'ES_DOT' },
  KC_SLSH: { name: '_\n-', title: 'ES_MINS' },

  /* Shifted symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │ ° │ ! │ " │ # │ $ │ % │ & │ / │ ( │ ) │ = │ ? │ ¡ │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │   │   │   │   │   │   │   │   │   │   │ ¨ │ * │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │   │   │   │   │   │   │   │   │   │   │ [ │ ] │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │ > │   │   │   │   │   │   │   │ ; │ : │ _ │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  'S(KC_GRV)': { name: '°', title: 'LA_MORD' },
  KC_TILD: { name: '°', title: 'LA_MORD' },
  'S(KC_1)': { name: '!', title: 'ES_EXLM' },
  KC_EXLM: { name: '!', title: 'ES_EXLM' },
  'S(KC_2)': { name: '"', title: 'ES_DQUO' },
  KC_AT: { name: '"', title: 'ES_DQUO' },
  'S(KC_3)': { name: '#', title: 'ES_NUMB' },
  KC_HASH: { name: '#', title: 'ES_NUMB' },
  'S(KC_4)': { name: '$', title: 'ES_DLR' },
  KC_DLR: { name: '$', title: 'ES_DLR' },
  'S(KC_5)': { name: '%', title: 'ES_PERC' },
  KC_PERC: { name: '%', title: 'ES_PERC' },
  'S(KC_6)': { name: '&', title: 'ES_AMPR' },
  KC_CIRC: { name: '&', title: 'ES_AMPR' },
  'S(KC_7)': { name: '/', title: 'ES_SLSH' },
  KC_AMPR: { name: '/', title: 'ES_SLSH' },
  'S(KC_8)': { name: '(', title: 'ES_LPRN' },
  KC_ASTR: { name: '(', title: 'ES_LPRN' },
  'S(KC_9)': { name: ')', title: 'ES_RPRN' },
  KC_LPRN: { name: ')', title: 'ES_RPRN' },
  'S(KC_0)': { name: '=', title: 'ES_EQL' },
  KC_RPRN: { name: '=', title: 'ES_EQL' },
  'S(KC_MINS)': { name: '?', title: 'ES_QUES' },
  KC_UNDS: { name: '?', title: 'ES_QUES' },
  'S(KC_EQL)': { name: '¡', title: 'ES_IEXL' },
  KC_PLUS: { name: '¡', title: 'ES_IEXL' },
  // Row 2
  'S(KC_LBRC)': { name: '¨', title: 'ES_DIAE' },
  KC_LCBR: { name: '¨', title: 'ES_DIAE' },
  'S(KC_RBRC)': { name: '*', title: 'ES_ASTR' },
  KC_RCBR: { name: '*', title: 'ES_ASTR' },
  // Row 3
  'S(KC_QUOT)': { name: '[', title: 'ES_LBRC' },
  KC_DQUO: { name: '[', title: 'ES_LBRC' },
  // Row 4
  'S(KC_NUBS)': { name: '>', title: 'ES_RABK' },
  'S(KC_COMM)': { name: ';', title: 'ES_SCLN' },
  KC_LT: { name: ';', title: 'ES_SCLN' },
  'S(KC_DOT)': { name: ':', title: 'ES_COLN' },
  KC_GT: { name: ':', title: 'ES_COLN' },
  'S(KC_SLSH)': { name: '_', title: 'ES_UNDS' },
  KC_QUES: { name: '_', title: 'ES_UNDS' },

  /* AltGr symbols
   * ┌───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───┬───────┐
   * │ ¬ │   │   │   │   │   │   │   │   │   │   │   │ \ │       │
   * ├───┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─────┤
   * │     │   │   │   │   │   │   │   │   │   │   │   │ ~ │     │
   * ├─────┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┬──┴┐    │
   * │      │   │   │   │   │   │   │   │   │   │   │ ^ │ ` │    │
   * ├────┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴─┬─┴───┴────┤
   * │    │   │   │   │   │   │   │   │   │   │   │   │          │
   * ├────┼───┴┬──┴─┬─┴───┴───┴───┴───┴───┴──┬┴───┼───┴┬────┬────┤
   * │    │    │    │                        │    │    │    │    │
   * └────┴────┴────┴────────────────────────┴────┴────┴────┴────┘
   */
  // Row 1
  'ALGR(KC_GRV)': { name: '¬', title: 'LA_LNOT' },
  'ALGR(KC_EQL)': { name: '\\', title: 'LA_BSLS' },
  // Row 2
  'ALGR(KC_RBRC)': { name: '~', title: 'LA_TILD' },
  // Row 3
  'ALGR(KC_QUOT)': { name: '^', title: 'LA_CIRC' },
  'ALGR(KC_NUHS)': { name: '`', title: 'LA_ACUT' },

  /* Other keys */
  KC_BSLS: { name: 'Ç', title: '' },
  'S(KC_BSLS)': { name: 'Ç', title: '' },
  KC_COLN: { name: 'Ñ', title: 'S(ES_NTIL) (capital Ñ)' },
  KC_PIPE: { name: 'Ç', title: 'ES_CCED (capital Ç)' },

  SC_LSPO: { name: 'LS / )', title: 'Left Shift when held, ) when tapped' },
  SC_RSPC: { name: 'RS / =', title: 'Right Shift when held, = when tapped' },
  SC_LCPO: { name: 'LC / )', title: 'Left Control when held, ) when tapped' },
  SC_RCPC: { name: 'RC / =', title: 'Right Control when held, = when tapped' },
  SC_LAPO: { name: 'LA / )', title: 'Left Alt when held, ) when tapped' },
  SC_RAPC: { name: 'RA / =', title: 'Right Alt when held, = when tapped' },

  QK_GESC: {
    name: 'º/ª\nEsc',
    title: 'Esc normally, but º when GUI is active or ª when Shift is active'
  }
};
