module.exports=require('../decode-property-map.js')(JSON.parse(require('zlib').gunzipSync(Buffer.from('H4sIAAAAAAAAA+2cS28cRRCA/4vPfZjq1/QceYRTSCISiQNCq008OCtir7Wskfj3aMYGJVNfOTUZEjhws3qre6rr/Wr/1IUhXHx9vLu53J/+2D0b786n/buL0AUJFy/Hq+vx5rx7Od7uT/vz8fSw/mJ/2l+d9rdv1S/Wjh/fHs7j7uXt/s34kTMyY5P+ga/GcPH8/HY8Lc59cnc63o77m92r8XR9uPlrfwFoeQ96+bFvjtfXR73M8NGA797b8Ozu+vX42OkVMIw1XDwdfznvXh13Pxyu3p5XAWYArKZ4GAyJ9g6DRuqb2eQKYShwE+K1MF4EGk0EosUhF1rpI0L1wYlqN4lkTABI6CQ6EYmfBydBezqROBS9gAUABydtpSdAieHi2fHmt9v9m8PN1e77/enXBzlyXVFjHnGvJmSxZNDHLQUnsFdC7GCxeWVCst4+sxUoJkXfW1JIDSikBUNC0lJFVyJEa8iFcQoX87Zp/3TOw5oTkiVjGyR9vYXYK9AyyfpiTWSSra9O+9eHN3+bgmjJ0QPc0/F8HpVp+tBoEbRtjulgUCyLJovtM/6LNQlZL3azMKszZfaKC6J8aDWVhVbQiQlAF+iIAoZKwJcYEm9rnUnu0HmmEUDEDlhguENDVgCBpE/tZlFXsDG0gY71ypDkkBNo22ARRkEaccMCLtZosKVozxQNspB7aG5IOjOinSSpSLMEkGdDi65AG3hgMe6pXaMEcgbkQiNtJq+hL56AbGtYQWQzkHSyh7x6g7WMJCNfTfyKQQgh2+hrclbb5ii0dHpA6K/gJMH51pi7fsplg56JFQhWe5Akks1+jfoZQZq+qKxgGwVZFEtuYts2W0ih3JoretWSrKYU3G7oG8XWVtwh5d80k9u4tMXQfQ6D2txf/wwmVar762QlE6qb1oOEmPvknfbSdxPdj0hmsdv3GSa4VyUrXTpPqaWvkGUnApRIEvZaGw2biUk5GQmteskqB7mMpiCkoOr1KOokRnWbLWwBCy4uvf8yRLfsnfvbTvL0ANm7fdcK56MTcXRoW6lLVs0bSvN3vAZiwFB6BdUIde0wWSRFUy2FSNroK2VRHYzjy4wEYp3nWBgY3ogTMWQN6jf/XN/IjxhhqhFzNgwWP5FmMam9cOSAiMVYwnR6bC9+3vyfOVE3xdHRyvQpxvHZJ7pkyqRBVkoUsaPgjkS3QmKRiOxwouxYuExnNHKckN7uRUalusfUZS4smuibkm7kNJfoXR6CL0p4riGJ10d0IRKi/i4Rx2zgeMzbe53hmkvR5w11oJQA+kDSEUtTGDRoCVULVAmNQs7elx5xD4nME+3NXsD0JbCBOquEQifS7graZomLjksSS+Zk1VRu1ADPGGrSDB9ouoK+owPWFBqWZUAr2EFiVITBm6WrWiwH3o6JVGRUjfyB9kMvweobbYvVjP6K4WTtLNqFAoYElSVNjJY3e4APBA2TvxqaplQjM7Cigl9Yn7w5u7/su6YiQ0pGGGWofiRs5ILpx9jwvmerCA9qX4lFeQoFneMrXsJhlTFmw++uSHy2xWx8Jik9Q2qpyxwZc/uThNagKMmd2Wx2sok6dhBz9NOgkTs39H4+kbNNoYDLiS3IQOcmImu0aBh7KuZrpYg8KUOAVLzxpZm8BpNfMRRyWIZn+OTRNu83aC/GQux4NX5GOWUBGN0IQuFtdmKLGCiZIxVE1vnv3ftjRsaUgn96dvGh3ZPr1+Pl5eHmij6pfn1xvN19eziNb86H483+3e674+l6f8aDn/8+nk6HyxHPXfxIY0bFjjeMwVs6JRoNgQXBCrGlPDLZ6prHnMWRhm2soV9j+BOD823nUjFc7pu+SPVY50xIB6v+IcZNg7nUNN9id8jXGqLyyd/dAmcU/iyN8NLR6La7yOMb202zadUfxlGIpEP/x0forYG+gQ6qOKXs5XLT9It5dv3L1ULZSpQ5btYUY9WFGKELOWlk7zvSPrnSuxNwsQos0loMsQFg0gIkINN0YkI43TSMoVCdALyh0NS4EIMIxzSnAJpnhZKq0rQsJNAm6SVkrOVgyYgiGIhW4v0cqsOIScY2LASb0gUY4aaOm1TKywYsgv2X1pJRxdWc7AcyFRKA6RJDBKmLlVQ1Q/RBlhWzXjLVZOTMUrnL0JN9ITiKKhqlK2Y93nVrQhtKzF4/WsgXpTBQiw8qHy2AUZ6apj5KYmdIItnqbja3vmgGyYFhspHQa8KhcRKSNto+eF8IuR8d1QLdAulCxbikG6B0UadIqWL6r2lV+hAxgiAGAKciVk+wNvxIF2zxpbZCl2guoTOKbNIZBUaHQomYBeMNM63+2fdV/TpfYhK7OeBwQDZqbJmTKxAuN3LEZpELS4TuqVIs/lQMzi0fsqKJ6oQcVojElvqsMZAAjfJpvlOkhyZQDK0HWxtD0YaiBOlg1qhRXELl9IIFIOtJEoMaeZR+KCP01gwQEHg6w2uI0tDUw52UQqr0+Ap8Z52NvXo9VvRivr8lPVPS+ZQRLVFbinpww2znvQUpoyigQSk/MU81XsDa798efc/80doRYfbo20IVBBd6bpb06jyOpWtwNOj4/1N97RcUZKPeD8Xs3jWaKbdFAWMn670EpK1CrOQhfSKKBAhg+W0EdIniXFtY3jYHgVS4bKgIZmOsBg7sIW6lrLMYCQqOiiZjTgRe/eeeAngay5iSZO35SgowPCLTWKemClA/T7Mz1DWjafSSJwleOKWIXm5qPDrcXILNeOAQZ3FcLBc2pAYgnEkRAs8EU+RVrDY43J1CBniznu1RAw7nFvvbJOXLy5ecQutBcXOhPFNoFD2nYapZZbAJHf3jgRgqdn6d/fT5btQ68jevedwHtMXKHmGaIeVQyX+YgzVL89tqaNoq43CU5IjzYqH3PXugQWx+NIYvL71vp6jMASUCnryjPjw+viNAQts3cU0PFiQknNOJMMEQ54KRik2q5DxbPl2y7HQwnIbcQo499J5i1/d9KDAN1MeYu8QxXerCgA3XaRAjZvrPD7V0eaoMlYSzALT+85/6rHW/0EoAAA==','base64'))))