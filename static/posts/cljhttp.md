---
layout: base.liquid
tags: post
ptitle: "No clojure.http"
title: "A rant about making HTTP requests in clojure (and an appreciation of how it is done in racket)"
---

4/1/2024

# Making a simple Http get request in clojure is way too verbose.
Below is an example:

```clojure
(defn make-get-request
  [url]
  (let [connection (.openConnection (URL. url))]
    (.setRequestMethod connection "GET")
    (let [response-code (.getResponseCode connection)]
      (if (= response-code HttpURLConnection/HTTP_OK)
        (let [input-stream (.getInputStream connection)
              reader (java.io.BufferedReader.
                      (java.io.InputStreamReader. input-stream))
              response (.readLine reader)]
          (println "Response: " response)
          response)
        (println "Request Failed with code: " response-code)))))
(make-get-request "https://reqres.in/api/users/2")
```

I guess this is why it is one the [higher paying languages out there](https://survey.stackoverflow.co/2023/#section-top-paying-technologies-top-paying-technologies).

I understand that clojure is a language hosted on the JVM but that does not mean that it can't have it's own idiomatic standard library. *If there can be a `clojure.math` then there can also be a `clojure.http`*

This is how it is done in racket btw:

```scheme
#lang racket

(require net/url)

(define (make-get-request url)
  (let ([response (get-pure-port (string->url url))])
        (port->string response)))
(make-get-request "https://reqres.in/api/users/2")
```
This is amazing. This is elegant. This is how **ALL** languages should do it (imo).

