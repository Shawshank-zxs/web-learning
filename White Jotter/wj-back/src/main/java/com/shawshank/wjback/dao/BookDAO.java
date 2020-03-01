package com.shawshank.wjback.dao;

import com.shawshank.wjback.pojo.Book;
import com.shawshank.wjback.pojo.Category;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface BookDAO extends JpaRepository<Book,Integer> {
    List<Book> findAllByCategory (Category category);
    List<Book> findAllByTitleLikeOrAuthorLike(String keyword1, String keyword2);
    
}