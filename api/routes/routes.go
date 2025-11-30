package routes

import (
	"github.com/alohamat/study-flow/middlewares"
	"github.com/gorilla/mux"
)

func InitRouter() *mux.Router {
	router := mux.NewRouter()
	router.Use(middlewares.CorsMiddleware)
	// put router handlefuncs

	return router
}