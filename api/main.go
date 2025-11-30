package main

import (
	"log"
	"net/http"
	"github.com/alohamat/study-flow/routes"
)

func main() {
	router := routes.InitRouter()
	log.Println("server running at 8080");
	log.Fatalln(http.ListenAndServe(":8080", router))
}