import scrapy
from scrapy.selector import Selector

class KeplerSpider(scrapy.Spider):
    name = "kepler"
    allowed_domains = ["www.ibm.com"]
    start_urls = ["https://www.ibm.com/br-pt/"]

    def parse(self, response):
        paragrafos = response.xpath('//div[@class="ibm-grid-col-sm-4-3 ibm-grid-col-lg-16-10 ibm-grid-col-xlg-16-12 ibm-grid-col-seamless ani-reveal ani-fadeInUp"]//p/text()').extract()

        tag_p = response.xpath('//p/text()').extract()

        #yield {'paragrafos': tag_p}

        keyword = "IBM"

        filtered = [text for text in tag_p if keyword in text]

        for text in filtered:
            yield {'final texts': text}

