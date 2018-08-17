package com.example.demo.dao;

import com.example.demo.domain.LogParseEntity;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface LogParseDao {

    LogParseEntity selectLogParseByIP(String ip);
}
