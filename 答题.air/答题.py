# -*- encoding=utf8 -*-
__author__ = "evlon"

from airtest.core.api import *
from airtest.core.settings import Settings as ST
# 脚本运行时将按照此算法顺序识别，直到“找到符合设定阈值的识别结果”或“识别超时”:
ST.CVSTRATEGY = ["tpl"]

auto_setup(__file__)

# 

while 1==1:
    touch(Template(r"tpl1625921954651.png", record_pos=(0.0, 0.411), resolution=(414, 736)))

    wait(Template(r"tpl1625923438516.png", record_pos=(-0.002, -0.444), resolution=(414, 736)))# or wait(Template(r"tpl1625921792964.png", record_pos=(-0.002, -0.444), resolution=(414, 736)))
    wait(Template(r"tpl1625921999797.png", record_pos=(-0.162, 0.0), resolution=(414, 736)))


    touch(Template(r"tpl1625921999797.png", record_pos=(-0.162, 0.0), resolution=(414, 736)))
    
    if not (exists(Template(r"tpl1625922659789.png", record_pos=(-0.333, -0.2), resolution=(414, 736)))  or exists(Template(r"tpl1625924293169.png", record_pos=(-0.314, -0.205), resolution=(414, 736)))):
        if exists(Template(r"tpl1625922054266.png", record_pos=(-0.085, 0.0), resolution=(414, 736))):
            touch(Template(r"tpl1625922054266.png", record_pos=(-0.085, 0.0), resolution=(414, 736)))
            if exists(Template(r"tpl1625922075724.png", record_pos=(-0.007, 0.0), resolution=(414, 736))):
                touch(Template(r"tpl1625922075724.png", record_pos=(-0.007, 0.0), resolution=(414, 736)))
                if exists(Template(r"tpl1625922096701.png", record_pos=(0.08, -0.002), resolution=(414, 736))):
                    touch(Template(r"tpl1625922096701.png", record_pos=(0.08, -0.002), resolution=(414, 736)))
                    if exists(Template(r"tpl1625922118164.png", record_pos=(0.167, 0.0), resolution=(414, 736))):
                        touch(Template(r"tpl1625922118164.png", record_pos=(0.167, 0.0), resolution=(414, 736)))
    touch(Template(r"tpl1625921931886.png", record_pos=(0.0, 0.406), resolution=(414, 736)))

    wait(Template(r"tpl1625921954651.png", record_pos=(0.0, 0.411), resolution=(414, 736)))





