export const WA='https://wa.me/923719051704'
export const BOOK=WA+'?text='+encodeURIComponent('Hello, I would like to book an appointment at The Beauty Vault.')
export const TEL='tel:+923719051704'
export const PHONE='0371 9051704'
export const IG='https://www.instagram.com/thebeautyvault_salon/'
export const FB='https://www.facebook.com/people/The-Beauty-Vault-Salon-Aesthetics/61586665697925/'
const S=(t)=>t.trim().split('\n').map(l=>{const[n,p,c]=l.split('|');return{n,p,c}})
const L=(a,b,c,d)=>S(`Shoulder Length|Rs. ${a}\nMid Length|Rs. ${b}\nWaist Length|Rs. ${c}\nLower Back Length|Rs. ${d}`)
export const TABS=[
{id:'hair',label:'Hair',secs:[
 {t:'Hair Cutting',i:S(`Baby Cut with Blow Dry|Rs. 2,000\nBaby Cut without Blow Dry|Rs. 1,500\nTrimming without Blow Dry|Rs. 1,000\nU / V Shape|Rs. 1,500\nAll Hair Cutting with Blow Dry|Rs. 3,500\nAll Hair Cutting without Blow Dry|Rs. 2,000`)},
 {t:'Hair Styling',note:'According to volume & length',i:S(`Party Hair Style|Rs. 3,000\nBlow Dry Only|Rs. 2,500\nStraightening|Rs. 1,500\nBridal Hair Styling|Rs. 5,000\nBeach Waves / Curls|Rs. 3,000`)},
 {t:'Hair Color',i:S(`One Tone Dye|Rs. 4,500\nRoot Touch (1 inch)|Rs. 2,000\nRoot Touch (3 inch)|Rs. 3,000\nRoot + End Application|Rs. 1,000\nHair Wash|Rs. 1,000\nHair Wash with Blow Dry|Rs. 2,500\nShoulder Length|Rs. 6,500\nMid Length|Rs. 8,000\nWaist Length|Rs. 10,000\nLower Back Length|Rs. 15,000`)},
 {t:'Highlights',i:[...L('12,000','15,000','18,000','25,000'),{n:'Balayage',p:'Rs. 15,000+'}]},
 {t:'Lowlights',i:L('10,000','12,000','15,000','18,000')},
 {t:'Keratin',i:L('10,000','12,000','15,000','18,000')},
 {t:'Hair Rebonding',i:L('15,000','18,000','20,000','25,000')},
 {t:'Nanoplastia',i:L('20,000','22,000','25,000','30,000')},
 {t:'Botox',i:L('8,000','12,000','14,000','18,000')}]},
{id:'skin',label:'Skin & Laser',secs:[
 {t:'Facials',i:S(`Janssen Facial|Rs. 8,000\nWhitening RB Facial|Rs. 4,000\nDerma Clear Facial|Rs. 3,500\nHi Lift Facial|Rs. 3,000\nDerma Cos Facial|Rs. 2,500\nSkin Polish|Rs. 800 / 1,500\nDeep Cleansing|Rs. 1,000`)},
 {t:'Hydra Treatments',i:S(`Hydra Mini|Rs. 4,000\nHydra Basic|Rs. 5,500\nHydra Whitening|Rs. 8,500\nHydra Signature|Rs. 10,000\nHydra Acne|Rs. 8,500\nKorean Class Hydra|Rs. 15,000`)},
 {t:'Laser Treatments',i:S(`Full Body Laser|Rs. 20,000\nFull Arm|Rs. 13,000\nFull Legs|Rs. 12,000\nFull Face|Rs. 6,000\nTargeted Each Part|Rs. 1,500\nQW Full Face|Rs. 8,000\nPR Part / Small Part|Rs. 6,000\nLegs / Arms Partial|Rs. 10,000`)},
 {t:'Special Laser Services',i:S(`Poco Laser|Rs. 6,000\nSwitch Laser|Rs. 10,000\nTattoo Removal|Rs. 5,000`)}]},
{id:'spa',label:'Head Spa & Massage',secs:[
 {t:'Korean Head Spa',i:S(`Express Korean Head Spa|Rs. 5,000\nSignature Korean Head Spa|Rs. 8,500\nLuxury Japanese Head Spa|Rs. 12,000\nScalp Detox Therapy|Rs. 3,000\nLED Light Therapy|Rs. 2,000\nHair Mask Treatment|Rs. 2,500\nBridal Hair Prep Spa|Rs. 10,000`)},
 {t:'Massage',i:S(`Head Massage|Rs. 1,000|15 min\nNeck & Shoulder|Rs. 1,200|15 min\nBack Massage|Rs. 1,800|20 min\nArms & Hands Massage|Rs. 1,200|15 min\nLegs Massage|Rs. 2,000|20 min\nFeet Massage|Rs. 1,000|15 min\nFull Body Massage|Rs. 6,000|60 min`)}]},
{id:'nails',label:'Nails & Lashes',secs:[
 {t:'Nail Extensions',i:S(`Acrylic Nails|Rs. 6,000\nTemporary Nails|Rs. 3,000\nNail Art|Rs. 2,000\nGel Nails|Rs. 6,000\nAcrylic Nail Removal|Rs. 2,000\nGel Nail Removal|Rs. 3,000\nFrench Gel|Rs. 6,500`)},
 {t:'Manicure',i:S(`Spa Luxury|Rs. 3,000\nHi Lift|Rs. 2,500\nDerma Cos|Rs. 2,000\nSoft Touch|Rs. 1,500`)},
 {t:'Pedicure',i:S(`Spa Luxury|Rs. 3,500\nHi Lift|Rs. 3,000\nDerma Cos|Rs. 2,500\nSoft Touch|Rs. 2,000`)},
 {t:'Eyelash Extensions',i:S(`Classic Set|Rs. 4,000\nCat Eye Set|Rs. 2,000\nVolume Set|Rs. 8,000\nWispy Set|Rs. 2,000\nHybrid Set|Rs. 6,000\nRemoval Lash Extension|Rs. 3,000`)}]},
{id:'wax',label:'Waxing & Threading',secs:[
 {t:'Rica Wax',i:S(`Full Arms|Rs. 1,000\nHalf Arms|Rs. 500\nFull Legs|Rs. 1,500\nHalf Legs|Rs. 700\nUnderarms|Rs. 600\nUnder Legs|Rs. 2,000\nNeck & Back|Rs. 1,500\nFull Body|Rs. 5,000`)},
 {t:'Threading',i:S(`Eyebrow|Rs. 200|with wax Rs. 300\nUpper Lips|Rs. 100|with wax Rs. 150\nForehead|Rs. 200|with wax Rs. 300\nFull Face|Rs. 800|with wax Rs. 1,200`)}]},
{id:'bridal',label:'Makeup & Mehndi',secs:[
 {t:'Make Up',i:S(`Barat Bridal with services|Rs. 45,000\nWalima Bridal|Rs. 35,000\nMehndi Bridal|Rs. 20,000\nNikah Bridal|Rs. 20,000\nEngagement Makeup|Rs. 20,000\nSenior Party Makeup|Rs. 7,000\nSignature Party Makeup|Rs. 10,000`)},
 {t:'Mehndi',i:S(`Fingers Mehndi|Rs. 500\nHand Mehndi (Front Side)|Rs. 800\nHand Mehndi (Front+Back)|Rs. 2,000\nHalf Arm Mehndi|Rs. 2,000\nFull Arm Mehndi|Rs. 3,000\nFeet Mehndi (Front Side)|Rs. 8,000\nFeet Mehndi (Front + Back)|Rs. 2,000\nFull Feet Mehndi|Rs. 3,000\nBridal Hand Mehndi|Rs. 5,000+\nBridal Mehndi (Hands & Feet)|Rs. 8,000+`)}]}]
export const PACKS=[{n:'3 Sessions',d:'Hair Fall',p:'Rs. 22,000'},{n:'4 Sessions',d:'Monthly Detox',p:'Rs. 18,000'},{n:'Bridal Glow',d:'2 Sessions',p:'Rs. 18,000'}]
