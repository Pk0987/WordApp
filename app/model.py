from .request import Requests_class


class App_class:
    def __init__(self):
      pass
    def synonyms(self, word) -> dict:
        return Requests_class().norm_requests(word, "synonyms")
    def antonyms(self, word) -> dict:
        return Requests_class().norm_requests(word, "antonyms")
    def definitions(self, word) -> dict:
        return Requests_class().norm_requests(word, "definitions")
    def examples(self, word) -> dict:
        return Requests_class().norm_requests(word, "examples")
    def rhymes(self, word) -> dict:
        return Requests_class().norm_requests(word, "rhymes")
    def pronunciation(self, word) -> dict:
        return Requests_class().norm_requests(word, "pronunciation")
    def syllables(self, word) -> dict:
        return Requests_class().norm_requests(word, "syllables")
    def frequency(self, word) -> dict:
        return Requests_class().norm_requests(word, "frequency")
    def typeOf(self, word) -> dict:
        return Requests_class().norm_requests(word, "typeOf")
    def hasTypes(self, word) -> dict:
        return Requests_class().norm_requests(word, "hasTypes")
    def partOf(self, word) -> dict:
        return Requests_class().norm_requests(word, "partOf")
    def hasParts(self, word) -> dict:
        return Requests_class().norm_requests(word, "hasParts")
    def instanceOf(self, word) -> dict:
        return Requests_class().norm_requests(word, "instanceOf")
    def hasInstances(self, word) -> dict:
        return Requests_class().norm_requests(word, "hasInstances")
    def similarTo(self, word) -> dict:
        return Requests_class().norm_requests(word, "similarTo")
    def also(self, word) -> dict:
        return Requests_class().norm_requests(word, "also")
    def entails(self, word) -> dict:
        return Requests_class().norm_requests(word, "entails")
    def memberOf(self, word) -> dict:
        return Requests_class().norm_requests(word, "memberOf")
    def hasMembers(self, word) -> dict:
        return Requests_class().norm_requests(word, "hasMembers")
    def substanceOf(self, word) -> dict:
        return Requests_class().norm_requests(word, "substanceOf")
    def hasSubstances(self, word) -> dict:
        return Requests_class().norm_requests(word, "hasSubstances")
    def inCategory(self, word) -> dict:
        return Requests_class().norm_requests(word, "inCategory")
    def hasCategories(self, word) -> dict:
        return Requests_class().norm_requests(word, "hasCategories")
    def usageOf(self, word) -> dict:
        return Requests_class().norm_requests(word, "usageOf")
    def hasUsages(self, word) -> dict:
        return Requests_class().norm_requests(word, "hasUsages")
    def inRegion(self, word) -> dict:
        return Requests_class().norm_requests(word, "inRegion")
    def regionOf(self, word) -> dict:
        return Requests_class().norm_requests(word, "regionOf")
    def pertainsTo(self, word) -> dict:
        return Requests_class.norm_requests(word, "pertainsTo")


