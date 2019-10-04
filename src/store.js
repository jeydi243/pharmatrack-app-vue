/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

let bonlivraison = {
	Id: "",
	medicaments: "", //donne la liste des medicaments
	emetteur: [], //un tableau des identifiant de medicament
	status: "",
	bonCommande: "" // id du bon de commande
}
let itemlist={
	qte:0,
	medoc:""
}
let boncommande = {
	Id: "",
	status: "",
	itemlist: [], //seulement du texte qui decrit le nom du medicament
	emetteur:"", //l'id de l'emetteur
	destinataire: "" //l'id du destinataire
}
let pharmacien = {
	numeroOrdre: "",
	nom: "",
	email: "",
	etablissement: ""
}
let currentUser = {
	numAutorisation:"",
	typeEtablissement:"",
	cardToUse:"",
	login:"",
	pass:""
}
let etablissement = {
	numAutorisation: "",
	nom: "",
	addresse: "",
	pharmacien: "", //doit faire reference a un numero d'ordre d'un pharmacien
	login: "",
	pass: ""
}
let medicament = {
	code: "",
	nom: "",
	description: "",
	dateFab: "",
	dateExp: "",
	prixUnitaire: "" //doit correspondre a une identité d'un fabricant
}

export default new Vuex.Store({
	state: {
		currentUser:currentUser,
		Medicament: medicament,
		Fabricant: etablissement,
		Grossiste: etablissement,
		Pharmacie: etablissement,
		Pharmacien: pharmacien,
		BonCommande: boncommande,
		BonLivraison: bonlivraison
	},
	mutations: {
		login(state,obj) {
			state.currentUser.typeEtablissement = obj.typeEtablissement
			state.currentUser.cardToUse = obj.cardToUse;
			state.currentUser.numAutorisation = obj.numAutorisation
			state.currentUser.login = obj.login
			state.currentUser.pass = obj.pass
		},
		loginAdmin(state,cardToUse){
			state.currentUser.cardToUse = cardToUse;
		},
		logout(state) {
			state.currentUser.cardToUse = "";
			state.currentUser.typeEtablissement = ""
			state.currentUser.numAutorisation = ""
			state.currentUser.login = ""
			state.currentUser.pass = ""
		}
	},
	actions: {

	},
	getters: {
		MEDICAMENT: (state) => {
			return state.Medicament
		},
		FABRICANT: (state) => {
			return state.Fabricant
		},
		GROSSISTE: (state) => {
			return state.Grossiste
		},
		PHARMACIE: (state) => {
			return state.Pharmacie
		},
		PHARMACIEN: (state) => {
			return state.Pharmacien
		},
		BONL: (state) => {
			return state.BonLivraison
		},
		BONC: (state) => {
			return state.BonCommande
		},
		CARDTOUSE: (state) => {
			return state.currentUser.cardToUse
		},
		currentUser: (state) => {
			return state.currentUser
		},
		a: (state) => {
			return state.currentUser.numAutorisation
		},
		b: (state) => {
			return state.currentUser.typeEtablissement
		}
	}
});