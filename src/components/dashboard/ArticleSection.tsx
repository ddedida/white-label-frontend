"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaPlus, FaTrashAlt, FaEdit } from "react-icons/fa";

interface Article {
  id: number;
  title: string;
  content: string;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}

const ArticleSection = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isCreating, setIsCreating] = useState(false);
  const [isEditing, setIsEditing] = useState<Article | null>(null);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newImage, setNewImage] = useState<File | null>(null);
  const router = useRouter();

  // GET ALL ARTICLES
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("Please login first");
          router.push("/login");
          return;
        }

        const response = await fetch("http://localhost:3000/artikel", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const result = await response.json();
          setArticles(result.data);
        } else {
          const errorResult = await response.json();
          alert(`Error: ${errorResult.message}`);
        }
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [router]);

  // DELETE ARTICLE
  const handleDelete = async (id: number) => {
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        router.push("/login");
        return;
      }

      const response = await fetch(
        `http://localhost:3000/artikel/delete-artikel/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        setArticles(articles.filter((article) => article.id !== id));
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Failed to delete article:", error);
    }
  };

  // CREATE ARTICLE
  const handleCreateArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", newTitle);
      formData.append("content", newContent);
      if (newImage) {
        formData.append("image", newImage);
      }

      const token = localStorage.getItem("token");
      const response = await fetch(
        "http://localhost:3000/artikel/add-artikel",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Artikel berhasil ditambahkan!");
        setIsCreating(false); // Kembali ke daftar artikel setelah sukses membuat artikel
        setArticles([...articles, result.data]); // Tambahkan artikel baru ke daftar artikel
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Failed to create article:", error);
    }
  };

  // EDIT ARTICLE
  useEffect(() => {
    if (isEditing) {
      setNewTitle(isEditing.title);
      setNewContent(isEditing.content);
    }
  }, [isEditing]);

  useEffect(() => {
    // Reset values when switching to create mode
    if (isCreating) {
      setNewTitle("");
      setNewContent("");
      setNewImage(null);
    }
  }, [isCreating]);

  const handleEditArticle = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!isEditing) return;

      const formData = new FormData();
      formData.append("title", newTitle);
      formData.append("content", newContent);
      if (newImage) {
        formData.append("image", newImage);
      }

      const token = localStorage.getItem("token");
      const response = await fetch(
        `http://localhost:3000/artikel/edit-artikel/${isEditing.id}`,
        {
          method: "PATCH",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        },
      );

      const result = await response.json();
      if (result.status === "success") {
        alert("Artikel berhasil diubah!");
        setIsEditing(null);
        setArticles(
          articles.map((article) =>
            article.id === isEditing.id ? result.data : article,
          ),
        );
      } else {
        alert(`Error: ${result.message}`);
      }
    } catch (error) {
      console.error("Failed to edit article:", error);
    }
  };

  return (
    <div className="flex min-h-screen w-4/5 flex-col items-center bg-slate-50 px-20 py-10">
      {!isCreating && !isEditing ? (
        <>
          <div className="flex h-fit w-full items-center justify-between">
            <h1 className="font-secondary text-3xl font-bold text-base-dark">
              Article Dashboard
            </h1>
            <button
              onClick={() => setIsCreating(true)}
              className="flex items-center gap-x-2 rounded-md bg-slate-200 px-5 py-3 hover:bg-slate-300"
            >
              <FaPlus className="fill-blue-main" />
              <p className="font-secondary text-lg font-normal text-blue-main">
                Buat Artikel
              </p>
            </button>
          </div>

          <div className="mt-10 w-full rounded-lg bg-white p-6 shadow-md">
            <table className="min-w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Content</th>
                  <th className="px-4 py-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {articles.map((article) => (
                  <tr key={article.id}>
                    <td className="border px-4 py-2">{article.id}</td>
                    <td className="border px-4 py-2">{article.title}</td>
                    <td className="border px-4 py-2">{article.content}</td>
                    <td className="flex justify-center gap-4 border px-4 py-2">
                      <button
                        onClick={() => setIsEditing(article)}
                        className="flex items-center gap-x-1 rounded bg-yellow-500 px-3 py-1 text-white hover:bg-yellow-700"
                      >
                        <FaEdit />
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(article.id)}
                        className="flex items-center gap-x-1 rounded bg-red-500 px-3 py-1 text-white hover:bg-red-700"
                      >
                        <FaTrashAlt />
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : isCreating ? (
        // Formulir untuk membuat artikel baru
        <form
          onSubmit={handleCreateArticle}
          className="flex w-full flex-col gap-4 bg-white p-6 shadow"
        >
          <h2 className="font-secondary text-2xl font-bold text-blue-main">
            Buat Artikel Baru
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="title"
                className="font-secondary text-lg font-medium"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full rounded border p-2"
                placeholder="Enter title"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="content"
                className="font-secondary text-lg font-medium"
              >
                Content
              </label>
              <textarea
                id="content"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full rounded border p-2"
                placeholder="Enter content"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="image"
                className="font-secondary text-lg font-medium"
              >
                Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files && setNewImage(e.target.files[0])
                }
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setIsCreating(false)}
              className="mt-4 rounded bg-gray-300 px-4 py-2 font-medium text-black hover:bg-gray-500"
            >
              Batal
            </button>
            <button
              type="submit"
              className="mt-4 rounded bg-blue-main px-4 py-2 font-medium text-white hover:bg-blue-600"
            >
              Simpan
            </button>
          </div>
        </form>
      ) : isEditing ? (
        // Formulir untuk mengedit artikel
        <form
          onSubmit={handleEditArticle}
          className="flex w-full flex-col gap-4 bg-white p-6 shadow"
        >
          <h2 className="font-secondary text-2xl font-bold text-blue-main">
            Edit Artikel
          </h2>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="title"
                className="font-secondary text-lg font-medium"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full rounded border p-2"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="content"
                className="font-secondary text-lg font-medium"
              >
                Content
              </label>
              <textarea
                id="content"
                value={newContent}
                onChange={(e) => setNewContent(e.target.value)}
                className="w-full rounded border p-2"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                htmlFor="image"
                className="font-secondary text-lg font-medium"
              >
                Image
              </label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) =>
                  e.target.files && setNewImage(e.target.files[0])
                }
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              onClick={() => setIsEditing(null)}
              className="mt-4 rounded bg-gray-300 px-4 py-2 font-medium text-black hover:bg-gray-500"
            >
              Batal
            </button>
            <button
              type="submit"
              className="mt-4 rounded bg-blue-main px-4 py-2 font-medium text-white hover:bg-blue-600"
            >
              Simpan
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};

export default ArticleSection;
