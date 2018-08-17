package com.example.demo.controller;

import com.example.demo.dao.LogParseDao;
import com.example.demo.domain.LogParseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class LogParseController {
    @Autowired
 private   LogParseDao logParseDao;

    @RequestMapping("/findLogParseByIP")
    public LogParseEntity findLogParseByIP() {

        LogParseEntity logParse = logParseDao.selectLogParseByIP("120.237.156.100");
        return logParse;
    }
}
