import React, { useRef } from "react";
import { Button, Col, Form, Row, Stack } from "react-bootstrap";
import AppButton from "./AppButton";
import CreatableReactSelect from "react-select/creatable";
import { Link } from "react-router-dom";

function NoteForm() {
  const titleRef = useRef<HTMLInputElement>(null);
  const markdownRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Form>
      <Row>
        <Col>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Title</Form.Label>
            <Form.Control required ref={titleRef} />
            <Form.Text className="text-muted">
              Type title for your note.
            </Form.Text>
          </Form.Group>
        </Col>
        <Col>
          <Form.Group className="mb-3" controlId="tags">
            <Form.Label>Tags</Form.Label>
            <CreatableReactSelect isMulti />
          </Form.Group>
        </Col>
      </Row>
      <Form.Group className="mb-3" controlId="markdown">
        <Form.Label>Tags</Form.Label>
        <Form.Control required as="textarea" rows={10} ref={markdownRef} />
      </Form.Group>
      <Stack direction="horizontal" gap={2}>
        <AppButton
          title="Save"
          type="submit"
          color="primary"
          onClick={() => console.log("submit")}
        />
        <Link to="..">
          <AppButton
            title="Cancel"
            type="button"
            color="secondary"
            onClick={() => console.log("submit")}
          />
        </Link>
      </Stack>
    </Form>
  );
}

export default NoteForm;
