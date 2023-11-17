import scrapy


class KeplerG1Spider(scrapy.Spider):
    name = "kepler-g1"
    allowed_domains = ["g1.globo.com"]
    start_urls = ["https://g1.globo.com"]

    def parse(self, response):
        paragrafos = response.xpath('//div[@class=""]/li[@class="bstn-hl-itemlist bstn-hl-mainitem"]/span[@class="bstn-hl-title gui-color-primary gui-color-hover gui-color-primary-bg-after"]/text()').extract()

        tag_p = response.xpath('//p/text()').extract()

        yield {'paragrafos': tag_p}
