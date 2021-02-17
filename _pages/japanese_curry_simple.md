---
title: Japanese Curry - simple
layout: single
permalink: recipes/curries/japanese_curry_simple
sidebar:
  nav: "sitemap"
toc: true
---

- Oil
- 1 onion
- 3 medium carrots
- 1.5 large potatoes
- 3 cloves of garlic
- Water
- 3 S&B Golden Curry mix cubes
- ½ cup of frozen peas
- Salt
- Pepper
- Udon noodles or rice


<script type="text/python">
"""Code for the clock"""

import time
import math

from browser import document
import browser.timer

content = document["content"]

sin, cos = math.sin, math.cos
width, height = 250, 250 # canvas dimensions
ray = 100 # clock ray

background = "SteelBlue"
digits = "#fff"
border = "blue"

def needle(angle, r1, r2):
    """Draw a needle at specified angle in specified color.
    r1 and r2 are percentages of clock ray.
    """
    x1 = width / 2 - ray * cos(angle) * r1
    y1 = height / 2 - ray * sin(angle) * r1
    x2 = width / 2 + ray * cos(angle) * r2
    y2 = height / 2 + ray * sin(angle) * r2
    ctx.beginPath()
    ctx.strokeStyle = "#fff"
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.stroke()

def set_clock():
    # erase clock
    ctx.beginPath()
    ctx.fillStyle = background
    ctx.arc(width / 2, height / 2, ray * 0.89, 0, 2 * math.pi)
    ctx.fill()

    # redraw hours
    show_hours()

    # print day
    now_time = time.time()
    now = time.localtime(now_time)
    microsecs = now_time - int(now_time)
    day = now.tm_mday
    ctx.font = "bold 14px Arial"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"
    ctx.fillStyle = "#000"
    ctx.fillText(day, width * 0.7, height * 0.5)

    # draw needles for hour, minute, seconds
    ctx.lineWidth = 2
    hour = now.tm_hour % 12 + now.tm_min / 60
    angle = hour * 2 * math.pi / 12 - math.pi / 2
    needle(angle, 0.05, 0.45)
    minute = now.tm_min
    angle = minute * 2 *math.pi / 60 - math.pi / 2
    needle(angle, 0.05, 0.7)
    ctx.lineWidth = 1
    second = now.tm_sec + microsecs
    angle = second * 2 * math.pi / 60 - math.pi / 2
    needle(angle, 0.05, 0.8)

def show_hours():
    ctx.beginPath()
    ctx.arc(width / 2, height / 2, ray * 0.05, 0, 2 * math.pi)
    ctx.fillStyle = digits
    ctx.fill()
    for i in range(1, 13):
        angle = i * math.pi / 6 - math.pi / 2
        x3 = width / 2 + ray * cos(angle) * 0.82
        y3 = height / 2 + ray * sin(angle) * 0.82
        ctx.font = "18px Arial"
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(i, x3, y3)
    # cell for day
    ctx.fillStyle = "#fff"
    ctx.fillRect(width * 0.65, height * 0.47, width * 0.1, height * 0.06)

canvas = content.select_one(".clock")

# draw clock border
if hasattr(canvas, 'getContext'):
    ctx = canvas.getContext("2d")

    ctx.beginPath()
    ctx.arc(width / 2, height / 2, ray, 0, 2 * math.pi)
    ctx.fillStyle = background
    ctx.fill()

    browser.timer.set_interval(set_clock, 100)
    show_hours()
else:
    content.select_one('.navig_zone').html = "canvas is not supported"

</script>


Cut the onion into slices from tip to toe. Peel the carrots and the potatoes and cut 
them into thumb tip sized cubes. Heat up some oil in a large pan and add the onions. 
Fry until they start to turn translucent and then add the carrots and potatoes. 
Grate the garlic and add as well. Cook everything until things start turning soft, 
about 10 minutes. Cover with water and crumble in the curry mix cubes. Start preparing 
the sides; boil some udon noodles or cook some rice. Add the chickpeas and boil down 
until the mix starts to thicken lightly. Add the frozen peas and cook for another 
few minutes. Serve and enjoy! Optionally sprinkle with sesame seeds or chopped scallion.
