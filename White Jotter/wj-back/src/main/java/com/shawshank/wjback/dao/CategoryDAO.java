package com.shawshank.wjback.dao;

import com.shawshank.wjback.pojo.Category;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryDAO extends JpaRepository<Category,Integer> {
}