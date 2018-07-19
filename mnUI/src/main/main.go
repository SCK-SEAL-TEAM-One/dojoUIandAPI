package main

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("public"))
	http.Handle("/film/", http.StripPrefix("/film/", fs))

	log.Println("Listening...")
	http.ListenAndServe(":3000", nil)
}