var fs = require('fs');

var emails = [
  {
    "email": "acapamo@gmail.com"
  },
  {
    "email": "acmilone@das.inpe.br"
  },
  {
    "email": "ade.lazarini@gmail.com"
  },
  {
    "email": "ademireagiraldelli@gmail.com"
  },
  {
    "email": "adriana_2_adriananilcecruz@hotmail.com"
  },
  {
    "email": "adriananilcecruz@hotmail.com"
  },
  {
    "email": "adrianaobernardes@uol.com.br"
  },
  {
    "email": "adriano74lima@yahoo.com.br"
  },
  {
    "email": "afonsozucco@gmail.com"
  },
  {
    "email": "afranco231@gmail.com"
  },
  {
    "email": "agatha.santana@yahoo.com.br"
  },
  {
    "email": "airtoncesar03@gmail.com"
  },
  {
    "email": "ajjmineiro@gmail.com"
  },
  {
    "email": "alainegm@yahoo.com.br"
  },
  {
    "email": "alan.toribio@ufes.br"
  },
  {
    "email": "albertoaepa@gmail.com"
  },
  {
    "email": "albuquerque_kaleb@hotmail.com"
  },
  {
    "email": "alcionecaetano9@gmail.com"
  },
  {
    "email": "aldmoreau@yahoo.com.br"
  },
  {
    "email": "ale.plie@hotmail.com"
  },
  {
    "email": "alebagdonas@gmail.com"
  },
  {
    "email": "alechicarelli@hotmail.com"
  },
  {
    "email": "alessandradbuffon@gmail.com"
  },
  {
    "email": "alessandrasouzateixeira@gmail.com"
  },
  {
    "email": "alessandro.garcia@usp.br"
  },
  {
    "email": "alexandrageografia@hotmail.com"
  },
  {
    "email": "alexandre.bagdonas@usp.br"
  },
  {
    "email": "alferreira@utfpr.edu.br"
  },
  {
    "email": "aline_salmeida@yahoo.com.br"
  },
  {
    "email": "aline.mota@ifrj.edu.br"
  },
  {
    "email": "ALINEMOTA83@GMAIL.COM"
  },
  {
    "email": "alinnemalu@gmail.com"
  },
  {
    "email": "aliseecreri@gmail.com"
  },
  {
    "email": "alvaro@upf.br"
  },
  {
    "email": "aly.sasso@gmail.com"
  },
  {
    "email": "amancio@astro.iag.usp.br"
  },
  {
    "email": "amelia0208@yahoo.com.ar"
  },
  {
    "email": "amigobrasilio@yahoo.com.br"
  },
  {
    "email": "amotta@ifsc.edu.br"
  },
  {
    "email": "ana.spitzer.pereira@gmail.com"
  },
  {
    "email": "ana4.oliveira@usp.br"
  },
  {
    "email": "anaclarissakolbow@hotmail.com"
  },
  {
    "email": "anacmartins@hotmail.com"
  },
  {
    "email": "anacristinasanches@pucminas.br"
  },
  {
    "email": "anafabi.ufms@gmail.com"
  },
  {
    "email": "anajafonso@bol.com.br"
  },
  {
    "email": "anamariallara@yahoo.com.br"
  },
  {
    "email": "anamariavieira@anapolis.go.gov.br"
  },
  {
    "email": "anapaulavc.sp@gmail.com"
  },
  {
    "email": "anaptg34@yahoo.com.br"
  },
  {
    "email": "andersonprimeiro@gmail.com"
  },
  {
    "email": "andrade.renatade@gmail.com"
  },
  {
    "email": "andradeneto1_uefs@yahoo.com.br"
  },
  {
    "email": "andrea.greff@usp.br"
  },
  {
    "email": "andreagreff@gmail.com"
  },
  {
    "email": "andressa.meloj@gmail.com"
  },
  {
    "email": "andreza.concheti@usp.br"
  },
  {
    "email": "andromedabl@gmail.com"
  },
  {
    "email": "angel_honorato@hotmail.com"
  },
  {
    "email": "angeladiascmrj@gmail.com"
  },
  {
    "email": "angelhonorato@alunos.utfpr.edu.br"
  },
  {
    "email": "angelita_3_lima_angel@yahoo.com"
  },
  {
    "email": "aninha.pietscher@gmail.com"
  },
  {
    "email": "anisio_l@yahoo.com.br"
  },
  {
    "email": "anisio@pnfm.pr.gov.br"
  },
  {
    "email": "anne@if.usp.br"
  },
  {
    "email": "antonio.araujo@ifrn.edu.br"
  },
  {
    "email": "antoniofisico@yahoo.com"
  },
  {
    "email": "antoniolamadeu@uol.com.br"
  },
  {
    "email": "antoniolfj@hotmail.com"
  },
  {
    "email": "apabarros@gmail.com"
  },
  {
    "email": "aqsil@uol.com.br"
  },
  {
    "email": "aquinocaico@gmail.com"
  },
  {
    "email": "arilson.paganotti@ifmg.edu.br"
  },
  {
    "email": "arpiani@terra.com.br"
  },
  {
    "email": "arthobias@uol.com.br"
  },
  {
    "email": "arthurlouco@gmail.com"
  },
  {
    "email": "arthursanti@gmail.com"
  },
  {
    "email": "arthursantiago@ifsp.edu.br"
  },
  {
    "email": "arthuruftm@gmail.com"
  },
  {
    "email": "arturjustiniano@gmail.com"
  },
  {
    "email": "asimi@ig.com.br"
  },
  {
    "email": "assis@ifi.unicamp.br"
  },
  {
    "email": "astronauta@marcospontes.com.br"
  },
  {
    "email": "astronautamp@uol.com.br"
  },
  {
    "email": "astronomocalil@gmail.com"
  },
  {
    "email": "atomyc2000@yahoo.com.br"
  },
  {
    "email": "augustobrunno@hotmail.com"
  },
  {
    "email": "aurea.marcels@gmail.com"
  },
  {
    "email": "autastella@yahoo.com.br"
  },
  {
    "email": "aysses@hotmail.com"
  },
  {
    "email": "barbara.linno@terra.com.br"
  },
  {
    "email": "beatriz_batista40@hotmail.com"
  },
  {
    "email": "beco18291@gmail.com"
  },
  {
    "email": "beigrin@uol.com.br"
  },
  {
    "email": "benevenuttimateus@gmail.com"
  },
  {
    "email": "betachiesa@gmail.com"
  },
  {
    "email": "betinho_andretta@hotmail.com"
  },
  {
    "email": "biancagellacic@hotmail.com"
  },
  {
    "email": "biavictory@hotmail.com"
  },
  {
    "email": "biguabiguaverde@gmail.com"
  },
  {
    "email": "boczko@astro.iag.usp.br"
  },
  {
    "email": "borragini@yahoo.com.br"
  },
  {
    "email": "botorosado.mariadocarmo@gmail.com"
  },
  {
    "email": "brea.maria@gmail.com"
  },
  {
    "email": "brendonmbmobile@gmail.com"
  },
  {
    "email": "bretones@mpc.com.br"
  },
  {
    "email": "bruna_senra@yahoo.com.br"
  },
  {
    "email": "brunaraissags@gmail.com"
  },
  {
    "email": "bruno.sl2025@gmail.com"
  },
  {
    "email": "brunog.gallas@gmail.com"
  },
  {
    "email": "brunosl2009@hotmail.com"
  },
  {
    "email": "bruxel.g@gmail.com"
  },
  {
    "email": "bzaniboni@gmail.com"
  },
  {
    "email": "caasy72@gmail.com"
  },
  {
    "email": "cacahygino@yahoo.com.br"
  },
  {
    "email": "caduquin@gmail.com"
  },
  {
    "email": "caluefs@gmail.com"
  },
  {
    "email": "camilabarel@ymail.com"
  },
  {
    "email": "camilabtn@ymail.com"
  },
  {
    "email": "camiladavila@ymail.com"
  },
  {
    "email": "camiladebom@yahoo.com.br"
  },
  {
    "email": "camilafesoares@hotmail.com"
  },
  {
    "email": "camilla.merlo@usp.br"
  },
  {
    "email": "carla.aprillady@gmail.com"
  },
  {
    "email": "carla16ster@gmail.com"
  },
  {
    "email": "carlos_kibeatle@hotmail.com"
  },
  {
    "email": "carlosdneres@gmail.com"
  },
  {
    "email": "carolinawx@gmail.com"
  },
  {
    "email": "caroline.ghiggi@hotmail.com"
  },
  {
    "email": "caroline.lacerda@ufrgs.br"
  },
  {
    "email": "caroline.portela@ifpr.edu.br"
  },
  {
    "email": "carvalho.isadora@ymail.com"
  },
  {
    "email": "cassiscostamoreira@gmail.com"
  },
  {
    "email": "cazari2011@hotmail.com"
  },
  {
    "email": "cbrauwers@universo.univates.br"
  },
  {
    "email": "celialopespcnpe@gmail.com"
  },
  {
    "email": "celiomuniz@yahoo.com"
  },
  {
    "email": "cgmsilva@sga.pucminas.br"
  },
  {
    "email": "cherubinster@gmail.com"
  },
  {
    "email": "christnogueira@yahoo.com.br"
  },
  {
    "email": "cibele.sidney@gmail.com"
  },
  {
    "email": "ciriafisica@gmail.com"
  },
  {
    "email": "claretoile@yahoo.com.br"
  },
  {
    "email": "clarissachevalier@hotmail.com"
  },
  {
    "email": "claudia.zanatta@ufrgs.br"
  },
  {
    "email": "claudiana.fisica.ifnmg@gmail.com"
  },
  {
    "email": "claudiohpb@gmail.com"
  },
  {
    "email": "claudiopcopdefisica@hotmail.com"
  },
  {
    "email": "cleliadepaulamarques@gmail.com"
  },
  {
    "email": "cleonimendonca@yahoo.com.br"
  },
  {
    "email": "cleonirs@yahoo.com.br"
  },
  {
    "email": "cleytonfernando_27@hotmail.com"
  },
  {
    "email": "clistines.merlucci@gmail.com"
  },
  {
    "email": "clistines.merlucci@usp.br"
  },
  {
    "email": "cmenoli@yahoo.com.br"
  },
  {
    "email": "conceicao_mendonca@hotmail.com"
  },
  {
    "email": "costeira1@gmail.com"
  },
  {
    "email": "costeira1@yahoo.com"
  },
  {
    "email": "cris.giolo@hotmail.com.br"
  },
  {
    "email": "criscontel@bol.com.br"
  },
  {
    "email": "crismilk@if.usp.br"
  },
  {
    "email": "cristianegrumm@yahoo.com.br"
  },
  {
    "email": "cruz.van@hotmail.com"
  },
  {
    "email": "daipellenz@gmail.com"
  },
  {
    "email": "damiana.ufg@gmail.com"
  },
  {
    "email": "dani.bpavani@gmail.com"
  },
  {
    "email": "daniel.germinaro@hotmail.com"
  },
  {
    "email": "daniel.raimann@udesc.br"
  },
  {
    "email": "daniel@icene.uftm.edu.br"
  },
  {
    "email": "daniela.itz@ifma.edu.br"
  },
  {
    "email": "danielcsnaturales@yahoo.com.ar"
  },
  {
    "email": "daniella.fisica@gmail.com"
  },
  {
    "email": "Danielle Themila Magalhães"
  },
  {
    "email": "danielmicha@hotmail.com"
  },
  {
    "email": "danisleib@utfpr.edu.br"
  },
  {
    "email": "danylosemim@hotmail.com"
  },
  {
    "email": "dayane.diaz@gmail.com"
  },
  {
    "email": "dayanefsilva@gmail.com"
  },
  {
    "email": "dayrepossi@gmail.com"
  },
  {
    "email": "dccarmo@gmail.com"
  },
  {
    "email": "de_canovas@hotmail.com"
  },
  {
    "email": "debora-rabello@hotmail.com"
  },
  {
    "email": "decampinasleste.adrianag@gmail.com"
  },
  {
    "email": "dede.maia1@gmail.com"
  },
  {
    "email": "denesfarias@gmail.com"
  },
  {
    "email": "denis.peixoto@yahoo.com.br"
  },
  {
    "email": "denisegrsanches@gmail.com"
  },
  {
    "email": "desiree.dornelles@ufrgs.br"
  },
  {
    "email": "diego.albuquerque@msn.com"
  },
  {
    "email": "dieinifercbz@gmail.com"
  },
  {
    "email": "dinalvabat71@gmail.com"
  },
  {
    "email": "dinho_mg12@hotmail.com"
  },
  {
    "email": "dionizio@fisica.uftm.edu.br"
  },
  {
    "email": "dora.dm@gmail.com"
  },
  {
    "email": "douglas_termodinamica@ig.com.br"
  },
  {
    "email": "douglas@mast.br"
  },
  {
    "email": "dpavani@if.ufrgs.br"
  },
  {
    "email": "drack_golias@hotmail.com"
  },
  {
    "email": "dreia_zanatti@hotmail.com"
  },
  {
    "email": "drunim@gmail.com"
  },
  {
    "email": "dsanzovo@uenp.edu.br"
  },
  {
    "email": "duarteheitor@hotmail.com"
  },
  {
    "email": "dulcegeol5@gmail.com"
  },
  {
    "email": "dulcineia_unesp@yahoo.com.br"
  },
  {
    "email": "e-sanches-oliveira@hotmail.com"
  },
  {
    "email": "eaotavio@facebook.com"
  },
  {
    "email": "edbig@uol.com.br"
  },
  {
    "email": "edheneson_moraes@outlook.com"
  },
  {
    "email": "edianabarp@gmail.com"
  },
  {
    "email": "edineuza22@hotmail.com"
  },
  {
    "email": "edite.anjos2013@hotmail.com"
  },
  {
    "email": "edmarmontelli@hotmail.com"
  },
  {
    "email": "edmilson@uems.br"
  },
  {
    "email": "edsonpgonzaga@gmail.com"
  },
  {
    "email": "eduardo.saracol@hotmail.com"
  },
  {
    "email": "edvecchia@yahoo.com.br"
  },
  {
    "email": "efigueredo@astro.iag.usp.br"
  },
  {
    "email": "elaine.apolinario@gail.com"
  },
  {
    "email": "ELAINE.APOLINARIO@GMAIL.COM"
  },
  {
    "email": "elciopcop@hotmail.com"
  },
  {
    "email": "eli_honorio@hotmail.com"
  },
  {
    "email": "eliana.borragini@caxias.ifrs.edu.br"
  },
  {
    "email": "eliasdkrvalho@hotmail.com"
  },
  {
    "email": "elisedente@universo.univates.br"
  },
  {
    "email": "elisetedionisio@hotmail.com"
  },
  {
    "email": "eliza.dias09@hotmail.com"
  },
  {
    "email": "ellenfisicaufms@gmail.com"
  },
  {
    "email": "elohiwa@yahoo.com.br"
  },
  {
    "email": "elrismar@gmail.com"
  },
  {
    "email": "elzapera@seed.pr.gov.br"
  },
  {
    "email": "emanuel_porto@hotmail.com"
  },
  {
    "email": "emersonfg@usp.br"
  },
  {
    "email": "eraldo.barros@gmail.com"
  },
  {
    "email": "ericagoncalves@hotmail.com"
  },
  {
    "email": "erika.kenia@gmail.com"
  },
  {
    "email": "erikamilenasouza@gmail.com"
  },
  {
    "email": "erocha@usp.br"
  },
  {
    "email": "erquiniot_74@yahoo.com"
  },
  {
    "email": "eugenior@rc.unesp.br"
  },
  {
    "email": "evaristoatp@gmail.com"
  },
  {
    "email": "evelendias@hotmail.com"
  },
  {
    "email": "everaldo_faustino@yahoo.com.br"
  },
  {
    "email": "everaldolima1@yahoo.com.br"
  },
  {
    "email": "everton.silva@ufsc.br"
  },
  {
    "email": "evoniralbrecht@gmail.com"
  },
  {
    "email": "evoniralbrecht@yahoo.com.br"
  },
  {
    "email": "f.petronio@yahoo.com.br"
  },
  {
    "email": "fabi_oliveira_15@hotmail.com"
  },
  {
    "email": "fabianahmg@hotmail.com"
  },
  {
    "email": "fabio_mitsuse@yahoo.com.br"
  },
  {
    "email": "fabionicodemos@yahoo.com.br"
  },
  {
    "email": "fabrizioribeiro@yahoo.com.br"
  },
  {
    "email": "fabrizzio_cam@hotmail.com"
  },
  {
    "email": "fachada@gmail.com"
  },
  {
    "email": "farina@if.ufrj.br"
  },
  {
    "email": "fatima@if.ufrgs.br"
  },
  {
    "email": "fcipreste@gmail.com"
  },
  {
    "email": "felinperipolli@gmail.com"
  },
  {
    "email": "felipa.silveira@gmail.com"
  },
  {
    "email": "felipe_augusto1995@outlook.com"
  },
  {
    "email": "felipe.vasconcelos@yahoo.com.br"
  },
  {
    "email": "felisberto.tst@gmail.com"
  },
  {
    "email": "felisjcb@gmail.com"
  },
  {
    "email": "fer.rezendebio@gmail.com"
  },
  {
    "email": "Ferdinando Zapparoli"
  },
  {
    "email": "fernanda.marchi.oliveira@usp.br"
  },
  {
    "email": "fernandamarchi@gmail.com"
  },
  {
    "email": "fernando.vieira@planetario.rio.rj.gov.br"
  },
  {
    "email": "fernandoc2.campos@gmail.com"
  },
  {
    "email": "fernandorja@gmail.com"
  },
  {
    "email": "ferraresso.felipe@gmail.com"
  },
  {
    "email": "filipe_kelmer@hotmail.com"
  },
  {
    "email": "fis.wesley@gmail.com"
  },
  {
    "email": "fisic.ana@ig.com.br"
  },
  {
    "email": "fisicawagner@ig.com.br"
  },
  {
    "email": "flavia.lima@planetario.rio.rj.gov.br"
  },
  {
    "email": "flavia.polati.ferreira@usp.br"
  },
  {
    "email": "flaviacdemello@yahoo.com.br"
  },
  {
    "email": "flaviapolati@gmail.com"
  },
  {
    "email": "flavioaraujo_@hotmail.com"
  },
  {
    "email": "flinharesfisica@gmail.com"
  },
  {
    "email": "florczak@utfpr.edu.br"
  },
  {
    "email": "foton@astro.iag.usp.br"
  },
  {
    "email": "foton@iag.usp.br"
  },
  {
    "email": "france.vasconcelos@gmail.com"
  },
  {
    "email": "france@farrapo.com.br"
  },
  {
    "email": "francelesilva@yahoo.com.br"
  },
  {
    "email": "franciney@ufpa.br"
  },
  {
    "email": "francisco.assis@usp.br"
  },
  {
    "email": "frannklinn@bol.com.br"
  },
  {
    "email": "gabiortelan@hotmail.com"
  },
  {
    "email": "gabri-arg@hotmail.com"
  },
  {
    "email": "gabriel.martell@ufrgs.br"
  },
  {
    "email": "gabrielhickel@unifei.edu.br"
  },
  {
    "email": "gabrielmoreirabarros@gmail.com"
  },
  {
    "email": "gabrielsena.eng@gmail.com"
  },
  {
    "email": "gabyeteda@yahoo.com.br"
  },
  {
    "email": "galvao_cesar@hotmail.com"
  },
  {
    "email": "gaston.henriquez@mackenzie.br"
  },
  {
    "email": "gfmarranghello@gmail.com"
  },
  {
    "email": "ginebro42@gmail.com"
  },
  {
    "email": "gldornelles@gmail.com"
  },
  {
    "email": "gleiceclarice@gmail.com"
  },
  {
    "email": "glenon.bh@gmail.com"
  },
  {
    "email": "gloriapcq@gmail.com"
  },
  {
    "email": "gloriaq@superig.com.br"
  },
  {
    "email": "greifellbiologo@gmail.com"
  },
  {
    "email": "grfisica2010@gmail.com"
  },
  {
    "email": "guga@univap.br"
  },
  {
    "email": "guilherme@teletecno.com"
  },
  {
    "email": "guilhermesspires@gmail.com"
  },
  {
    "email": "hannygomide@yahoo.com.br"
  },
  {
    "email": "helena.steffani@ufrgs.br"
  },
  {
    "email": "helena11@astro.ufrj.br"
  },
  {
    "email": "helenicemiranda.o@gmail.com"
  },
  {
    "email": "helton.martinez@usp.br"
  },
  {
    "email": "hgiannini@gmail.com"
  },
  {
    "email": "honel@cdcc.usp.br"
  },
  {
    "email": "huebagsorg@gmail.com"
  },
  {
    "email": "i_ngridf@hotmail.com"
  },
  {
    "email": "ig_kamimura@hotmail.com"
  },
  {
    "email": "ines.mat.sena@gmail.com"
  },
  {
    "email": "isa_marinho3@hotmail.com"
  },
  {
    "email": "isa.marcelina@gmail.com"
  },
  {
    "email": "isaiasufrb@gmail.com"
  },
  {
    "email": "ismais@hotmail.com"
  },
  {
    "email": "ivan.silva@ufabc.edu.br"
  },
  {
    "email": "izabelitaperon@yahoo.com.br"
  },
  {
    "email": "izabellamoraes@yahoo.com.br"
  },
  {
    "email": "j_diniz4@hotmail.com"
  },
  {
    "email": "JACK_SANTOSS2@HOTMAIL.COM"
  },
  {
    "email": "jackdanielsgo@gmail.com"
  },
  {
    "email": "jafelice@dfte.ufrn.br"
  },
  {
    "email": "jams1000@yahoo.com"
  },
  {
    "email": "janetelapas@gmail.com"
  },
  {
    "email": "janinhap@gmail.com"
  },
  {
    "email": "jantorres@ibest.com.br"
  },
  {
    "email": "jascjr@gmail.com"
  },
  {
    "email": "jay.t.carriel@gmail.com"
  },
  {
    "email": "jbfisica@bol.com.br"
  },
  {
    "email": "jbuenojunior@hotmail.com"
  },
  {
    "email": "jcklafke@gmail.com"
  },
  {
    "email": "jcosta@zenite.nu"
  },
  {
    "email": "jcpolli_fisica@yahoo.com.br"
  },
  {
    "email": "jesicaalves_15@yahoo.com.br"
  },
  {
    "email": "jessy_santos_@hotmail.com"
  },
  {
    "email": "jfvroch@gmail.com"
  },
  {
    "email": "jhederfcampos@gmail.com"
  },
  {
    "email": "Jimmy Hendrix Ferreira"
  },
  {
    "email": "jj.souza05@gmail.com"
  },
  {
    "email": "jlmrosalem@bol.com.br"
  },
  {
    "email": "jmacielbreganholi@ibest.com.br"
  },
  {
    "email": "jndeinho7@gmail.com"
  },
  {
    "email": "joaocanalle@gmail.com"
  },
  {
    "email": "joaoframos@usp.br"
  },
  {
    "email": "joaojuniorlca@gmail.com"
  },
  {
    "email": "jobioipira@yahoo.com.br"
  },
  {
    "email": "joesley@live.com"
  },
  {
    "email": "jose.edson.600@hotmail.com"
  },
  {
    "email": "joseangel.docobo@usc.es"
  },
  {
    "email": "joselizamachado@uol.com.br"
  },
  {
    "email": "josiane.fisica@gmail.com"
  },
  {
    "email": "josianedicarvalho@gmail.com"
  },
  {
    "email": "josiani_1500@hotmail.com"
  },
  {
    "email": "josieaps@hotmail.com"
  },
  {
    "email": "josimeire@ufscar.br"
  },
  {
    "email": "jow2112@yahoo.com.br"
  },
  {
    "email": "jpbritosiqueira@hotmail.com"
  },
  {
    "email": "jperthal@gmail.com"
  },
  {
    "email": "jromanzini@uel.br"
  },
  {
    "email": "jrpiffer@professor.sp.gov.br"
  },
  {
    "email": "jrsleao@gmail.com"
  },
  {
    "email": "juaumefr@gmail.com"
  },
  {
    "email": "jujou@seed.pr.gov.br"
  },
  {
    "email": "julesoares@gmail.com"
  },
  {
    "email": "julia.bcoles@gmail.com"
  },
  {
    "email": "juliana.dct@anapolis.go.gov.br"
  },
  {
    "email": "julianacilento07@gmail.com"
  },
  {
    "email": "juniarani@gmail.com"
  },
  {
    "email": "junior_neiverth@hotmail.com"
  },
  {
    "email": "junior.netmaster@gmail.com"
  },
  {
    "email": "juraci.sotero@jna.ifmt.edu.br"
  },
  {
    "email": "juromanzini@hotmail.com"
  },
  {
    "email": "jussaraamfe@yahoo.com.br"
  },
  {
    "email": "jussaraba@ig.com.br"
  },
  {
    "email": "k2.kaka@hotmail.com"
  },
  {
    "email": "kakacoelho23@ig.com.br"
  },
  {
    "email": "karime.fisica@gmail.com"
  },
  {
    "email": "katia_1manoroa@terra.com.br"
  },
  {
    "email": "katiafgp@hotmail.com"
  },
  {
    "email": "keissy.carla@gmail.com"
  },
  {
    "email": "kelen_silvag@hotmail.com"
  },
  {
    "email": "kkstimer@uol.com.br"
  },
  {
    "email": "klaudianababy@hotmail.com"
  },
  {
    "email": "kleytonms@hotmail.com"
  },
  {
    "email": "klismanroseira@gmail.com"
  },
  {
    "email": "krebs@ufpel.edu.br"
  },
  {
    "email": "l.a.cavalcante@outlook.com"
  },
  {
    "email": "l.scarinci@gmail.com"
  },
  {
    "email": "lacerda.flaubert@usp.br"
  },
  {
    "email": "lago@usp.br"
  },
  {
    "email": "lagonzatti@bewnet.com.br"
  },
  {
    "email": "lagr1970@gmail.com"
  },
  {
    "email": "lapdt@hotmail.com"
  },
  {
    "email": "laplace2005@hotmail.com"
  },
  {
    "email": "larissa-vs@hotmail.com"
  },
  {
    "email": "laura_lacerda@terra.com.br"
  },
  {
    "email": "laura.nevesdoamaral@gmail.com"
  },
  {
    "email": "layla_cris@yahoo.com.br"
  },
  {
    "email": "lazaracastrillo@hotmail.com"
  },
  {
    "email": "lazzaro@on.br"
  },
  {
    "email": "lbpaixao@gmail.com"
  },
  {
    "email": "leandro_faria@yahoo.com.br"
  },
  {
    "email": "leandrocasf@hotmail.com"
  },
  {
    "email": "leandrolsguedes@gmail.com"
  },
  {
    "email": "leandrosf_@hotmail.com"
  },
  {
    "email": "leandrosta2009@hotmail.com"
  },
  {
    "email": "leanmarques@yahoo.com.br"
  },
  {
    "email": "leaoanaflavia5@gmail.com"
  },
  {
    "email": "leiabert@hotmail.com"
  },
  {
    "email": "leiiana@hotmail.com"
  },
  {
    "email": "lekerber@gmail.com"
  },
  {
    "email": "lele_pgd@hotmail.com"
  },
  {
    "email": "lendoomundo@yahoo.com.br"
  },
  {
    "email": "lenisefagundes@gmail.com"
  },
  {
    "email": "leo_rosa@hotmail.com"
  },
  {
    "email": "leo.pandori@professor.sp.gov.br"
  },
  {
    "email": "leoborossi@hotmail.com"
  },
  {
    "email": "leonardo.a.ramos@gmail.com"
  },
  {
    "email": "leonardo.astronomia@gmail.com"
  },
  {
    "email": "leonardobarbosat@hotmail.com"
  },
  {
    "email": "leonardocmlc@hotmail.com"
  },
  {
    "email": "LEROY@PUCMINAS.BR"
  },
  {
    "email": "lesado_feliz@yahoo.com.br"
  },
  {
    "email": "leticia_duc@hotmail.com"
  },
  {
    "email": "lhuppe@hotmail.com"
  },
  {
    "email": "liasilva1@hotmail.com"
  },
  {
    "email": "lidia.santana@usp.br"
  },
  {
    "email": "lidiacarla2016@gmail.com"
  },
  {
    "email": "lidianekamargo@hotmail.com"
  },
  {
    "email": "lilian.kr@gmail.com"
  },
  {
    "email": "lima_angel@yahoo.com.br"
  },
  {
    "email": "lipecsnv@yahoo.com.br"
  },
  {
    "email": "lizangelaalmeida@gmail.com"
  },
  {
    "email": "lopesalmir@hotmail.com"
  },
  {
    "email": "loucaemcena@gmail.com"
  },
  {
    "email": "lpiragua@gmail.com"
  },
  {
    "email": "lppiassi@gmail.com"
  },
  {
    "email": "lppiassi@usp.br"
  },
  {
    "email": "lsousaandrade@gmail.com"
  },
  {
    "email": "ltaliuli@gmail.com"
  },
  {
    "email": "luanapriscila.p@gmail.com"
  },
  {
    "email": "luancar@seed.pr.gov.br"
  },
  {
    "email": "luangrlima@gmail.com"
  },
  {
    "email": "lucas.gbarros100@gmail.com"
  },
  {
    "email": "lucasdesouza.n@gmail.com"
  },
  {
    "email": "lucianoadley@yahoo.com.br"
  },
  {
    "email": "lucianomatematica@ig.com.br"
  },
  {
    "email": "lucilasrmaioli@yahoo.com.br"
  },
  {
    "email": "lucinhacosta@uol.com.br"
  },
  {
    "email": "luisateodoro-@hotmail.com"
  },
  {
    "email": "luisfernandogf@gmail.com"
  },
  {
    "email": "luismattos@professor.com.br"
  },
  {
    "email": "luismattos@professor.sp.gov.br"
  },
  {
    "email": "luismucciaroni03@gmail.com"
  },
  {
    "email": "luispaulobarros@ymail.com"
  },
  {
    "email": "luizvendramini@yahoo.com.br"
  },
  {
    "email": "Lukas.nog_@hotmail.com"
  },
  {
    "email": "luziania@gmail.com"
  },
  {
    "email": "luzthiago@hotmail.com"
  },
  {
    "email": "lys.figueredo@iag.usp.br"
  },
  {
    "email": "mabans@lna.br"
  },
  {
    "email": "madejsky@uefs.br"
  },
  {
    "email": "madinhaalves10@yahoo.com.br"
  },
  {
    "email": "mafrafm@hotmail.com"
  },
  {
    "email": "magn.fis@gmail.com"
  },
  {
    "email": "magno.dias@ifnmg.edu.br"
  },
  {
    "email": "magnuntkd@gmail.com"
  },
  {
    "email": "mahavantara@hotmail.com"
  },
  {
    "email": "mahiramaiasant@gmail.com"
  },
  {
    "email": "maihf18@hotmail.com"
  },
  {
    "email": "mainara_m.l@hotmail.com"
  },
  {
    "email": "mairtoncavalcante@gmail.com"
  },
  {
    "email": "mali.paladini@gmail.com"
  },
  {
    "email": "maluf@utfpr.edu.br"
  },
  {
    "email": "manoeljunior77@yahoo.com.br"
  },
  {
    "email": "manoroa@terra.com.br"
  },
  {
    "email": "marcelindo_01@hotmail.com"
  },
  {
    "email": "marcelindo_16@hotmail.com"
  },
  {
    "email": "Marcelo Alves de Carvalho"
  },
  {
    "email": "Marcelo Emilio"
  },
  {
    "email": "marceloamorim@ipojuca.ifpe.edu.br"
  },
  {
    "email": "marcia.modelab@gmail.com"
  },
  {
    "email": "marcia.ssaturnino@gmail.com"
  },
  {
    "email": "marciapereira@ceunes.ufes.br"
  },
  {
    "email": "marcio_5_marciofisica.edu@hotmail.com"
  },
  {
    "email": "marcio.almeida@ifro.edu.br"
  },
  {
    "email": "marcio.fessel@gmail.com"
  },
  {
    "email": "marcio.malacarne@gmail.com"
  },
  {
    "email": "marco.santo@ifrj.edu.br"
  },
  {
    "email": "marcondesavelar@yahoo.com.br"
  },
  {
    "email": "marconibarros05@gmail.com"
  },
  {
    "email": "Marcos Daniel Longhini"
  },
  {
    "email": "marcos@ifsc.edu.br"
  },
  {
    "email": "marcosantoniopaz@ymail.com"
  },
  {
    "email": "marcosflorczak@gmail.com"
  },
  {
    "email": "marcososhiro@gmail.com"
  },
  {
    "email": "marecarta@yahoo.com.br"
  },
  {
    "email": "maria-amelia-monteiro@uol.com.br"
  },
  {
    "email": "maria.alvarez45@hotmail.com"
  },
  {
    "email": "maria.sa@ifma.edu.br"
  },
  {
    "email": "mariamelia00@gmail.com"
  },
  {
    "email": "mariellapatti@gmail.com"
  },
  {
    "email": "marifis_uefs@hotmail.com"
  },
  {
    "email": "marifrds@yahoo.com.br"
  },
  {
    "email": "marilaine.souza@hotmail.com"
  },
  {
    "email": "marildogp@gmail.com"
  },
  {
    "email": "mariluza66@hotmail.com"
  },
  {
    "email": "marinacruz_2005@hotmail.com"
  },
  {
    "email": "marinacruz@alunos.utfpr.edu.br"
  },
  {
    "email": "marinamitiek@yahoo.com.br"
  },
  {
    "email": "marinasilveira.eng@gmail.com"
  },
  {
    "email": "marisayortiz@hotmail.com"
  },
  {
    "email": "martadesouza@gmail.com"
  },
  {
    "email": "martasouza@usp.br"
  },
  {
    "email": "martasusana57@live.com.ar"
  },
  {
    "email": "martincruisk@hotmail.com"
  },
  {
    "email": "martinsfisica@gmail.com"
  },
  {
    "email": "mateusabezerra@gmail.com"
  },
  {
    "email": "Matheus Rodrigues da Silva"
  },
  {
    "email": "matheus_spalhares@hotmail.com"
  },
  {
    "email": "matheus.tekila@gmail.com"
  },
  {
    "email": "matheusfrare@gmail.com"
  },
  {
    "email": "mathhawk@hotmail.com"
  },
  {
    "email": "matias_znp@hotmail.com"
  },
  {
    "email": "matosmara@terra.com.br"
  },
  {
    "email": "mbardias@yahoo.com.br"
  },
  {
    "email": "mcbazetto@hotmail.com"
  },
  {
    "email": "mcristinapronko@gmail.com"
  },
  {
    "email": "mdlonghini@faced.ufu.br"
  },
  {
    "email": "mdobrowolsky@professor.sp.gov.br"
  },
  {
    "email": "melinasl_mel@hotmail.com"
  },
  {
    "email": "melldoceoutubro@yahoo.com.br"
  },
  {
    "email": "menezesldd@yahoo.com.br"
  },
  {
    "email": "merinojr@gmail.com"
  },
  {
    "email": "mggermano@ig.com.br"
  },
  {
    "email": "mgirardirs@gmail.com"
  },
  {
    "email": "micaias@ufpi.edu.br"
  },
  {
    "email": "michel@utfpr.edu.br"
  },
  {
    "email": "micheli_trindade.moura@hotmail.com"
  },
  {
    "email": "michelpaschini@gmail.com"
  },
  {
    "email": "miguel.ito12@hotmail.com"
  },
  {
    "email": "mila.astrobio@gmail.com"
  },
  {
    "email": "milenajjm@gmail.com"
  },
  {
    "email": "milenedutra@terra.com.br"
  },
  {
    "email": "miltaaao@ig.com.br"
  },
  {
    "email": "milton_schivani@yahoo.com.br"
  },
  {
    "email": "miltonbarros2002@yahoo.com.br"
  },
  {
    "email": "miriamadsantana@hotmail.com"
  },
  {
    "email": "Mirian_4_miriamadsantana@hotmail.com"
  },
  {
    "email": "mkmapa@gmail.com"
  },
  {
    "email": "mlcastanheira@hotmail.com"
  },
  {
    "email": "mmgirlandias@gmail.com"
  },
  {
    "email": "mmiletto@hotmail.com"
  },
  {
    "email": "monica_sayuri@yahoo.com"
  },
  {
    "email": "monica.bandecchi@hotmail.com"
  },
  {
    "email": "monica.vieira@usp.br"
  },
  {
    "email": "monicabragagnolo@hotmail.com"
  },
  {
    "email": "moraeseliz@gmail.com"
  },
  {
    "email": "mpallenbr@yahoo.com.br"
  },
  {
    "email": "mrnardy@yahoo.com.br"
  },
  {
    "email": "mrvoelzke@hotmail.com"
  },
  {
    "email": "msergio58@yahoo.com.br"
  },
  {
    "email": "mulherdotarzan.jane@gmail.com"
  },
  {
    "email": "mzevallos@on.br"
  },
  {
    "email": "n.p.almeida@gmail.com"
  },
  {
    "email": "n.p.almeida@terra.com.br"
  },
  {
    "email": "na.brito@uol.com.br"
  },
  {
    "email": "natalia.katarina98@gmail.com"
  },
  {
    "email": "nathivalderrama@gmail.com"
  },
  {
    "email": "nedir.soares@ig.com.br"
  },
  {
    "email": "nenzaoguitarra@gmail.com"
  },
  {
    "email": "Néstor Camino"
  },
  {
    "email": "neudilen@gmail.com"
  },
  {
    "email": "new.man@terra.com.br"
  },
  {
    "email": "nilcelicristina@yahoo.com.br"
  },
  {
    "email": "nilcelifernandes@yahoo.com.br"
  },
  {
    "email": "nilva@fisica.uftm.edu.br"
  },
  {
    "email": "ninafernandes_2@hotmail.com"
  },
  {
    "email": "niniwezza@hotmail.com"
  },
  {
    "email": "nivaldomangueira-rural@bol.com.br"
  },
  {
    "email": "noelimage@gmail.com"
  },
  {
    "email": "noiane_ufba@hotmail.com"
  },
  {
    "email": "nonato-c4@hotmail.com"
  },
  {
    "email": "nuricel@uol.com.br"
  },
  {
    "email": "oaorf@ig.com.br"
  },
  {
    "email": "oduvaldofraga@gmail.com"
  },
  {
    "email": "ogiovannini@gmail.com"
  },
  {
    "email": "oliviarobba@gmail.com"
  },
  {
    "email": "omcjn@ig.com.br"
  },
  {
    "email": "omset@ig.com.br"
  },
  {
    "email": "oourdory@hotmail.com"
  },
  {
    "email": "oppupim@hotmail.com"
  },
  {
    "email": "otmats@terra.com.br"
  },
  {
    "email": "p-cardosos@hotmail.com"
  },
  {
    "email": "p.alvesale@gmail.com"
  },
  {
    "email": "pabloprestes@uol.com.br"
  },
  {
    "email": "pajeoandre@hotmail.com"
  },
  {
    "email": "palavrassemcor@gmail.com"
  },
  {
    "email": "paola.balestieri@gmail.com"
  },
  {
    "email": "paola.ferrete@usp.br"
  },
  {
    "email": "paolatrama@yahoo.com.br"
  },
  {
    "email": "paqui.melo@gmail.com"
  },
  {
    "email": "parussolotomas@gmail.com"
  },
  {
    "email": "patriark@uol.com.br"
  },
  {
    "email": "patricia.salcides@hotmail.com"
  },
  {
    "email": "patrick.fisica@hotmail.com"
  },
  {
    "email": "paulacsgsimon@yahoo.com.br"
  },
  {
    "email": "paularmjesus@hotmail.com"
  },
  {
    "email": "paulianerhodes@gmail.com"
  },
  {
    "email": "Paulo Sobreira"
  },
  {
    "email": "paulo_vitor_d_morais@hotmail.com"
  },
  {
    "email": "paulo.leme@usp.br"
  },
  {
    "email": "pauloastronomo@gmail.com"
  },
  {
    "email": "pauloc.pereira@planetario.rio.rj.gov.br"
  },
  {
    "email": "pauloguimaraes28@gmail.com"
  },
  {
    "email": "pauloirineu@bol.com.br"
  },
  {
    "email": "paulokrebs1@gmail.com"
  },
  {
    "email": "paulomenino@ymail.com"
  },
  {
    "email": "paulopoppe@gmail.com"
  },
  {
    "email": "paulorleme@gmail.com"
  },
  {
    "email": "pcop.marta.geografia@gmail.com"
  },
  {
    "email": "pcopfisica@hotmail.com"
  },
  {
    "email": "pedro.colombo@usp.br"
  },
  {
    "email": "pedro.jov@biodinamica.org.br"
  },
  {
    "email": "pedrozille@gmail.com"
  },
  {
    "email": "pereira_anamarta@yahoo.com.br"
  },
  {
    "email": "peterleroyfaria5@gmail.com"
  },
  {
    "email": "petronio@ifpi.edu.br"
  },
  {
    "email": "piedade.pcop.fisica@gmail.com"
  },
  {
    "email": "pietro_mbn@hotmail.com"
  },
  {
    "email": "pit_cn@hotmail.com"
  },
  {
    "email": "planck@if.usp.br"
  },
  {
    "email": "planetario@teatrodasestrelas.com.br"
  },
  {
    "email": "planetarioindigena@hotmail.com"
  },
  {
    "email": "pollyanaschettini@hotmail.com"
  },
  {
    "email": "prialves.fisica@hotmail.com"
  },
  {
    "email": "priscila@mast.br"
  },
  {
    "email": "prof_alex10@hotmail.com"
  },
  {
    "email": "prof_vania@hotmail.com"
  },
  {
    "email": "prof.langhi@gmail.com"
  },
  {
    "email": "profadrianaprestes@uol.com.br"
  },
  {
    "email": "profanair@yahoo.com.br"
  },
  {
    "email": "professor.leandroleal@gmail.com"
  },
  {
    "email": "professora.ariane@yahoo.com.br"
  },
  {
    "email": "proffabiofisica@gmail.com"
  },
  {
    "email": "profivanfisica@ig.com.br"
  },
  {
    "email": "profjcsg@gmail.com"
  },
  {
    "email": "profmueller@gmail.com"
  },
  {
    "email": "profpauloformigoni@gmail.com"
  },
  {
    "email": "profshel@terra.com.br"
  },
  {
    "email": "prothunder@gmail.com"
  },
  {
    "email": "ps.estevao@gmail.com"
  },
  {
    "email": "pvaldastri@gmail.com"
  },
  {
    "email": "quelfisica@gmail.com"
  },
  {
    "email": "querelli@globo.com"
  },
  {
    "email": "quimica.decs@gmail.com"
  },
  {
    "email": "rabaca@astro.ufrj.br"
  },
  {
    "email": "raczuchi@uol.com.br"
  },
  {
    "email": "radma_almeida@hotmail.com"
  },
  {
    "email": "rafa_salinas9@hotmail.com"
  },
  {
    "email": "rafael05cesar@hotmail.com"
  },
  {
    "email": "rafaelgirola@yahoo.com.ar"
  },
  {
    "email": "rafaelm.sp.10@gmail.com"
  },
  {
    "email": "rafaelmarinhocr@gmail.com"
  },
  {
    "email": "rafaelpsimoes@hotmail.com"
  },
  {
    "email": "ramissesfeld@yahoo.com.br"
  },
  {
    "email": "rchoukaira@ig.com.br"
  },
  {
    "email": "RE.BRAGGA@GMAIL.COM"
  },
  {
    "email": "rebecacris_02@hotmail.com"
  },
  {
    "email": "rebelosimone2@hotmail.com"
  },
  {
    "email": "regianecefet@hotmail.com"
  },
  {
    "email": "renamanoel@uol.com.br"
  },
  {
    "email": "renanpetroni@uol.com.br"
  },
  {
    "email": "renatavlc4@gmail.com"
  },
  {
    "email": "renato.augusto26@yahoo.com.br"
  },
  {
    "email": "rezdellama@ig.com.br"
  },
  {
    "email": "rhayson.almeida@gmail.com"
  },
  {
    "email": "ricardo.lacerda@usp.br"
  },
  {
    "email": "ricardo.meloni@gmail.com"
  },
  {
    "email": "ricardo.meloni@ifsp.edu.br"
  },
  {
    "email": "ricardoastronomo@gmail.com"
  },
  {
    "email": "rivelino@ifma.edu.br"
  },
  {
    "email": "rleone2010@hotmail.com"
  },
  {
    "email": "robertalm_fis@yahoo.com.br"
  },
  {
    "email": "robertanproenca@yahoo.com.br"
  },
  {
    "email": "Roberto Nardi"
  },
  {
    "email": "robeu@ig.com.br"
  },
  {
    "email": "robson.ciencias@gmail.com"
  },
  {
    "email": "robsonmedradooli@gmail.com"
  },
  {
    "email": "rock.lucasguaraci@hotmail.com"
  },
  {
    "email": "rodolfo.junior_@hotmail.com"
  },
  {
    "email": "rodolfo.tatsu@gmail.com"
  },
  {
    "email": "Rodolpho Caniato"
  },
  {
    "email": "rodrigopalis@uol.com.br"
  },
  {
    "email": "rodrigosouza.etec@gmail.com"
  },
  {
    "email": "rodriguesfm.unesp@gmail.com"
  },
  {
    "email": "rogers@utfpr.edu.br"
  },
  {
    "email": "romuloncoco@gmail.com"
  },
  {
    "email": "ronaldopaim@ig.com.br"
  },
  {
    "email": "ronaldopneves@utfpr.edu.br"
  },
  {
    "email": "roque.brito@cptec.inpe.br"
  },
  {
    "email": "rosana.souza@usp.br"
  },
  {
    "email": "rosanetristao@hotmail.com"
  },
  {
    "email": "rosely.ap.silveira@gmail.com"
  },
  {
    "email": "rothemayerc@gmail.com"
  },
  {
    "email": "rrechi.2010@gmail.com"
  },
  {
    "email": "rribeiro@if.usp.br"
  },
  {
    "email": "rui@usp.br"
  },
  {
    "email": "ruibuosi@yahoo.com.br"
  },
  {
    "email": "rvieirax@yahoo.com.br"
  },
  {
    "email": "rvlwagner@gmail.com"
  },
  {
    "email": "saladina_athayde@hotmail.com"
  },
  {
    "email": "salete.battilani@gmail.com"
  },
  {
    "email": "samantantonio@outlook.com"
  },
  {
    "email": "sampaioathayde@yahoo.com.br"
  },
  {
    "email": "samyrastephan@hotmail.com"
  },
  {
    "email": "sanderisabella.m@gmail.com"
  },
  {
    "email": "sanderqueiroz@ig.com.br"
  },
  {
    "email": "sandra_6_resandis@uol.com.br"
  },
  {
    "email": "sandrolapas@gmail.com"
  },
  {
    "email": "sanlivra@gmail.com"
  },
  {
    "email": "sanremoudias@hotmail.com"
  },
  {
    "email": "schivani@usp.br"
  },
  {
    "email": "seararoger@gmail.com"
  },
  {
    "email": "Sergio Bisch"
  },
  {
    "email": "sergio.kock@yahoo.com.br"
  },
  {
    "email": "sgasques@gmail.com"
  },
  {
    "email": "sharlanevere@hotmaill.com"
  },
  {
    "email": "sidcalo@hotmail.com"
  },
  {
    "email": "sidivalcalderan@hotmail.com"
  },
  {
    "email": "silaroca@gmail.com"
  },
  {
    "email": "silaslima_18@hotmail.com"
  },
  {
    "email": "silvanamc2525@hotmail.com"
  },
  {
    "email": "silvania.nascimento@gmail.com"
  },
  {
    "email": "silvia@dfte.ufrn.br"
  },
  {
    "email": "simokdv@hotmail.com"
  },
  {
    "email": "simonecuba@gmail.com"
  },
  {
    "email": "simonigehlen@yahoo.com.br"
  },
  {
    "email": "simposio_astronomia@gmail.com"
  },
  {
    "email": "Sione Rodrigues"
  },
  {
    "email": "siqueirajfr@gmail.com"
  },
  {
    "email": "skolimoski@hotmail.com"
  },
  {
    "email": "skolimoski@usp.br"
  },
  {
    "email": "solangegoulart06@hotmail.com"
  },
  {
    "email": "soler.dr@gmail.com"
  },
  {
    "email": "soler.dr@usp.br"
  },
  {
    "email": "soniaakinaga@uol.com.br"
  },
  {
    "email": "soniag@univates.br"
  },
  {
    "email": "sophya.feld@gmail.com"
  },
  {
    "email": "sorindafabico@gmail.com"
  },
  {
    "email": "souza_jns@yahoo.com.br"
  },
  {
    "email": "spiderhigor@yahoo.com.br"
  },
  {
    "email": "sufisica2009@hotmail.com"
  },
  {
    "email": "susetegouveia@yahoo.com.br"
  },
  {
    "email": "suzetebofi@seed.pr.gov.br"
  },
  {
    "email": "sv.marina@hotmail.com"
  },
  {
    "email": "svecchia@uol.com.br"
  },
  {
    "email": "tacito.cardoso@bol.com.br"
  },
  {
    "email": "tairinemachado@gmail.com"
  },
  {
    "email": "taisrdealmeida@gmail.com"
  },
  {
    "email": "talitafeijo@gmail.com"
  },
  {
    "email": "tamila_marques@yahoo.com.br"
  },
  {
    "email": "tassi.fernanda@gmail.com"
  },
  {
    "email": "tatiana.stroeymeyte@edunet.sp.gov.br"
  },
  {
    "email": "tccaetano@yahoo.com.br"
  },
  {
    "email": "teceracto@yahoo.com.br"
  },
  {
    "email": "teddy_almeida@yahoo.com.br"
  },
  {
    "email": "telbiselli@hotmail.com"
  },
  {
    "email": "telcfernandes@hotmail.com"
  },
  {
    "email": "Telma Cristina Dias Fernandes"
  },
  {
    "email": "telma@fc.unesp.br"
  },
  {
    "email": "tercia_francisca@hotmail.com"
  },
  {
    "email": "tereza_fisica@yahoo.com.br"
  },
  {
    "email": "thiago2.souza@usp.br"
  },
  {
    "email": "thiagodabio@gmail.com"
  },
  {
    "email": "thiagoes2000@hotmail.com"
  },
  {
    "email": "thiagogusmao@mast.br"
  },
  {
    "email": "thiagopereiradasilva@yahoo.com.br"
  },
  {
    "email": "thilbas2008@hotmail.com"
  },
  {
    "email": "thirjaer@hotmail.com"
  },
  {
    "email": "tigscorreia@hotmail.com"
  },
  {
    "email": "timoteoricardo@hotmail.com"
  },
  {
    "email": "tina@utfpr.edu.br"
  },
  {
    "email": "tmasantana@bol.com.br"
  },
  {
    "email": "trogello@hotmail.com"
  },
  {
    "email": "tvareiro@yahoo.com.br"
  },
  {
    "email": "ubiracirjunior@virtual.pucminas.br"
  },
  {
    "email": "uelbercfarias@gmail.com"
  },
  {
    "email": "v.melloalves@gmail.com"
  },
  {
    "email": "valdineyjr@gmail.com"
  },
  {
    "email": "valdoski_lilian@yahoo.com.br"
  },
  {
    "email": "valeria.martins@usp.br"
  },
  {
    "email": "valeriaalvesifpi@hotmail.com"
  },
  {
    "email": "valeriamartinsv@hotmail.com"
  },
  {
    "email": "valter42beckman@bol.com.br"
  },
  {
    "email": "vanessacfabri@gmail.com"
  },
  {
    "email": "vanessan@usp.br"
  },
  {
    "email": "vcl.raquel@gmail.com"
  },
  {
    "email": "veraansolin@gmail.com"
  },
  {
    "email": "vertlev@uol.com.br"
  },
  {
    "email": "vicente@ifsp.edu.br"
  },
  {
    "email": "vickdf@gmail.com"
  },
  {
    "email": "victor_espiritosanto@hotmail.com"
  },
  {
    "email": "victor.atomo@gmail.com"
  },
  {
    "email": "victorperesfcm@gmail.com"
  },
  {
    "email": "vijamaluf@hotmail.com"
  },
  {
    "email": "vilmamarian5@gmail.com"
  },
  {
    "email": "vinicius_lima_santos@terra.com.br"
  },
  {
    "email": "vitor@nunciatelli.com"
  },
  {
    "email": "viviane.magnan@ufrgs.br"
  },
  {
    "email": "vivifesouto@hotmail.com"
  },
  {
    "email": "vmalves@ufpel.edu.br"
  },
  {
    "email": "vmartin1963@hotmail.com"
  },
  {
    "email": "volnei.cipriano@hotmail.com.br"
  },
  {
    "email": "vpbarros@if.usp.br"
  },
  {
    "email": "vpbrasil@hotmail.com"
  },
  {
    "email": "vqf2001@yahoo.com.br"
  },
  {
    "email": "walmir.astronomia@gmail.com"
  },
  {
    "email": "walt.view@ig.com.br"
  },
  {
    "email": "wander.veronez@gmail.com"
  },
  {
    "email": "wandersonbreder@ig.com.br"
  },
  {
    "email": "wandersonmilitao@hotmail.com"
  },
  {
    "email": "washcar@dfq.feis.unesp.br"
  },
  {
    "email": "welingtoncerqueira@bol.com.br"
  },
  {
    "email": "wescley_weatherford@hotmail.com"
  },
  {
    "email": "wescley.carvalho@usp.br"
  },
  {
    "email": "wescley@agivee.com.br"
  },
  {
    "email": "wesleyantal@gmail.com"
  },
  {
    "email": "wilsonguerra@gmail.com"
  },
  {
    "email": "wilsonhenriquetatto@gmail.com"
  },
  {
    "email": "wilsonrodrigues@ymail.com"
  },
  {
    "email": "wivirkins@gmail.com"
  },
  {
    "email": "wtc@socrates.if.usp.br"
  },
  {
    "email": "xandy_pedroso@hotmail.com"
  },
  {
    "email": "yhosoume@if.usp.br"
  },
  {
    "email": "yosyescu@yahoo.com.ar"
  },
  {
    "email": "yure.yuy@gmail.com"
  },
  {
    "email": "zanetic@if.usp.br"
  },
  {
    "email": "zejao25@gmail.com"
  },
  {
    "email": "zenaideinesbertol@seed.pr.gov.br"
  },
  {
    "email": "zesantos@yahoo.com.br"
  }
];

//console.log(emails);

var listEmails = emails.map(item => {
    return `${item.email}\n`;
});

fs.open('list.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('File is opened in write mode.');
}); 

fs.writeFile('list.txt', listEmails,
    // callback function that is called after writing file is done
    function(err) { 
        if (err) throw err;
        // if no error
        console.log('file written sucessfully');
  });



